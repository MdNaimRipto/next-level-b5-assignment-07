"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const PositionAnimation = ({
  children,
  delay,
  animate,
  initial,
  position,
  className,
}: {
  children: ReactNode;
  delay: number;
  initial: number;
  animate: number;
  position: "x" | "y";
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ [position]: initial, opacity: 0 }}
      whileInView={{ [position]: animate, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1, delay }}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default PositionAnimation;
