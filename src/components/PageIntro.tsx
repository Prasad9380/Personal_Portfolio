import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function PageIntro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[200] bg-[var(--color-base)] flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="font-display font-semibold text-2xl text-[var(--color-text)] mb-6"
          >
            PRASAD<span className="text-[var(--color-cyan)]">.</span>MK
          </motion.p>
          <div className="w-40 h-px bg-[var(--color-line)] overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-r from-transparent via-[var(--color-cyan)] to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
