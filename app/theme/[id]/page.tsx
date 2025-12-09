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

  const panelBackground = theme?.colors.background ? `${theme.colors.background}cc` : "#0f0f0fcc"
  const glowColor = theme?.colors.primary ? `${theme.colors.primary}55` : "#ffffff33"

  const backgroundStyle = theme?.coverImage
    ? {
        backgroundColor: theme.colors.background,
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${theme.coverImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    : { backgroundColor: theme?.colors.background }

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
    <main className="min-h-screen py-12 px-4" style={backgroundStyle}>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8 text-sm" style={{ color: theme.colors.secondary }}>
          <button onClick={handleBack} className="hover:underline">
            ← Voltar
          </button>
          <span className="tracking-wide opacity-80">Universo #{themeId.toString().padStart(2, "0")}</span>
        </div>

        <div
          className="rounded-3xl border px-6 py-10 sm:px-10 sm:py-12 shadow-2xl backdrop-blur-md"
          style={{
            backgroundColor: panelBackground,
            borderColor: glowColor,
            boxShadow: `0 30px 80px ${glowColor}`,
          }}
        >
          <div className="text-center mb-10">
            <div
              className="mx-auto mb-6 h-1.5 w-32 rounded-full"
              style={{
                background: `linear-gradient(90deg, ${theme.colors.accent}, ${theme.colors.primary})`,
                boxShadow: `0 0 30px ${glowColor}`,
              }}
            />

            <h1
              className="text-4xl sm:text-5xl font-bold mb-3 leading-tight"
              style={{ color: theme.colors.primary, fontFamily: "var(--font-display)" }}
            >
              {theme.title}
            </h1>
            <p className="text-base sm:text-lg mb-2" style={{ color: theme.colors.secondary }}>
              Por {theme.author}
            </p>
            <p className="text-base sm:text-lg max-w-3xl mx-auto mb-6" style={{ color: theme.colors.text }}>
              {theme.description}
            </p>

            <div className="flex gap-3 justify-center mb-6 flex-wrap">
              {theme.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg"
                  style={{
                    backgroundColor: `${theme.colors.accent}dd`,
                    color: theme.colors.background,
                    boxShadow: `0 10px 30px ${glowColor}`,
                    letterSpacing: "0.03em",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {userName && (
              <p className="text-base mb-8" style={{ color: theme.colors.secondary }}>
                Bem-vindo, <span className="font-bold" style={{ color: theme.colors.text }}>{userName}</span>!
              </p>
            )}
          </div>

          <div
            className="p-8 rounded-2xl mb-10 border shadow-xl"
            style={{
              borderColor: glowColor,
              backgroundColor: `${theme.colors.primary}1f`,
              boxShadow: `inset 0 1px 0 ${theme.colors.text}33, 0 10px 40px ${glowColor}`,
            }}
          >
            <p className="text-sm sm:text-base mb-3 leading-relaxed" style={{ color: theme.colors.text }}>
              Este tema contém <span className="font-bold">5 perguntas</span> sobre o universo de {theme.title}. Você
              precisará acertar as questões para avançar.
            </p>
            <p className="text-xs sm:text-sm" style={{ color: theme.colors.secondary }}>
              Após completar este tema, você poderá explorar os próximos universos literários.
            </p>
          </div>

          <div className="flex justify-center">
            <Button
              onClick={handleStartQuiz}
              className="px-10 py-6 text-lg rounded-full shadow-lg transition-transform duration-200 hover:scale-[1.02]"
              style={{
                backgroundImage: `linear-gradient(120deg, ${theme.colors.primary}, ${theme.colors.accent})`,
                color: theme.colors.background,
                boxShadow: `0 20px 40px ${glowColor}`,
              }}
            >
              Iniciar Quiz
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
