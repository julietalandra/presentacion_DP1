import { motion } from "motion/react";

export function Slide1Cover() {
  return (
    <div className="relative flex flex-col items-center justify-center h-full overflow-hidden px-12">
      {/* Geometric background illustration */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          {/* Node network */}
          <g opacity="0.12">
            {/* Lines */}
            <line x1="100" y1="350" x2="300" y2="200" stroke="#00c8ff" strokeWidth="1" />
            <line x1="300" y1="200" x2="550" y2="280" stroke="#00c8ff" strokeWidth="1" />
            <line x1="550" y1="280" x2="800" y2="150" stroke="#00c8ff" strokeWidth="1" />
            <line x1="800" y1="150" x2="1050" y2="250" stroke="#00c8ff" strokeWidth="1" />
            <line x1="1050" y1="250" x2="1150" y2="400" stroke="#00c8ff" strokeWidth="1" />
            <line x1="300" y1="200" x2="200" y2="500" stroke="#00c8ff" strokeWidth="1" />
            <line x1="200" y1="500" x2="500" y2="600" stroke="#00c8ff" strokeWidth="1" />
            <line x1="500" y1="600" x2="750" y2="520" stroke="#00c8ff" strokeWidth="1" />
            <line x1="750" y1="520" x2="1050" y2="250" stroke="#00c8ff" strokeWidth="1" />
            <line x1="550" y1="280" x2="500" y2="600" stroke="#00c8ff" strokeWidth="1" />
            <line x1="550" y1="280" x2="750" y2="520" stroke="#00c8ff" strokeWidth="1" />
            <line x1="800" y1="150" x2="750" y2="520" stroke="#00c8ff" strokeWidth="1" />
            <line x1="100" y1="350" x2="200" y2="500" stroke="#00c8ff" strokeWidth="1" />
            {/* Nodes */}
            <circle cx="100" cy="350" r="5" fill="#00c8ff" />
            <circle cx="300" cy="200" r="5" fill="#00c8ff" />
            <circle cx="550" cy="280" r="8" fill="#00c8ff" />
            <circle cx="800" cy="150" r="5" fill="#00c8ff" />
            <circle cx="1050" cy="250" r="5" fill="#00c8ff" />
            <circle cx="1150" cy="400" r="4" fill="#00c8ff" />
            <circle cx="200" cy="500" r="5" fill="#00c8ff" />
            <circle cx="500" cy="600" r="5" fill="#00c8ff" />
            <circle cx="750" cy="520" r="7" fill="#00c8ff" />
          </g>
          {/* Decorative hexagons */}
          <g opacity="0.06">
            <polygon points="960,80 1000,104 1000,152 960,176 920,152 920,104" stroke="#00c8ff" strokeWidth="1" fill="none" />
            <polygon points="1000,104 1040,80 1080,104 1080,152 1040,176 1000,152" stroke="#00c8ff" strokeWidth="1" fill="none" />
            <polygon points="960,176 1000,200 1000,248 960,272 920,248 920,200" stroke="#00c8ff" strokeWidth="1" fill="none" />
          </g>
          <g opacity="0.05">
            <polygon points="120,40 160,64 160,112 120,136 80,112 80,64" stroke="#00c8ff" strokeWidth="1" fill="none" />
            <polygon points="160,112 200,136 200,184 160,208 120,184 120,136" stroke="#00c8ff" strokeWidth="1" fill="none" />
          </g>
          {/* Glow orb center-left */}
          <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00c8ff" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#00c8ff" stopOpacity="0" />
          </radialGradient>
          <ellipse cx="200" cy="350" rx="260" ry="200" fill="url(#glow1)" />
          {/* Glow orb top-right */}
          <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b6fff" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#3b6fff" stopOpacity="0" />
          </radialGradient>
          <ellipse cx="1000" cy="200" rx="220" ry="160" fill="url(#glow2)" />
        </svg>
      </div>

      {/* Thin top bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #00c8ff, transparent)" }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">


        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="mb-4"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.8rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#e8edf8",
          }}
        >Coloquio:<br /><span style={{ color: "#00c8ff" }}>Deontología Profesional 1</span></motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="w-24 h-[1px] my-5"
          style={{ background: "#00c8ff", opacity: 0.6 }}
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{
            fontSize: "clamp(0.95rem, 2vw, 1.2rem)",
            color: "#7a9bc4",
            maxWidth: "600px",
            lineHeight: 1.6,
          }}
        >
          La complejidad de lo moral y su evolución hacia la era tecnológica
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {["Alegre Gabriela", "Martinez Ximena", "Vargas Ana Valentina", "Landra Julieta"].map((name, i) => (
            <div
              key={i}
              className="px-4 py-2 rounded-full text-sm"
              style={{
                background: "rgba(0,200,255,0.07)",
                border: "1px solid rgba(0,200,255,0.2)",
                color: "#b0cce8",
              }}
            >
              {name}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px]" style={{ background: "rgba(0,200,255,0.2)" }} />
    </div>
  );
}
