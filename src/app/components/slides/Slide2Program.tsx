import { motion } from "motion/react";

const units = [
  {
    number: "01",
    title: "Cimientos Teóricos",
    subtitle: "Filosofía Clásica",
    icon: "⬡",
    color: "#00c8ff",
  },
  {
    number: "02",
    title: "Éticas Normativas",
    subtitle: "Deber y Consecuencias",
    icon: "⬡",
    color: "#4d9fff",
  },
  {
    number: "03",
    title: "Evolución Social",
    subtitle: "Modernidad y Posmodernidad",
    icon: "⬡",
    color: "#7b8fff",
  },
  {
    number: "04",
    title: "Ética y Tecnología",
    subtitle: "Datos, Sesgos e IA",
    icon: "⬡",
    color: "#a078ff",
  },
];

export function Slide2Program() {
  return (
    <div className="relative flex flex-col h-full px-12 py-10 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#00c8ff" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>
      </div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#00c8ff" }}>
            Programa de la Materia
          </span>
          <h2 className="mt-1" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "#e8edf8", fontWeight: 600 }}>
            Estructura del Coloquio
          </h2>
        </motion.div>

        {/* 4 Unit Cards */}
        <div className="flex-1 grid grid-cols-2 gap-5 pb-4" style={{ gridTemplateRows: "1fr 1fr" }}>
          {units.map((unit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
              className="relative flex flex-col justify-between p-6 rounded-2xl overflow-hidden"
              style={{
                background: "rgba(13, 21, 48, 0.8)",
                border: `1px solid ${unit.color}22`,
                backdropFilter: "blur(8px)",
              }}
            >
              {/* Corner accent */}
              <div
                className="absolute top-0 left-0 w-16 h-16 opacity-20"
                style={{
                  background: `radial-gradient(circle at 0 0, ${unit.color}, transparent 70%)`,
                }}
              />
              {/* Number */}
              <div className="flex items-start justify-between">
                <span
                  className="text-5xl select-none"
                  style={{ color: unit.color, opacity: 0.15, fontWeight: 800, lineHeight: 1 }}
                >
                  {unit.number}
                </span>
                <div
                  className="w-2 h-2 rounded-full mt-2"
                  style={{ background: unit.color }}
                />
              </div>

              {/* Title */}
              <div>
                <p className="text-sm tracking-widest uppercase mb-1" style={{ color: unit.color }}>
                  Unidad {unit.number}
                </p>
                <h3 style={{ color: "#e8edf8", fontWeight: 600, fontSize: "1.45rem", lineHeight: 1.3 }}>
                  {unit.title}
                </h3>
                <p style={{ color: "#7a9bc4", fontSize: "1.1rem", marginTop: "0.25rem" }}>
                  {unit.subtitle}
                </p>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px]"
                style={{ background: `linear-gradient(90deg, ${unit.color}88, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
