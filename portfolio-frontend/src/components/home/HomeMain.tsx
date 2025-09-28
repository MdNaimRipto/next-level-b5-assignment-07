import About from "./about/About";
import Banner from "./banner/Banner";
import Projects from "./projects/Projects";
import SoftnerveRelation from "./softnerve/SoftnerveRelation";

const HomeMain = () => {
  return (
    <div className="container px-4 md:px-16 lg:px-4 mx-auto">
      <Banner />
      <About />
      <Projects />
      <SoftnerveRelation />
    </div>
  );
};

export default HomeMain;
