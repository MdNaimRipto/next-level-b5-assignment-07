import React from "react";

const GlassEffectButton = ({
  title,
  style,
}: {
  title: string;
  style?: React.CSSProperties;
}) => {
  const splitText = title.split("");

  return (
    <button
      className="px-5 py-[10px] rounded-xl shadow-inset-brown bg-white/80 backdrop:blur-2xl hover:bg-black hover:text-white duration-700 group cursor-pointer"
      style={style}
    >
      {splitText.map((char, i) => (
        <span
          key={i}
          className="inline-block transform-gpu [transform-style:preserve-3d] group-hover:animate-spinY"
          style={{ animationDelay: `${i * 50}ms` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </button>
  );
};

export default GlassEffectButton;
