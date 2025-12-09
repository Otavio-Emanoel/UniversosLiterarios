"use client"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { themes } from "@/lib/themes"

export default function QuizPage() {
  const params = useParams()
  const router = useRouter()
  const themeId = Number.parseInt(params.id as string)
  const theme = themes[themeId]

  const backgroundStyle = theme?.coverImage
    ? {
        backgroundColor: theme.colors.background,
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${theme.coverImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    : { backgroundColor: theme?.colors.background }

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [scores, setScores] = useState<Record<number, number>>({})

  useEffect(() => {
    const stored = localStorage.getItem("scores")
    if (stored) {
      setScores(JSON.parse(stored))
    }
  }, [])

  if (!theme) {
    return <div>Tema não encontrado</div>
  }

  const question = theme.questions[currentQuestion]

  const handleAnswerClick = (index: number) => {
    if (!showFeedback) {
      setSelectedAnswer(index)
      const correct = index === question.correct
      setIsCorrect(correct)
      setShowFeedback(true)

      if (correct) {
        const newScores = { ...scores, [themeId]: (scores[themeId] || 0) + 1 }
        setScores(newScores)
        localStorage.setItem("scores", JSON.stringify(newScores))
      }
    }
  }

  const handleNext = () => {
    if (currentQuestion < theme.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
    } else {
      // Go to next theme or results
      if (themeId < themes.length - 1) {
        router.push(`/theme/${themeId + 1}`)
      } else {
        router.push("/results")
      }
    }
  }

  const progress = ((currentQuestion + 1) / theme.questions.length) * 100

  return (
    <main className="min-h-screen py-12 px-4" style={backgroundStyle}>
      <div className="max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <h2 className="font-semibold" style={{ color: theme.colors.primary }}>
              Pergunta {currentQuestion + 1} de {theme.questions.length}
            </h2>
            <span style={{ color: theme.colors.secondary }}>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: `${theme.colors.primary}30` }}>
            <div
              className="h-full transition-all duration-300"
              style={{
                width: `${progress}%`,
                backgroundColor: theme.colors.primary,
              }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8" style={{ color: theme.colors.primary }}>
            {question.question}
          </h3>

          {/* Alternatives */}
          <div className="space-y-3">
            {question.alternatives.map((alt, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswerClick(idx)}
                disabled={showFeedback}
                className="w-full p-4 rounded-lg text-left font-medium transition-all duration-200 border-2"
                style={{
                  borderColor: selectedAnswer === idx ? (isCorrect ? "#10b981" : "#ef4444") : theme.colors.accent,
                  backgroundColor:
                    selectedAnswer === idx ? (isCorrect ? "#10b98130" : "#ef444430") : `${theme.colors.accent}20`,
                  color: theme.colors.text,
                  cursor: showFeedback ? "not-allowed" : "pointer",
                  opacity: showFeedback && selectedAnswer !== idx ? 0.5 : 1,
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 rounded-full border-2 flex items-center justify-center"
                    style={{
                      borderColor: selectedAnswer === idx ? (isCorrect ? "#10b981" : "#ef4444") : theme.colors.accent,
                    }}
                  >
                    {selectedAnswer === idx && (
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{
                          backgroundColor: isCorrect ? "#10b981" : "#ef4444",
                        }}
                      />
                    )}
                  </div>
                  {alt}
                  {showFeedback && idx === question.correct && <span className="ml-auto text-green-500">✓</span>}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Feedback */}
        {showFeedback && (
          <div
            className="p-6 rounded-lg mb-8 border-2"
            style={{
              borderColor: isCorrect ? "#10b981" : "#ef4444",
              backgroundColor: isCorrect ? "#10b98120" : "#ef444420",
            }}
          >
            <p
              className="font-bold mb-2"
              style={{
                color: isCorrect ? "#10b981" : "#ef4444",
              }}
            >
              {isCorrect ? "✓ Resposta Correta!" : "✗ Resposta Incorreta!"}
            </p>
            <p
              style={{
                color: theme.colors.text,
              }}
            >
              A resposta correta é: <span className="font-semibold">{question.alternatives[question.correct]}</span>
            </p>
          </div>
        )}

        {/* Next Button */}
        {showFeedback && (
          <Button
            onClick={handleNext}
            className="w-full py-6 text-lg"
            style={{
              backgroundColor: theme.colors.primary,
              color: theme.colors.background,
            }}
          >
            {currentQuestion === theme.questions.length - 1 ? "Próximo Tema" : "Próxima Pergunta"}
          </Button>
        )}
      </div>
    </main>
  )
}
