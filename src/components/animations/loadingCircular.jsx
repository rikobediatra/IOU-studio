"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function LoadingCircular({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
            fixed inset-0 z-9999
            flex items-center justify-center
            bg-white/60 backdrop-blur-xs
            pointer-events-auto
          "
        >
          {/* Spinner */}
          <motion.div
            className="w-14 h-14 rounded-full border-4 border-neutral-300 border-t-neutral-900"
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{
              rotate: {
                repeat: Infinity,
                duration: 1,
                ease: "linear",
              },
              scale: {
                repeat: Infinity,
                duration: 1.2,
              },
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
