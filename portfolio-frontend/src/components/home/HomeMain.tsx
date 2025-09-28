import About from "./about/About";
import Banner from "./banner/Banner";

const HomeMain = () => {
  return (
    <div className="container px-4 md:px-16 lg:px-4 mx-auto">
      <Banner />
      <About />
    </div>
  );
};

export default HomeMain;
