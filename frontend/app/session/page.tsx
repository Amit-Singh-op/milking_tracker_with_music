"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Header from "../components/Header";
import AudioPlayer from "../components/AudioPlayer";
import MusicVisualizer from "../components/MusicVisualizer";
import { createSession } from "@/lib/api/createSession";
import Timer from "../components/Timer";

export default function MilkingSession() {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(true);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [milkQuantity, setMilkQuantity] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);
  const [sessionDate, setSessionDate] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isPosted, setIsPosted] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (isPlaying) {
      interval = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (interval !== undefined) clearInterval(interval);
    };
  }, [isPlaying]);

  useEffect(() => {
    const now = new Date();
    setStartTime(now);
    setSessionDate(now.toLocaleDateString());
  }, []);

  const handleStop = () => {
    setIsPlaying(false);
    setEndTime(new Date());
    setIsDialogOpen(true);
  };

  const handleSubmit = async () => {
    if (!milkQuantity) return;

    setIsSubmitting(true);

    const sessionData = {
      date: sessionDate,
      startTime: startTime?.toLocaleTimeString(),
      endTime: endTime?.toLocaleTimeString(),
      duration: timeElapsed,
      milkCollected: milkQuantity,
    };

    await createSession("/api/sessions", sessionData);

    setTimeout(() => {
      setIsPosted(true);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-black text-white">
      <Header />

      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-semibold text-center mb-6">
          🐄 Milking Session
        </h1>

        <Timer timeElapsed={timeElapsed} />

        <div className="mt-4 min-h-[50px] flex items-center justify-center w-full">
          <MusicVisualizer isPlaying={isPlaying} />
        </div>

        <div className="flex space-x-6 mt-8">
          <motion.button
            className="w-32 sm:w-36 md:w-40 px-6 py-3 text-lg font-semibold text-white border border-gray-400 backdrop-blur-lg bg-opacity-10 rounded-lg shadow-lg transition-all hover:bg-white hover:bg-opacity-20 hover:text-gray-900 cursor-pointer"
            onClick={() => setIsPlaying(!isPlaying)}
            whileTap={{ scale: 0.95 }}
          >
            {isPlaying ? "⏸ Pause" : "▶ Play"}
          </motion.button>
          <motion.button
            className="w-32 sm:w-36 md:w-40 px-6 py-3 text-lg font-semibold text-white border border-gray-400 backdrop-blur-lg bg-opacity-10 rounded-lg shadow-lg transition-all hover:bg-white hover:bg-opacity-20 hover:text-gray-900 cursor-pointer"
            onClick={handleStop}
            whileTap={{ scale: 0.95 }}
          >
            ⏹ Stop
          </motion.button>
        </div>
      </div>
      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
          <div className="p-6 rounded-lg text-white shadow-lg w-[90%] max-w-md border border-gray-700">
            <h2 className="text-xl font-bold mb-4 text-center">
              🥛 Enter Milk Quantity
            </h2>
            <input
              type="number"
              value={milkQuantity}
              onChange={(e) => setMilkQuantity(e.target.value)}
              placeholder="Milk Quantity (L)"
              className="w-full p-3 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-black"
            />
            <div className="flex justify-end mt-5">
              {isSubmitting ? (
                <motion.button
                  className="px-6 py-2 text-lg font-semibold text-white border border-gray-600 backdrop-blur-lg bg-opacity-10 rounded-lg shadow-lg"
                  disabled
                >
                  Posting<span className="dot-animation">.</span>
                  <span className="dot-animation">.</span>
                  <span className="dot-animation">.</span>
                </motion.button>
              ) : (
                <motion.button
                  className="px-6 py-2 text-lg font-semibold text-white border border-gray-600 backdrop-blur-lg bg-opacity-10 rounded-lg shadow-lg transition-all hover:bg-white hover:bg-opacity-20 hover:text-gray-900 cursor-pointer"
                  onClick={handleSubmit}
                  whileTap={{ scale: 0.95 }}
                >
                  ✅ Submit
                </motion.button>
              )}
            </div>
          </div>
        </div>
      )}

      {isPosted && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
          <div className="p-6 rounded-lg text-white shadow-lg w-[90%] max-w-md border border-gray-700 text-center">
            <h2 className="text-2xl font-bold mb-4">✅ Session Complete</h2>
            <motion.button
              className="px-4 py-2 text-lg font-semibold text-white border border-gray-600 backdrop-blur-lg bg-opacity-10 rounded-lg shadow-lg transition-all hover:bg-white hover:bg-opacity-20 hover:text-gray-900 cursor-pointer"
              onClick={() => router.push("/")}
              whileTap={{ scale: 0.95 }}
            >
              🏠 Go Home
            </motion.button>
          </div>
        </div>
      )}

      <AudioPlayer isPlaying={isPlaying} />
    </div>
  );
}
