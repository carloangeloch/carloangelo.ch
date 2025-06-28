import { lazy, useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../context/AppContext";
import Header from "../components/Header";
import pb from "../../assets/papaB-2.png";
import Expertise from "../modules/About/Expertise";
import arrowUp from "../../assets/up-arrow.png";
import { motion } from "framer-motion";

const Footer = lazy(() => import("../components/Footer"));

const About = () => {
  const appContext = useContext(AppContext);
  useEffect(
    () =>
      appContext.setAppData({ ...appContext.appData, currentPage: "about" }),
    []
  );

  //scroll to top
  const divRef = useRef<HTMLDivElement>(null);
  const [isOffScreen, setIsOffScreen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOffScreen(!entry.isIntersecting);
      },
      { threshold: 0 } // Trigger when even 1px is out of view
    );

    const currentDiv = divRef.current;

    if (currentDiv) {
      observer.observe(currentDiv);
    }

    return () => {
      if (currentDiv) {
        observer.unobserve(currentDiv);
      }
    };
  }, []);
  const scrollToTop = () => {
    divRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  return (
    <div
      className="w-full bg-brand-a flex flex-wrap flex-col xl:flex-row text-brand-d"
      id="container"
      style={{ overflowY: appContext.appData.showNav ? "hidden" : "visible" }}
    >
      <div className="w-full" ref={divRef} />
      <div
        id="header-container"
        className="w-full xl:w-1/6 h-14 xl:h-screen flex flex-col :justify-normal"
      >
        <div id="header-ref" className="w-full h-full">
          <Header />
        </div>
      </div>

      <div
        className="w-full xl:w-5/6 h-auto xl:h-full mt-0 p-8 xl:p-10 flex-1"
        id="content"
      >
        {/* scroll to top button */}
        <div className="w-full relative">
          <motion.div
            initial={{ opacity: 0, transform: "translateY(500px)" }}
            animate={
              isOffScreen
                ? { opacity: 1, transform: "none" }
                : { opacity: 0, transform: "translateY(500px)" }
            }
            onClick={() => scrollToTop()}
            className="fixed bottom-5 right-5 w-[50px] h-[50px] bg-brand-a border-brand-d border-2 rounded-lg p-2 z-10"
          >
            <img src={arrowUp} alt="arrow-up" className="object-cover w-full" />
          </motion.div>
        </div>
        <div className="w-full xl:w-5/6 h-auto mt-0 pt-20" id="content">
          <div className="w-full" ref={divRef} />
          {/* put others here */}
          <div
            className="w-full flex flex-wrap md:flex-nowrap gap-x-3 items-center "
            id="about-me"
          >
            <div className="w-auto xl:w-1/4 flex justify-center items-center pl-5 xl:pl-auto mx-auto md:mx-0 my-5 md:my-auto">
              <div className="rounded-full bg-white w-[200px] xl:w-[300px] h-[200px] xl:h-[300px] overflow-hidden">
                <img src={pb} alt="my-image" />
              </div>
            </div>
            <div className="w-full md:w-3/4 pr-3 md:pr-10 pl-3 md:pl-auto text-center md:text-left">
              <div className="text-brand-b text-2xl xl:text-3xl mb-3">
                <strong>Hi! I am Carlo Angelo Hilaus.</strong>
                <br />
              </div>
              <span className="text-brand-d text-sm xl:text-base">
                — a passionate tech enthusiast, data strategist, and creative
                designer with a diverse background in data intelligence, web
                development, and graphic design. I love turning ideas into
                solutions that make a real impact, whether it’s through code,
                data, or design. I’m driven by passion in everything I do,
                whether it’s building applications, designing marketing visuals,
                or extracting insights from data. I approach every project with
                dedication, creativity, and a love for solving problems. Outside
                of work, I enjoy staying up-to-date with the latest trends in
                technology and design, always looking for new ways to innovate
                and enhance my skills..
              </span>
            </div>
          </div>

          <div className="w-full p-5 xl:p-auto mb-20">
            <Expertise />
          </div>
        </div>
      </div>
      <div className="w-full bg-brand-b">
        <Footer />
      </div>
    </div>
  );
};

export default About;
