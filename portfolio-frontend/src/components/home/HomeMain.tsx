import About from "./about/About";
import Banner from "./banner/Banner";
import Contact from "./contact/Contact";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import SoftnerveRelation from "./softnerve/SoftnerveRelation";

const HomeMain = () => {
  return (
    <div className="container px-4 md:px-16 lg:px-4 mx-auto">
      <Banner />
      <About />
      <Projects />
      <SoftnerveRelation />
      <Skills />
      <Contact />
    </div>
  );
};

export default HomeMain;
