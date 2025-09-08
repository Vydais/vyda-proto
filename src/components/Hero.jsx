import React from "react";

export default function Hero() {
  return (
{/* Logo VYDA */}
<div className="flex items-center justify-center mt-6">
  <img
    src="/vyda-logo.png"
    alt="VYDA PROTOFIELD"
    width={180}
    height={180}
    className="drop-shadow-[0_0_20px_rgba(0,200,255,0.35)] opacity-95"
  />
</div>
    <header className="relative overflow-hidden py-10">
      {/* LOGO VYDA */}
      <div className="flex items-center justify-center mt-6">
        <img
          src="/vyda-logo.png"
          alt="VYDA PROTOFIELD"
          width={160}
          height={160}
        />
      </div>

      {/* BOTÃO ABRIR DOCUMENTO */}
      <div className="flex items-center justify-center mt-8">
        <a
          href="/doc.html"
          className="inline-flex items-center rounded-md bg-cyan-500/90 hover:bg-cyan-400 px-5 py-3 text-black font-semibold transition"
        >
          Abrir Documento
        </a>
      </div>
    </header>
  );
}
