"use client"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { themes } from "@/lib/themes"

export default function ThemePage() {
  const params = useParams()
  const router = useRouter()
  const themeId = Number.parseInt(params.id as string)
  const theme = themes[themeId]
  const [userName, setUserName] = useState("")

  useEffect(() => {
    setUserName(localStorage.getItem("userName") || "")
  }, [])

  if (!theme) {
    return <div>Tema não encontrado</div>
  }

  const handleStartQuiz = () => {
    localStorage.setItem("currentQuestion", "0")
    router.push(`/quiz/${themeId}`)
  }

  const handleBack = () => {
    router.push("/")
  }

  return (
    <main className="min-h-screen py-12 px-4" style={{ backgroundColor: theme.colors.background }}>
      <div className="max-w-4xl mx-auto">
        <button onClick={handleBack} className="mb-8 text-sm hover:underline" style={{ color: theme.colors.secondary }}>
          ← Voltar
        </button>

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4" style={{ color: theme.colors.primary }}>
            {theme.title}
          </h1>
          <p className="text-lg mb-4" style={{ color: theme.colors.secondary }}>
            Por {theme.author}
          </p>
          <p className="text-base max-w-2xl mx-auto mb-8" style={{ color: theme.colors.text }}>
            {theme.description}
          </p>

          <div className="flex gap-3 justify-center mb-8 flex-wrap">
            {theme.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded text-sm font-medium"
                style={{
                  backgroundColor: theme.colors.accent,
                  color: theme.colors.background,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {userName && (
            <p className="text-base mb-8" style={{ color: theme.colors.secondary }}>
              Bem-vindo, <span className="font-bold">{userName}</span>!
            </p>
          )}

          <div
            className="p-8 rounded-lg mb-8 border-2"
            style={{
              borderColor: theme.colors.primary,
              backgroundColor: `${theme.colors.primary}15`,
            }}
          >
            <p className="text-sm mb-4" style={{ color: theme.colors.text }}>
              Este tema contém <span className="font-bold">5 perguntas</span> sobre o universo de {theme.title}. Você
              precisará acertar as questões para avançar.
            </p>
            <p className="text-xs" style={{ color: theme.colors.secondary }}>
              Após completar este tema, você poderá explorar os próximos universos literários.
            </p>
          </div>

          <Button
            onClick={handleStartQuiz}
            className="px-8 py-6 text-lg"
            style={{
              backgroundColor: theme.colors.primary,
              color: theme.colors.background,
            }}
          >
            Iniciar Quiz
          </Button>
        </div>
      </div>
    </main>
  )
}
