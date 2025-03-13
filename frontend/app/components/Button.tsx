import { motion } from "framer-motion";

interface ButtonProps {
  text: string;
  style: string;
  onClick: () => void;
}

export default function Button({ text, style, onClick }: ButtonProps) {
  return (
    <motion.button
      className={`w-32 sm:w-36 md:w-40 px-6 py-3 text-lg font-semibold rounded-lg 
      transition-all duration-300 ease-in-out 
      ${style} cursor-pointer 
      text-white`}
      onClick={onClick}
      whileTap={{ scale: 0.9 }}
    >
      <span className="relative">
        {text}
        <span className="invisible absolute">⏸ Pause</span>
      </span>
    </motion.button>
  );
}
