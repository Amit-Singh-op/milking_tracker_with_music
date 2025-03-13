import { motion } from "framer-motion";

export default function MusicVisualizer({ isPlaying }: { isPlaying: boolean }) {
  const bars = [...Array(5)].map((_, i) => ({
    delay: i * 0.2,
    duration: 0.6 + i * 0.1,
  }));

  return (
    <motion.div className="flex space-x-2 items-end min-h-[50px] h-[50px]">
      {bars.map(({ delay, duration }, i) => (
        <motion.div
          key={i}
          className="w-2 bg-gray-600 rounded-full shadow-md"
          animate={{
            height: isPlaying ? [10, 35, 10] : [20, 20, 20],
          }}
          transition={{
            repeat: Infinity,
            duration,
            repeatType: "mirror",
            delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
}
