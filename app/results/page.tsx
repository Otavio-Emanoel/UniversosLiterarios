"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { themes } from "@/lib/themes"

export default function ResultsPage() {
  const router = useRouter()
  const [userName, setUserName] = useState("")
  const [scores, setScores] = useState<Record<number, number>>({})
  const [totalScore, setTotalScore] = useState(0)
  const [maxScore, setMaxScore] = useState(0)

  useEffect(() => {
    setUserName(localStorage.getItem("userName") || "")
    const stored = localStorage.getItem("scores")
    if (stored) {
      const parsedScores = JSON.parse(stored)
      setScores(parsedScores)

      let total = 0
      themes.forEach((theme, idx) => {
        total += parsedScores[idx] || 0
      })
      setTotalScore(total)
      setMaxScore(themes.length * 5)
    }
  }, [])

  const getScorePercentage = (score: number) => {
    return (score / 5) * 100
  }

  const percentage = (totalScore / maxScore) * 100

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Jornada Completa!
          </h1>
          {userName && (
            <p className="text-xl text-purple-200 mb-4">
              Parabéns, <span className="font-bold">{userName}</span>!
            </p>
          )}
        </div>

        {/* Overall Score */}
        <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-lg p-8 mb-8 border border-purple-400">
          <div className="text-center">
            <p className="text-sm text-purple-200 mb-2">Pontuação Total</p>
            <p className="text-6xl font-bold mb-4">
              {totalScore}/{maxScore}
            </p>
            <div className="w-full bg-slate-800 rounded-full h-3 mb-4 overflow-hidden">
              <div
                className="bg-gradient-to-r from-purple-400 to-pink-400 h-full transition-all duration-500"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <p className="text-lg font-semibold">{Math.round(percentage)}% Acertos</p>
          </div>
        </div>

        {/* Score by Theme */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Desempenho por Tema</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {themes.map((theme, idx) => {
              const score = scores[idx] || 0
              const percentage = getScorePercentage(score)
              return (
                <div
                  key={idx}
                  className="p-4 rounded-lg border-2 bg-slate-900"
                  style={{ borderColor: theme.colors.primary }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold" style={{ color: theme.colors.primary }}>
                      {theme.title}
                    </h3>
                    <span className="text-sm font-semibold" style={{ color: theme.colors.accent }}>
                      {score}/5
                    </span>
                  </div>
                  <div
                    className="h-2 rounded-full overflow-hidden"
                    style={{ backgroundColor: `${theme.colors.primary}30` }}
                  >
                    <div
                      className="h-full transition-all duration-500"
                      style={{
                        width: `${percentage}%`,
                        backgroundColor: theme.colors.primary,
                      }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Survey Link */}
        <div className="bg-slate-800 rounded-lg p-8 mb-8 border border-slate-700">
          <h3 className="text-xl font-bold mb-4">Pesquisa de Campo</h3>
          <p className="text-slate-300 mb-6">
            Sua opinião é muito importante! Ajude-nos a melhorar respondendo nossa pesquisa rápida.
          </p>
          <a
            href="https://forms.gle/your-form-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Responder Pesquisa
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <Button onClick={() => router.push("/")} className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
            Recomeçar Jornada
          </Button>
          <Button onClick={() => window.print()} className="bg-slate-600 hover:bg-slate-700 text-white px-8 py-3">
            Imprimir Resultados
          </Button>
        </div>
      </div>
    </main>
  )
}
