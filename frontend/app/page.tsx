"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Header from "./components/Header";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-black text-white">
      <Header />

      <motion.button
        className="w-full max-w-xs px-6 py-3 mb-4 text-lg font-semibold text-white border border-gray-400 backdrop-blur-lg bg-opacity-10 rounded-lg shadow-lg transition-all hover:bg-white hover:bg-opacity-20 hover:text-gray-900 cursor-pointer"
        onClick={() => router.push("/session")}
        whileTap={{ scale: 0.95 }}
      >
        Start Milking
      </motion.button>

      <motion.button
        className="w-full max-w-xs px-6 py-3 text-lg font-semibold text-white border border-gray-400 backdrop-blur-lg bg-opacity-10 rounded-lg shadow-lg transition-all hover:bg-white hover:bg-opacity-20 hover:text-gray-900 cursor-pointer"
        onClick={() => router.push("/history")}
        whileTap={{ scale: 0.95 }}
      >
        View History
      </motion.button>
    </div>
  );
}
