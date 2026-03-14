"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center h-screen gap-6"
    >
      <h1 className="text-6xl font-semibold">404</h1>

      <p className="text-gray-500">This page could not be found.</p>

      <Link
        href="/"
        className="border px-6 py-2 rounded-full hover:bg-black hover:text-white transition"
      >
        Back Home
      </Link>
    </motion.div>
  );
}
