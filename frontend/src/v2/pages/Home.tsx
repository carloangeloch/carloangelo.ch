import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import Header from "../components/Header";
import Socmed from "../components/Socmed";
import ImageLazyLoad from "../../utils/ImageLazyLoad";
import { dropboxConverter } from "../../utils/dropboxConverter";
import { textTyping } from "../../utils/textTyping";
import worksData from "../../data/works_data.json";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  const appContext = useContext(AppContext);
  const roles = [
    "Web Designer and Developer",
    "Ecommerce Creative Marketer",
    "Data Intelligence Manager",
  ];
  useEffect(() => appContext.setAppData({ currentPage: "v2-home" }), []);

  return (
    <div id="container">
      <div
        id="intro-section"
        className="w-full bg-brand-a font-title flex flex-wrap h-screen"
      >
        <div className="w-full xl:w-1/3 h-1/2 md:h-1/4 lg:h-1/3 xl:h-full relative text-brand-d">
          <div className="h-auto xl:h-1/2">
            <div className="flex p-3 xl:pl-20 xl:pt-20 w-full">
              <Header />
            </div>
          </div>
          <div className="w-full h-full xl:h-1/2 relative xl:absolute bottom-0 text-center xl:text-left flex flex-col justify-center items-center">
            <div className="relative w-full h-auto xl:h-full">
              <div className="w-full relative xl:absolute bottom-0 p-0 xl:pb-20 px-5 md:px-20 flex flex-col justify-center items-center xl:justify-normal xl:items-start">
                <div className="text-4xl text-brand-b mb-3">
                  <strong>Hi! I'm Carlo.</strong>
                </div>
                <div className="text-xl text-brand-b flex">
                  <strong>I am a {textTyping(roles)}</strong>
                </div>
                <div className="text-base xl:text-xl">
                  Whether I’m building outstanding applications, crafting
                  compelling designs, or brainstorming data-driven insights
                  ideas, I pour my passion into everything I do.
                </div>
                <div className="flex gap-x-3 mt-7 md:mt-3">
                  <Socmed />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-2/3 h-1/2 md:h-3/4 lg:h-2/3 xl:h-full relative">
          <div className="flex h-full p-5 xl:pr-20">
            <img
              src={dropboxConverter(
                "https://www.dropbox.com/scl/fi/cpq372ielpgcvgihxhnd4/ch-light.svg?rlkey=4tpubcoc6ygmjebarem38wig3&st=oqg01wig&dl=0"
              )}
              alt="ch-logo"
              className="mx-auto opacity-20"
            />
          </div>
          <div className="absolute z-10 top-0 w-full h-full flex justify-center">
            <ImageLazyLoad
              imageSrc={[
                "https://www.dropbox.com/scl/fi/x3lf6upig5xo7pxcdpfuf/papaB-40.png?rlkey=7dq27us7j0ia86it10ix30ryg&st=ewooqobp&dl=0",
                "https://www.dropbox.com/scl/fi/kdr8vblykbn25qleqxwnt/papaB-70.png?rlkey=jsg2dsswkn7rf5dhtm9i4ty97&st=0djli7wh&dl=0",
                "https://www.dropbox.com/scl/fi/hccgvb8f9nzuthgc6mvfs/papaB-100.png?rlkey=9ak2wa9qk95k24il8c3swm861&st=qi0e3ezj&dl=0",
              ]}
              altname="my-image"
              styles="h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div
        className="bg-brand-d p-3 xl:p-20 flex flex-wrap text-color-a text-center lg:text-left"
        id="about-me-section"
      >
        <div id="about-me-left" className="w-full lg:w-2/3">
          <div className="flex flex-col gap-y-1 mr-auto lg:mr-10 p-4">
            <strong className="text-4xl mb-3">About Me</strong>
            <span>
              I'm a passionate designer and developer focused on creating
              elegant, functional digital solutions.
            </span>
            <span>
              With expertise in UI/UX design, web development, and creative
              direction, I bring ideas to life through thoughtful design and
              clean code.
            </span>
            <a href="/about" className="pt-5">
              <div className="flex justify-center lg:justify-normal items-center gap-x-2 hover:translate-x-4 duration-300 ease-in-out">
                <div>More about me</div>
                <FaArrowRightLong className="w-5" />
              </div>
            </a>
          </div>
        </div>
        <div id="about-me-right" className="w-full lg:w-1/3">
          <div className="flex flex-col gap-y-1 mr-auto lg:mr-10 p-4 bg-white rounded-md shadow-md">
            <strong className="text-4xl mb-3">Core Skills</strong>
            <div>Full Stack Development</div>
            <div>Ecommerce and Marketing Design</div>
            <div>UI/UX Design</div>
            <div>Data Engineering and Analysis</div>
          </div>
        </div>
      </div>
      <div id="featured-projects" className="w-full bg-white p-10">
        <div
          id="featured-projects-title"
          className="w-full text-center flex flex-col p-8 text-color-a"
        >
          <strong className="text-4xl">FEATURED PROJECTS</strong>
          <span>Explore some of my recent work</span>
        </div>
        <div
          id="feature-projects-cards"
          className="flex flex-wrap justify-center gap-5 p-5 mb-4"
        >
          {Object.values(worksData).map(
            (work, index) =>
              index < 3 && (
                <motion.div
                  initial={"initial"}
                  whileHover={"hovered"}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="card bg-base-100 w-96 shadow-md hover:-translate-y-2 transition-all duration-300 ease-in-out"
                  key={work.id}
                >
                  <figure>
                    <img
                      className="w-full h-64 object-cover"
                      loading="lazy"
                      src={String(work.thumbnail_link)
                        .replace("www.dropbox.com", "dl.dropboxusercontent.com")
                        .replace("?dl=0", "")}
                      alt={work.title}
                    />
                  </figure>
                  <div className="card-body">
                    <motion.h2
                      className="card-title"
                      variants={{
                        initial: { color: "white" },
                        hovered: { color: "#FDE047" },
                      }}
                    >
                      {work.title}
                    </motion.h2>
                    <p>{String(work.description).substring(0, 100)}...</p>
                  </div>
                </motion.div>
              )
          )}
        </div>
        <Button content="See More" isArrow={true} url="/work" />
      </div>
      <div
        id="contact-me"
        className="w-full p-10 flex flex-col items-center gap-y-8"
      >
        <div className="w-full text-center flex flex-col gap-y-4 p-8 text-color-d">
          <strong className="text-4xl">Let's Work Together</strong>
          <p>
            Have a project in mind? I'm available for freelance work and
            collaborations.
          </p>
        </div>
        <Button content="Get in touch" isArrow={true} url="/contact" />
      </div>
    </div>
  );
};

export default Home;
