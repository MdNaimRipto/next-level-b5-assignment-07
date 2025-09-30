const RotatingTextBlackButton = ({
  title,
  style,
}: {
  title: string;
  style?: React.CSSProperties;
}) => {
  const splitText = title.split("");

  return (
    <button
      className="group border-2 border-black rounded-xl px-5 py-2 cursor-pointer bg-black text-white duration-300 overflow-hidden [perspective:1000px]"
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

export default RotatingTextBlackButton;
