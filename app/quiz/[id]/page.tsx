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
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.8)), url(${theme.coverImage})`,
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
      <div className="max-w-2xl mx-auto space-y-6 animate-[fadeIn_0.6s_ease-out]">
        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <span
                className="inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold tracking-[0.18em] uppercase"
                style={{
                  backgroundColor: `${theme.colors.accent}33`,
                  color: theme.colors.accent,
                  boxShadow: `0 8px 24px ${theme.colors.accent}40`,
                }}
              >
                Quiz
              </span>
              <h2
                className="text-2xl sm:text-3xl font-bold"
                style={{ color: theme.colors.primary }}
              >
                Pergunta {currentQuestion + 1} / {theme.questions.length}
              </h2>
            </div>
            <span className="text-lg font-semibold" style={{ color: theme.colors.secondary }}>
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-3 rounded-full overflow-hidden shadow-inner" style={{ backgroundColor: `${theme.colors.primary}25` }}>
            <div
              className="h-full transition-all duration-500"
              style={{
                width: `${progress}%`,
                backgroundColor: theme.colors.primary,
              }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="mb-10">
          <h3
            className="text-3xl sm:text-4xl font-black mb-6 leading-tight drop-shadow"
            style={{ color: theme.colors.text }}
          >
            {question.question}
          </h3>

          {/* Alternatives */}
          <div className="space-y-3">
            {question.alternatives.map((alt, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswerClick(idx)}
                disabled={showFeedback}
                className="w-full p-4 rounded-xl text-left font-semibold transition-all duration-300 border-2 hover:-translate-y-[2px] hover:shadow-lg"
                style={{
                  borderColor: selectedAnswer === idx ? (isCorrect ? "#10b981" : "#ef4444") : theme.colors.accent,
                  backgroundColor:
                    selectedAnswer === idx ? (isCorrect ? "#10b98135" : "#ef444435") : `${theme.colors.accent}15`,
                  color: theme.colors.text,
                  cursor: showFeedback ? "not-allowed" : "pointer",
                  opacity: showFeedback && selectedAnswer !== idx ? 0.5 : 1,
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-6 h-6 rounded-full border-2 flex items-center justify-center"
                    style={{
                      borderColor: selectedAnswer === idx ? (isCorrect ? "#10b981" : "#ef4444") : theme.colors.accent,
                    }}
                  >
                    {selectedAnswer === idx && (
                      <div
                        className="w-3.5 h-3.5 rounded-full"
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
            className="p-6 rounded-xl mb-8 border-2 animate-[fadeIn_0.4s_ease-out]"
            style={{
              borderColor: isCorrect ? "#10b981" : "#ef4444",
              backgroundColor: isCorrect ? "#10b98120" : "#ef444420",
            }}
          >
            <p
              className="font-extrabold mb-2 text-lg"
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
            className="w-full py-6 text-lg font-semibold transition-transform duration-300 hover:-translate-y-[1px]"
            style={{
              backgroundColor: theme.colors.primary,
              color: theme.colors.background,
              boxShadow: `0 15px 45px ${theme.colors.primary}55`,
            }}
          >
            {currentQuestion === theme.questions.length - 1 ? "Próximo Tema" : "Próxima Pergunta"}
          </Button>
        )}
      </div>
    </main>
  )
}
