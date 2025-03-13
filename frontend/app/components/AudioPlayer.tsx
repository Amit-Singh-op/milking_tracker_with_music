import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
const audioFiles = [
  "/audio/music1.mp3",
  "/audio/music2.mp3",
  "/audio/music3.mp3",
  "/audio/music4.mp3",
];

export default function AudioPlayer({ isPlaying }: { isPlaying: boolean }) {
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [error, setError] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (!selectedTrack) {
      setSelectedTrack(
        audioFiles[Math.floor(Math.random() * audioFiles.length)]
      );
    }
  }, [selectedTrack]);

  useEffect(() => {
    const playAudio = async () => {
      if (isPlaying && audioRef.current) {
        try {
          await audioRef.current.play();
        } catch (err) {
          setError(true);
        }
      } else {
        audioRef.current?.pause();
      }
    };

    playAudio();
  }, [isPlaying, selectedTrack]);

  return (
    <>
      {selectedTrack && <audio ref={audioRef} src={selectedTrack} loop />}

      {error && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-lg text-gray-900 shadow-lg w-[90%] max-w-md">
            <h2 className="text-xl font-bold mb-3 text-center">
              ⚠️ Audio Playback Blocked
            </h2>
            <p className="text-center text-gray-700">
              Your browser blocked autoplay. Please go back to the home page and
              interact with the page before trying again.
            </p>
            <div className="flex justify-center mt-5">
              <button
                onClick={() => router.push("/")}
                className="px-5 py-2 bg-red-600 text-white font-medium rounded-md hover:bg-red-500 transition-all cursor-pointer"
              >
                Go Home
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
