import { FiLoader } from "react-icons/fi";

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen overflow-hidden z-[500]">
      <FiLoader className="animate-spin" size={54} />
    </div>
  );
};

export default Loader;
