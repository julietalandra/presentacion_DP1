import { motion } from "motion/react";

const nodes = [
  { year: "S. V-IV a.C.", label: "Ética Clásica;\nSócrates y Aristóteles", above: false },
  { year: "1785", label: "Ética del Deber:\nImmanuel Kant", above: true },
  { year: "Siglo XIX", label: "Utilitarismo", above: false },
  { year: "S. XVIII-XIX", label: "Modernidad\ny Razón", above: true },
  { year: "S. XX", label: "Posmodernidad y\nModernidad Líquida", above: false },
  { year: "S. XXI", label: "Ética Aplicada\ny RSE", above: true },
  { year: "S. XXI", label: "Ética de Datos", above: false },
  { year: "Actualidad", label: "IA y Sesgos\nAlgorítmicos", above: true },
];

const LINE_DELAY = 0.3;
const LINE_DURATION = 1.6;
const NODE_BASE_DELAY = LINE_DELAY + 0.2;
const NODE_INTERVAL = LINE_DURATION / nodes.length;

export function Slide3BigPicture() {
  return (
    <div className="relative flex flex-col h-full overflow-hidden px-10">
      {/* Subtle grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="bp-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#00c8ff" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bp-grid)" />
        </svg>
      </div>

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: "linear-gradient(90deg, transparent, #00c8ff, transparent)" }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 pt-16 pb-0 text-center"
      >
        <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#00c8ff" }}>
          Panorama General
        </span>
        <h2
          className="mt-1"
          style={{
            fontSize: "clamp(1.2rem, 2.5vw, 1.75rem)",
            color: "#e8edf8",
            fontWeight: 600,
            letterSpacing: "-0.01em",
          }}
        >
          Línea de Tiempo Conceptual:{" "}
          <span style={{ color: "#00c8ff" }}>La Evolución de la Moral</span>
        </h2>
      </motion.div>

      {/* Timeline area */}
      <div className="relative flex-1 flex items-center overflow-x-auto overflow-y-hidden pb-4 md:pb-0 scrollbar-thin">
        <div className="relative w-[900px] md:w-full h-[260px] flex-shrink-0">
          {/* Full-width SVG timeline (only for the horizontal line and arrow) */}
          <div className="absolute inset-x-0" style={{ top: "50%", transform: "translateY(-50%)" }}>
            <svg
              width="100%"
              height="260"
              viewBox="0 0 1000 260"
              preserveAspectRatio="none"
              overflow="visible"
            >
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00c8ff" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#00c8ff" stopOpacity="1" />
                  <stop offset="100%" stopColor="#a078ff" stopOpacity="0.8" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Dim base line */}
              <line x1="0" y1="130" x2="1000" y2="130" stroke="#00c8ff" strokeWidth="1" opacity="0.1" />

              {/* Animated sweep line (uses clipPath via motion rect) */}
              <clipPath id="sweep-clip">
                <motion.rect
                  x="0" y="0" height="260"
                  initial={{ width: 0 }}
                  animate={{ width: 1000 }}
                  transition={{ delay: LINE_DELAY, duration: LINE_DURATION, ease: "easeInOut" }}
                />
              </clipPath>
              <line
                x1="0" y1="130" x2="1000" y2="130"
                stroke="url(#lineGrad)"
                strokeWidth="2.5"
                filter="url(#glow)"
                clipPath="url(#sweep-clip)"
              />

              {/* Arrow at end */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: LINE_DELAY + LINE_DURATION + 0.1, duration: 0.3 }}
              >
                <path d="M990 124 L1000 130 L990 136" stroke="#a078ff" strokeWidth="2" fill="none" strokeLinecap="round" />
              </motion.g>
            </svg>
          </div>

          {/* Non-stretching Node SVGs positioned absolutely */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[260px] pointer-events-none">
            {nodes.map((node, i) => {
              const xGlobal = 60 + (i * 880) / (nodes.length - 1);
              const pct = (xGlobal / 1000) * 100;
              const nodeDelay = NODE_BASE_DELAY + i * NODE_INTERVAL;
              const labelY = node.above ? 80 : 180;
              const lineY1 = node.above ? 118 : 142;
              const lineY2 = node.above ? 98 : 162;
              const accentColor = `hsl(${190 + i * 15}, 100%, ${55 + i * 2}%)`;

              return (
                <div
                  key={i}
                  className="absolute top-0 bottom-0 pointer-events-none"
                  style={{
                    left: `${pct}%`,
                    width: "160px",
                    transform: "translateX(-50%)",
                  }}
                >
                  <svg
                    width="160"
                    height="260"
                    viewBox="0 0 160 260"
                    overflow="visible"
                  >
                    {/* Connector line */}
                    <motion.line
                      x1={80} y1={lineY1}
                      x2={80} y2={lineY2}
                      stroke={accentColor}
                      strokeWidth="1"
                      strokeOpacity="0.5"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ delay: nodeDelay + 0.1, duration: 0.25 }}
                    />

                    {/* Label lines */}
                    {node.label.split("\n").map((line, li) => (
                      <motion.text
                        key={li}
                        x={80}
                        y={node.above ? labelY - (node.label.split("\n").length - 1 - li) * 20 : labelY + li * 20}
                        textAnchor="middle"
                        fill="#e8edf8"
                        fontSize="14"
                        fontFamily="Inter, system-ui, sans-serif"
                        fontWeight="500"
                        initial={{ opacity: 0, y: node.above ? 6 : -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: nodeDelay + 0.2 + li * 0.05, duration: 0.3 }}
                      >
                        {line}
                      </motion.text>
                    ))}

                    {/* Year label */}
                    <motion.text
                      x={80}
                      y={node.above ? labelY - node.label.split("\n").length * 20 - 6 : labelY + node.label.split("\n").length * 20 + 6}
                      textAnchor="middle"
                      fill={accentColor}
                      fontSize="11"
                      fontFamily="Inter, system-ui, sans-serif"
                      fontWeight="600"
                      letterSpacing="1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: nodeDelay + 0.15, duration: 0.3 }}
                    >
                      {node.year.toUpperCase()}
                    </motion.text>

                    {/* Outer ring */}
                    <motion.circle
                      cx={80} cy={130} r={10}
                      fill="none"
                      stroke={accentColor}
                      strokeWidth="1"
                      strokeOpacity="0.4"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: nodeDelay, duration: 0.35, type: "spring", stiffness: 400 }}
                      style={{ transformOrigin: "80px 130px" }}
                    />

                    {/* Inner dot */}
                    <motion.circle
                      cx={80} cy={130} r={5}
                      fill={accentColor}
                      filter="url(#glow)"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: nodeDelay + 0.05, duration: 0.3, type: "spring", stiffness: 500 }}
                      style={{ transformOrigin: "80px 130px" }}
                    />
                  </svg>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Slide counter */}
      <div className="relative z-10 flex items-center justify-between px-2 pb-5">
        <span className="text-xs" style={{ color: "#7a9bc4" }}>3 / 12</span>
        <span className="text-xs tracking-wider uppercase" style={{ color: "rgba(122,155,196,0.5)" }}>
          ← → para navegar
        </span>
      </div>
    </div>
  );
}
