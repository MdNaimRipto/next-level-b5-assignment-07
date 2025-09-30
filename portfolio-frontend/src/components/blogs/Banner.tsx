import OpacityTransition from "@/components/animations/OpacityTransition";

const BlogBanner = () => {
  return (
    <div className="h-[300px] flex flex-col items-center justify-center bg-white/80 backdrop-blur-2xl rounded-3xl shadow-inset-black">
      <OpacityTransition delay={0.2}>
        <h2
          className={`text-center text-[40px] leading-[48px] md:text-[55px] md:leading-[70px] mb-[20px] font-poppins font-medium`}
        >
          My Blogs
        </h2>
      </OpacityTransition>
      <OpacityTransition delay={0.4}>
        <p
          className={`text-primary text-center w-[96%] md:w-[680px] text-xs leading-[14.4px] md:text-xl md:leading-[34px]`}
        >
          {`Sharing insights on web development, design, and technology — learn, build, and grow with me.`}
        </p>
      </OpacityTransition>
    </div>
  );
};

export default BlogBanner;
