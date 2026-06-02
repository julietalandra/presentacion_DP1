import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Slide1Cover } from "./components/slides/Slide1Cover";
import { Slide2Program } from "./components/slides/Slide2Program";
import { Slide3BigPicture } from "./components/slides/Slide3BigPicture";
import { TimelineSlide } from "./components/slides/TimelineSlide";
import { Slide12Thanks } from "./components/slides/Slide12Thanks";

const TOTAL_SLIDES = 13;

const timelineSlides = [
  {
    year: "Kilómetro Cero (Atemporal)",
    title: "La Complejidad de lo Moral",
    text: "Diferencia entre Moral (fenómenos y costumbres) y Ética (fundamentación racional). El análisis del fenómeno moral se divide en cuatro niveles de reflexión: saber espontáneo, ética normativa, metaética y ética descriptiva.",
    cardPosition: "above" as const,
    unit: "Unidad 1 · Cimientos Teóricos",
    accentColor: "#00c8ff",
  },
  {
    year: "Siglos V y IV a.C.",
    title: "El Nacimiento de la Ética Clásica",
    text: "Sócrates enfrenta al relativismo buscando verdades universales (Intelectualismo Ético). Aristóteles propone una ética teleológica donde el fin último es la felicidad (Eudaimonía), alcanzable mediante el hábito de la virtud y el \"término medio\".",
    cardPosition: "below" as const,
    unit: "Unidad 1 · Cimientos Teóricos",
    accentColor: "#00c8ff",
  },
  {
    year: "1785 · Siglo XVIII",
    title: "La Ética del Deber: Kant",
    text: "Giro deontológico. La \"Buena Voluntad\" es lo único bueno sin restricciones. El Imperativo Categórico exige obrar por deber (no por inclinación) y tratar a la humanidad siempre como un fin en sí mismo, nunca como un medio.",
    cardPosition: "above" as const,
    unit: "Unidad 2 · Éticas Normativas",
    accentColor: "#4d9fff",
  },
  {
    year: "Siglo XIX",
    title: "El Utilitarismo",
    text: "Filosofía consecuencialista (Bentham y Mill) que juzga los actos por sus resultados. Rige el Principio de Utilidad: la acción correcta es la que genera la mayor felicidad total para el mayor número de personas.",
    cardPosition: "below" as const,
    unit: "Unidad 2 · Éticas Normativas",
    accentColor: "#4d9fff",
  },
  {
    year: "Siglos XVIII al XIX",
    title: "Modernidad y Progreso",
    text: "Cosmovisión antropocéntrica impulsada por la Razón y el Iluminismo. El conocimiento se vuelve técnico y surge el \"Mito del Progreso Lineal\" hacia la perfección de la historia.",
    cardPosition: "above" as const,
    unit: "Unidad 3 · Evolución Social",
    accentColor: "#7b8fff",
  },
  {
    year: "1937 · Fines del Siglo XX",
    title: "Posmodernidad y Modernidad Líquida",
    text: "Tras las guerras mundiales, la Razón entra en crisis y la verdad se vuelve una construcción de perspectiva. Surge la \"Modernidad Líquida\" (Bauman): inestabilidad extrema, privatización y construcción de identidad mediante el consumo.",
    cardPosition: "below" as const,
    unit: "Unidad 3 · Evolución Social",
    accentColor: "#7b8fff",
  },
  {
    year: "Principios del Siglo XXI",
    title: "Ética Aplicada y RSE",
    text: "El surgimiento de la ética aplicada lleva a las empresas a asumir su Responsabilidad Social Empresarial (RSE). Se integran los costos ambientales y las demandas sociales en la toma de decisiones económicas y corporativas.",
    cardPosition: "above" as const,
    unit: "Unidad 3 · Evolución Social",
    accentColor: "#7b8fff",
  },
  {
    year: "Principios del Siglo XXI",
    title: "La Ética de los Datos",
    text: "En la era digital, la información se convierte en materia prima y valor económico central. Esto exige establecer una distinción clara, tanto legal como ética, entre datos de carácter privado y datos sensibles.",
    cardPosition: "below" as const,
    unit: "Unidad 4 · Ética y Tecnología",
    accentColor: "#a078ff",
  },
  {
    year: "2010 · Actualidad",
    title: "Tecnología, Sesgos e IA",
    text: "Desmitificación técnica: los algoritmos automatizan sesgos humanos generando injusticia. Las IAs generativas, al carecer de personalidad jurídica, desafían las leyes de Propiedad Intelectual (PI), exigiendo transparencia y equidad.",
    cardPosition: "above" as const,
    unit: "Unidad 4 · Ética y Tecnología",
    accentColor: "#a078ff",
    isLast: true,
  },
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((index: number) => {
    if (index < 0 || index >= TOTAL_SLIDES) return;
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  const renderSlide = () => {
    if (current === 0) return <Slide1Cover key={0} />;
    if (current === 1) return <Slide2Program key={1} />;
    if (current === 2) return <Slide3BigPicture key={2} />;
    if (current === 12) return <Slide12Thanks key={12} onRestart={() => goTo(0)} />;
    const tlIndex = current - 3;
    const tl = timelineSlides[tlIndex];
    return (
      <TimelineSlide
        key={current}
        slideIndex={tlIndex}
        totalTimeline={9}
        year={tl.year}
        title={tl.title}
        text={tl.text}
        cardPosition={tl.cardPosition}
        unit={tl.unit}
        isLast={tl.isLast}
        accentColor={tl.accentColor}
      />
    );
  };

  return (
    <div
      className="w-full h-screen overflow-hidden relative select-none"
      style={{ background: "#070c1a", fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      {/* Slide content */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -60 }}
            transition={{ duration: 0.42, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            {renderSlide()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      {current > 0 && (
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200"
          style={{
            background: "rgba(0,200,255,0.07)",
            border: "1px solid rgba(0,200,255,0.2)",
            color: "#00c8ff",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,200,255,0.15)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,200,255,0.07)";
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

      {current < TOTAL_SLIDES - 1 && (
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200"
          style={{
            background: "rgba(0,200,255,0.07)",
            border: "1px solid rgba(0,200,255,0.2)",
            color: "#00c8ff",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,200,255,0.15)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,200,255,0.07)";
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

      {/* Slide indicator dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5">
        {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? 20 : 6,
              height: 6,
              background: i === current ? "#00c8ff" : "rgba(0,200,255,0.2)",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
          />
        ))}
      </div>

      {/* Keyboard hint — only first slide */}
      {current === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-10 right-12 z-50 flex items-center gap-2 text-xs"
          style={{ color: "rgba(122,155,196,0.6)" }}
        >
          <span>Navegar</span>
          <kbd className="px-2 py-0.5 rounded" style={{ border: "1px solid rgba(0,200,255,0.2)", fontSize: "0.7rem" }}>←→</kbd>
        </motion.div>
      )}
    </div>
  );
}
