"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { themes } from "@/lib/themes"

export default function LandingPage() {
  const [userName, setUserName] = useState("")
  const [showNameInput, setShowNameInput] = useState(false)
  const router = useRouter()

  const handleStart = () => {
    if (!userName.trim()) {
      alert("Por favor, insira seu nome!")
      return
    }
    localStorage.setItem("userName", userName)
    localStorage.setItem("currentTheme", "0")
    localStorage.setItem("scores", JSON.stringify({}))
    router.push("/theme/0")
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Jornada Literária
          </h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Explore os mundos mais fascinantes da literatura através de 10 universos épicos e misteriosos
          </p>
        </div>

        {/* Theme Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {themes.map((theme, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105"
              style={{
                borderColor: theme.colors.primary,
                backgroundColor: theme.colors.background,
              }}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{ color: theme.colors.primary }}>
                  {theme.title}
                </h3>
                <p className="text-sm mb-4" style={{ color: theme.colors.secondary }}>
                  {theme.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {theme.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded"
                      style={{
                        backgroundColor: theme.colors.accent,
                        color: theme.colors.background,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{ backgroundColor: theme.colors.primary }}
              />
            </div>
          ))}
        </div>

        {/* Start Button */}
        <div className="text-center">
          {!showNameInput ? (
            <Button
              onClick={() => setShowNameInput(true)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg"
            >
              Iniciar Jornada
            </Button>
          ) : (
            <div className="max-w-md mx-auto flex gap-4">
              <Input
                type="text"
                placeholder="Digite seu nome"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleStart()}
                className="bg-white text-slate-900"
              />
              <Button onClick={handleStart} className="bg-green-600 hover:bg-green-700 text-white">
                Começar
              </Button>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
