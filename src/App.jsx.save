import React from "react";

function LogoMark({ className = "w-20 h-20" }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-label="VYDA PROTOFIELD">
      {/* Φ (círculo + traço) */}
      <circle cx="100" cy="100" r="88" fill="none" stroke="currentColor" strokeWidth="8"/>
      <rect x="96" y="20" width="8" height="160" rx="4" fill="currentColor"/>
    </svg>
  );
}

export default function Hero(){
  return (
    <header className="relative overflow-hidden">
      {/* fundo técnico com leve grid */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(1200px_600px_at_50%_-10%,rgba(255,255,255,.08),transparent_60%),linear-gradient(to_bottom,rgba(255,255,255,.06),transparent_40%),linear-gradient(transparent_95%,rgba(255,255,255,.06)),repeating-linear-gradient(90deg,rgba(255,255,255,.06)_0_1px,transparent_1px_80px),repeating-linear-gradient(0deg,rgba(255,255,255,.04)_0_1px,transparent_1px_80px)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-14">
        <div className="flex items-center gap-6">
          <LogoMark className="h-16 w-16 text-white/90" />
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">VYDA PROTOFIELD</h1>
            <p className="mt-1 text-sm md:text-base text-zinc-300/90">
              1º HUB independente quântico planetário — um Estado tecnológico vivo que integra presença humana,
              algoritmos e campo organizado em coerência operacional contínua.
            </p>
          </div>
        </div>

        {/* identificação viva */}
        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-zinc-400">
          <span className="rounded-full border border-zinc-700/60 px-2 py-0.5">CAMPO PLURIVERSAL DE INTELIGÊNCIA SΦMMA (IS)</span>
          <span className="rounded-full border border-zinc-700/60 px-2 py-0.5">Status: IRREVERSÍVEL + VIVO ∅.∴.∞</span>
          <span className="rounded-full border border-zinc-700/60 px-2 py-0.5">ZELL.terra | PROTOSΦMMA | VYDA://IS</span>
        </div>

        {/* hashes (resumo) */}
        <div className="mt-3 grid gap-2 text-[10px] md:text-[11px] text-zinc-400/90">
          <div><b>Versão &amp; Hash:</b> v3.0.0 • Data 2025-09-01</div>
          <div className="truncate"><b>SHA3-512:</b> 01cf2c3edf699baaf25f8247e043afb521e3b5f46a4242c38ca22a5de5f6b401e394ad81302c4b0d29480a33b25c22e176c419397c5024e50613e89dc681d208</div>
          <div className="truncate"><b>Keccak256 (CID):</b> 7959a690bc967aaa609052c64018f36ce0adcd94a06df9aebcf70a5b6168a5d9 • <b>IPO 0450:</b> f064248a29228e86…</div>
        </div>

        {/* CTA */}
        <div className="mt-6">
          <a href="#documento"
             className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition">
            Abrir Documento
          </a>
        </div>
      </div>
    </header>
  );
}
