import OpacityTransition from "@/components/animations/OpacityTransition";
import Beams from "../animations/BeamBanner";

const BlogBanner = () => {
  return (
    <div className="h-[300px] flex flex-col items-center justify-center bg-white/80 backdrop-blur-2xl rounded-3xl shadow-inset-black">
      <div className="absolute w-full h-full -z-50 rounded-3xl overflow-hidden">
        <Beams rotation={-60} speed={0.8} beamHeight={150} scale={0.8} />
      </div>
      <OpacityTransition delay={0.2}>
        <h2
          className={`text-center text-[40px] leading-[48px] md:text-[55px] md:leading-[70px] mb-[20px] font-poppins font-medium text-white`}
        >
          My Blogs
        </h2>
      </OpacityTransition>
      <OpacityTransition delay={0.4}>
        <p
          className={`text-primary text-center w-[90%] md:w-[680px] mx-auto text-xs leading-[14.4px] md:text-xl md:leading-[34px] text-white`}
        >
          {`Sharing insights on web development, design, and technology — learn, build, and grow with me.`}
        </p>
      </OpacityTransition>
    </div>
  );
};

export default BlogBanner;
