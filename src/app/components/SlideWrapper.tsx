import { motion, AnimatePresence } from "motion/react";
import { ReactNode } from "react";

interface SlideWrapperProps {
  children: ReactNode;
  slideKey: number;
  direction: number;
}

export function SlideWrapper({ children, slideKey, direction }: SlideWrapperProps) {
  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={slideKey}
        custom={direction}
        initial={{ opacity: 0, x: direction * 60 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: direction * -60 }}
        transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
        className="absolute inset-0 flex flex-col"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
