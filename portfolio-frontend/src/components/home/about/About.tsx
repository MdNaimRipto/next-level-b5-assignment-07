import Image from "next/image";
import myImage from "@/assets/images/about.jpg";
import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import GlassEffectButton from "@/components/buttons/GlassEffectButton";
import Link from "next/link";
import PositionAnimation from "@/components/animations/PositionAnimation";
import TypewriterAnimation from "@/components/animations/TypewriterAnimation";
import RotatingTextBlackButton from "@/components/buttons/RotatingTextBlackButton";
import ViewProjectsLink from "./LearnMoreLink";

const About = () => {
  const socialLinks = [
    {
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com/in/naimur-rahman2001",
      label: "LinkedIn",
    },
    {
      icon: FaGithub,
      link: "https://github.com/MdNaimRipto",
      label: "GitHub",
    },
    {
      icon: FaFacebook,
      link: "https://www.facebook.com/mdnaimur.rahman.50309",
      label: "Instagram",
    },
    {
      icon: IoIosMail,
      link: "mailto:mdnaimurrahman681@gmail.com",
      label: "Email",
    },
  ];
  return (
    <div
      id="about"
      className="grid grid-cols-1 lg:grid-cols-2 min-h-dvh md:gap-6 2xl:gap-0 items-center justify-items-center overflow-hidden"
    >
      <div className="relative w-full md:w-[380px] mx-auto h-[540px] rounded-xl md:border-2 border-black">
        <div className="w-full md:h-[472px] overflow-hidden absolute top-1/2 -translate-y-1/2 left-0 md:left-[34px] rounded-xl">
          <PositionAnimation
            position="x"
            initial={-34}
            animate={0}
            delay={0.1}
            className="h-full"
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={myImage}
                alt="My Image"
                className="object-cover w-full h-full rounded-xl"
              />
              <div className="bg-white/30 backdrop-blur-sm p-3 rounded-e-xl absolute w-[50px] z-40 left-0 top-1/2 -translate-y-1/2 flex flex-col gap-6">
                {socialLinks.map((link, i) => (
                  <Link key={i} href={link.link} target="_blank">
                    {<link.icon className="text-xl" />}
                  </Link>
                ))}
              </div>
            </div>
          </PositionAnimation>
        </div>
      </div>
      {/* Text Section */}
      <div className="flex flex-col justify-center text-center lg:text-left gap-6">
        <h1 className="text-2xl md:text-3xl lg:text-5xl tracking-wider">
          Hey, Naimur here
        </h1>
        <TypewriterAnimation
          text={`“I’m a dedicated Fullstack Developer with a strong interest in creating modern, efficient, and user-friendly applications. I focus on writing clean, maintainable code and designing smooth experiences that make technology simple for users. Over the years, I’ve built projects ranging from dynamic web apps to interactive tools, always aiming for performance and scalability. Beyond coding, I’m passionate about learning new technologies, improving my craft, and staying curious about the future of development. In my free time, I enjoy exploring games, anime, and creative tech projects that inspire fresh ideas for my work.”`}
          speed={15}
          className="min-h-[180px] w-full leading-7"
        />
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center lg:justify-start mt-4 relative z-30">
          <ViewProjectsLink />
          <GlassEffectButton
            title="Get a fee"
            style={{
              width: "220px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
