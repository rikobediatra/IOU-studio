"use client";

import { motion } from "framer-motion";

export default function LoadingOverlay() {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6">

        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-semibold tracking-[0.35em]"
        >
          IOU
        </motion.h1>

        {/* Smooth Loading Line */}
        <div className="relative w-40 h-0.5 bg-gray-200 overflow-hidden rounded-full">
          <motion.div
            className="absolute left-0 top-0 h-full w-1/2 bg-black"
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 1.1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <p className="text-xs tracking-widest text-gray-400 uppercase">
          Loading
        </p>

      </div>
    </div>
  );
}
