import { motion } from "motion/react";
import { ReactNode } from "react";

interface TimelineSlideProps {
  slideIndex: number; // 0-based among timeline slides (0 = slide3 ... 7 = slide10)
  totalTimeline: number;
  year: string;
  title: string;
  text: string;
  cardPosition: "above" | "below";
  unit: string;
  isLast?: boolean;
  accentColor?: string;
}

export function TimelineSlide({
  slideIndex,
  totalTimeline,
  year,
  title,
  text,
  cardPosition,
  unit,
  isLast = false,
  accentColor = "#00c8ff",
}: TimelineSlideProps) {
  // The node's horizontal position as a percentage of the slide
  const nodeX = 50; // always centered for clean look

  // Fraction of timeline revealed
  const fillFraction = (slideIndex + 1) / totalTimeline;

  return (
    <div className="relative flex flex-col h-full overflow-hidden px-0 pb-12">
      {/* Subtle background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id={`tgrid-${slideIndex}`} width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#00c8ff" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#tgrid-${slideIndex})`}/>
        </svg>
      </div>

      {/* Header strip */}
      <div className="relative z-10 flex items-center justify-between px-6 md:px-12 pt-10 md:pt-16 pb-0">
        <div>
          <span className="text-sm font-medium tracking-[0.3em] uppercase" style={{ color: accentColor }}>
            {unit}
          </span>
        </div>
        <div className="text-sm font-medium" style={{ color: "#7a9bc4" }}>
          {slideIndex + 4} / 12
        </div>
      </div>

      {/* Main timeline area - takes remaining space */}
      <div className="relative flex-1 mx-6 md:mx-12">
        {/* ── Timeline line at top-16 on mobile, centered on desktop ── */}
        <div
          className="absolute left-0 right-0 top-16 md:top-1/2"
        >
          {/* Full dim line (shows past + future) */}
          <div
            className="absolute left-0 right-0 h-[1px]"
            style={{ background: "rgba(0,200,255,0.12)" }}
          />
          {/* Lit line (from left up to node) */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "50%" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="absolute left-0 h-[2px]"
            style={{ background: `linear-gradient(90deg, rgba(0,200,255,0.1), ${accentColor})` }}
          />
          {/* Right side dim continuation */}
          {!isLast && (
            <div
              className="absolute right-0 h-[1px]"
              style={{ width: "50%", background: "rgba(0,200,255,0.08)", top: "0.5px" }}
            />
          )}
          {/* Arrow at end */}
          {isLast && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.4 }}
              className="absolute right-0 flex items-center"
              style={{ top: "-6px" }}
            >
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                <path d="M0 6H14M14 6L9 1M14 6L9 11" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </motion.div>
          )}

          {/* NODE at 50% */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.4, type: "spring", stiffness: 300 }}
            className="absolute"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* Outer pulse ring */}
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full"
              style={{
                width: 32,
                height: 32,
                left: -16,
                top: -16,
                border: `1px solid ${accentColor}`,
              }}
            />
            {/* Main dot */}
            <div
              className="rounded-full flex items-center justify-center"
              style={{
                width: 16,
                height: 16,
                background: accentColor,
                boxShadow: `0 0 16px ${accentColor}88`,
                marginLeft: -8,
                marginTop: -8,
              }}
            >
              <div className="w-2 h-2 rounded-full bg-white opacity-60" />
            </div>
          </motion.div>

          {/* YEAR label — above the node */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.4 }}
            className={`absolute text-sm font-semibold tracking-wider uppercase -top-8 ${
              cardPosition === "above" ? "md:-top-auto md:top-7" : "md:-top-8"
            }`}
            style={{
              left: "50%",
              transform: "translateX(-50%)",
              color: accentColor,
              whiteSpace: "nowrap",
            }}
          >
            {year}
          </motion.div>

          {/* CARD */}
          <motion.div
            initial={{ opacity: 0, y: cardPosition === "above" ? 20 : -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className={`absolute top-8 md:top-10 ${
              cardPosition === "above" ? "md:top-auto md:bottom-10" : ""
            }`}
            style={{
              left: "50%",
              transform: "translateX(-50%)",
              width: "min(560px, 90vw)",
            }}
          >
            {/* Connector line from node to card */}
            <div
              className={`absolute left-1/2 w-[1px] h-6 md:h-8 -top-6 ${
                cardPosition === "above" ? "md:-top-auto md:-bottom-8" : "md:-top-8"
              }`}
              style={{
                background: `linear-gradient(${cardPosition === "above" ? "180deg" : "0deg"}, ${accentColor}44, transparent)`,
              }}
            />

            {/* Card itself */}
            <div
              className="rounded-2xl p-4 md:p-6 relative overflow-hidden max-h-[52vh] md:max-h-none overflow-y-auto scrollbar-thin"
              style={{
                background: "rgba(13, 21, 48, 0.92)",
                border: `1px solid ${accentColor}28`,
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Corner glow */}
              <div
                className="absolute top-0 left-0 w-24 h-24 opacity-20"
                style={{ background: `radial-gradient(circle at 0 0, ${accentColor}, transparent 70%)` }}
              />
              <h3
                style={{
                  color: "#e8edf8",
                  fontWeight: 600,
                  fontSize: "clamp(1.1rem, 4vw, 1.35rem)",
                  lineHeight: 1.3,
                  marginBottom: "0.5rem",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  color: "#7a9bc4",
                  fontSize: "clamp(0.85rem, 3.5vw, 1.05rem)",
                  lineHeight: 1.5,
                }}
              >
                {text}
              </p>
              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px]"
                style={{ background: `linear-gradient(90deg, ${accentColor}88, transparent)` }}
              />
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  );
}
