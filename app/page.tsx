"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { themes } from "@/lib/themes"

export default function LandingPage() {
  const [userName, setUserName] = useState("")
  const [selectedTheme, setSelectedTheme] = useState(0)
  const router = useRouter()

  const handleStart = () => {
    if (!userName.trim()) {
      alert("Por favor, insira seu nome!")
      return
    }
    localStorage.setItem("userName", userName)
    localStorage.setItem("currentTheme", String(selectedTheme))
    localStorage.setItem("scores", JSON.stringify({}))
    router.push(`/theme/${selectedTheme}`)
  }

  const featuredTheme = themes.find((theme) => theme.id === selectedTheme) ?? themes[0]

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#7c3aed26,transparent_35%),radial-gradient(circle_at_80%_10%,#22d3ee1f,transparent_30%),radial-gradient(circle_at_50%_80%,#f472b61f,transparent_32%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04),rgba(255,255,255,0))]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-10 space-y-12">
        <header className="flex items-center justify-between gap-4 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-md shadow-lg shadow-purple-500/10">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.3em] text-white/60">Atlas</span>
            <h1 className="text-lg font-semibold">Mundos Literários</h1>
          </div>
          <div className="text-xs text-white/70 hidden sm:flex gap-3">
            <span>10 universos</span>
            <span>50+ perguntas</span>
            <span>Exploração guiada</span>
          </div>
        </header>

        <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/30 bg-amber-200/10 px-3 py-1 text-xs text-amber-100 shadow-[0_10px_40px_rgba(251,191,36,0.25)]">
              ✨ Nova jornada interativa
            </div>
            <div className="space-y-3">
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                Atlas dos <span className="text-amber-300">Mundos Literários</span>
              </h2>
              <p className="text-lg text-white/80 max-w-2xl">
                Escolha seu universo favorito, mergulhe nas perguntas e desbloqueie artefatos literários únicos. Cada
                card é um portal diferente.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-white/70">
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
                <span className="text-white font-semibold">5-7 min</span>
                <p className="text-xs text-white/60">para cada universo</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
                <span className="text-white font-semibold">Releitura</span>
                <p className="text-xs text-white/60">reforça sua pontuação</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
                <span className="text-white font-semibold">Modo épico</span>
                <p className="text-xs text-white/60">trilhas sonoras imersivas</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-purple-500/10 backdrop-blur">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Input
                  type="text"
                  placeholder="Digite seu nome para entrar"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleStart()}
                  className="bg-black/30 border-white/20 text-white placeholder:text-white/60"
                />
                <Button
                  onClick={handleStart}
                  className="bg-amber-400 text-slate-900 hover:bg-amber-300 px-6 py-6 font-semibold shadow-[0_15px_45px_rgba(251,191,36,0.35)] transition-shadow"
                >
                  Começar agora
                </Button>
              </div>
              <p className="mt-2 text-xs text-white/70">Você inicia em {featuredTheme.title}. Altere clicando em um card.</p>
            </div>
          </div>

          <div className="relative h-full">
            <div className="absolute -left-6 -top-8 h-20 w-20 rounded-full bg-purple-500/20 blur-3xl animate-[pulse_10s_ease-in-out_infinite]" />
            <div className="absolute -right-6 bottom-0 h-24 w-24 rounded-full bg-amber-400/25 blur-3xl animate-[pulse_12s_ease-in-out_infinite]" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 shadow-2xl backdrop-blur">
              <div
                className="relative overflow-hidden rounded-2xl border border-white/15 shadow-lg"
                style={{
                  backgroundImage: featuredTheme.coverImage
                    ? `linear-gradient(180deg,rgba(0,0,0,0.4),rgba(0,0,0,0.75)),url(${featuredTheme.coverImage})`
                    : undefined,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: 320,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_45%)]" />
                <div className="relative flex h-full flex-col justify-end gap-3 p-6">
                  <div className="flex items-center gap-2 text-xs text-white/70">
                    <span className="rounded-full bg-white/10 px-3 py-1">Autor: {featuredTheme.author}</span>
                    <span className="rounded-full bg-white/10 px-3 py-1">#{featuredTheme.id + 1}</span>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-amber-200/80">Universo atual</p>
                    <h3 className="text-3xl font-bold">{featuredTheme.title}</h3>
                    <p className="mt-2 text-sm text-white/80">{featuredTheme.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {featuredTheme.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Coleção</p>
              <h4 className="text-2xl font-semibold">Escolha um universo para começar</h4>
            </div>
            <div className="hidden sm:flex gap-2 text-xs text-white/70">
              <span className="rounded-full bg-white/5 px-3 py-1">Passe o mouse para animar</span>
              <span className="rounded-full bg-white/5 px-3 py-1">Clique para selecionar</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {themes.map((theme) => {
              const isActive = theme.id === selectedTheme
              return (
                <div
                  key={theme.id}
                  onClick={() => setSelectedTheme(theme.id)}
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-400/20 ${
                    isActive ? "ring-2 ring-amber-300" : ""
                  }`}
                  style={{
                    backgroundImage: theme.coverImage
                      ? `linear-gradient(180deg,rgba(0,0,0,0.55),rgba(0,0,0,0.9)),url(${theme.coverImage})`
                      : undefined,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: 260,
                  }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_35%)]" />
                  <div className="relative flex h-full flex-col justify-between p-5">
                    <div className="flex items-center justify-between text-xs text-white/70">
                      <span className="rounded-full bg-black/30 px-3 py-1 backdrop-blur-sm">{theme.author}</span>
                      <span className="rounded-full bg-white/10 px-2 py-1">#{theme.id + 1}</span>
                    </div>
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold drop-shadow">{theme.title}</h3>
                        <p className="text-sm text-white/80 max-w-xl">{theme.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {theme.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/80 backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-sm font-semibold">
                        <span className="text-amber-200">Explorar</span>
                        <span className="translate-x-0 transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </main>
  )
}
