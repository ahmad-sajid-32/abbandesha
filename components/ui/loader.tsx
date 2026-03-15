"use client";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for window load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          {/* Modern Grid Loader */}
          <div className="grid grid-cols-3 gap-2 mb-10">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 0.3, 1],
                  opacity: [1, 0.2, 1],
                  borderRadius: ["20%", "50%", "20%"],
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: (i % 3) * 0.2 + Math.floor(i / 3) * 0.2,
                }}
                className="w-4 h-4 bg-primary"
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl font-black tracking-[0.2em] uppercase text-foreground flex items-center gap-1"
          >
            Abbandesha
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xs md:text-sm text-muted-foreground mt-4 tracking-[0.3em] uppercase font-medium"
          >
            Loading...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
