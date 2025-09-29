"use client";
import { motion } from "framer-motion";

const ProgressBar = ({
  delay,
  percent,
}: {
  percent: number;
  delay: number;
}) => {
  return (
    <div className="w-4/5 h-3 bg-black/10 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        transition={{ delay, duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="h-full bg-gradient-to-r from-black to-black/80 rounded-full"
      />
    </div>
  );
};

export default ProgressBar;
