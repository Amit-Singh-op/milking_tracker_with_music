"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-b from-gray-800 to-gray-900">
      <motion.h1
        className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🐄 Milking Tracker 🎵
      </motion.h1>

      <motion.button
        className="w-full max-w-xs px-6 py-3 mb-4 text-lg font-semibold text-white bg-green-600 cursor-pointer rounded-lg shadow-lg hover:bg-green-700 transition-all"
        onClick={() => router.push("/session")}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Start Milking
      </motion.button>

      <motion.button
        className="w-full max-w-xs px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg cursor-pointer shadow-lg hover:bg-blue-600 transition-all"
        onClick={() => router.push("/history")}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        View History
      </motion.button>
    </div>
  );
}
