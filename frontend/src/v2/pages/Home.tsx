import { useContext, useEffect, lazy } from "react";
import Header from "../components/Header";
import { dropboxConverter } from "../../utils/dropboxConverter";
import { textTyping } from "../../utils/textTyping";  
import { AppContext } from "../../context/AppContext";

const Footer = lazy(() => import("../components/Footer"));
const Socmed = lazy(() => import("../components/Socmed"));
const ImageLazyLoad = lazy(() => import("../../utils/ImageLazyLoad"));
const FeaturedProjects = lazy(() => import("../modules/Home/FeaturedProjects"));
const AboutMe = lazy(() => import("../modules/Home/AboutMe"));
const ContactMe = lazy(() => import("../modules/Home/ContactMe"));

const Home = () => {
  const roles = [
    "Web Designer and Developer",
    "Ecommerce Creative Marketer",
    "Data Intelligence Manager",
  ];
  const appContext = useContext(AppContext);
  useEffect(() => appContext.setAppData('v2-home'), []);

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
            loading="lazy"
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
      <AboutMe/>
      <FeaturedProjects />
      <ContactMe />
      <Footer/>
    </div>
  );
};

export default Home;
