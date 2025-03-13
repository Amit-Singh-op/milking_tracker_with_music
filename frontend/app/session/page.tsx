"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import AudioPlayer from "../components/AudioPlayer";
import MusicVisualizer from "../components/MusicVisualizer";
import Button from "../components/Button";

export default function MilkingSession() {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(true);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [milkQuantity, setMilkQuantity] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);
  const [sessionDate, setSessionDate] = useState<string>("");

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

  const handleSubmit = () => {
    if (!milkQuantity) return;

    const sessionData = {
      date: sessionDate,
      startTime: startTime?.toLocaleTimeString(),
      endTime: endTime?.toLocaleTimeString(),
      duration: timeElapsed,
      milkCollected: milkQuantity,
    };

    console.log("Session Saved:", sessionData);
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white px-4">
      <Header title="🎵 Milking Session" />

      <p className="text-xl mt-2 font-semibold bg-gray-700 px-4 py-2 rounded-lg shadow-md">
        ⏳ {timeElapsed}s
      </p>

      <div className="mt-4 min-h-[50px] flex items-center justify-center w-full">
        <MusicVisualizer isPlaying={isPlaying} />
      </div>

      <div className="flex space-x-6 mt-8">
        <Button
          text={isPlaying ? "⏸ Pause" : "▶ Play"}
          style="bg-blue-600 hover:bg-blue-900"
          onClick={() => setIsPlaying(!isPlaying)}
        />
        <Button
          text="⏹ Stop"
          style="bg-red-600 hover:bg-red-800"
          onClick={handleStop}
        />
      </div>

      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-lg text-gray-900 shadow-lg w-[90%] max-w-md">
            <h2 className="text-xl font-bold mb-3 text-center">
              🥛 Enter Milk Quantity
            </h2>
            <input
              type="number"
              value={milkQuantity}
              onChange={(e) => setMilkQuantity(e.target.value)}
              placeholder="Milk Quantity (L)"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <div className="flex justify-end mt-5 space-x-4">
              <Button
                text="✅ Submit"
                style="bg-green-600 hover:bg-green-500 w-full"
                onClick={handleSubmit}
              />
            </div>
          </div>
        </div>
      )}

      <AudioPlayer isPlaying={isPlaying} />
    </div>
  );
}
