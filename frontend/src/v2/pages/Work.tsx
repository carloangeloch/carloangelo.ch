import { useContext, useEffect, useState, useRef, lazy } from "react";
import { AppContext } from "../../context/AppContext";
import Header from "../components/Header";
import { motion } from "framer-motion";
import WorkContent from "../modules/Work/WorkContent";
// import worksData from "../../data/works_data.json";
import arrowUp from "../../assets/up-arrow.png";
import { workSort } from "../controller/worksController";

const WorkButtons = lazy(() => import("../modules/Work/WorkButton"));
const Footer = lazy(() => import("../components/Footer"));

const Work = () => {
  const appContext = useContext(AppContext);
  const [workData, setWorkData] = useState(workSort("all")); //hold current work data

  useEffect(() => {
    appContext.setAppData({ ...appContext.appData, currentPage: "work" });
    if (appContext.appData.projectTypes === null || undefined)
      appContext.setAppData({ ...appContext.appData, projectTypes: "all" });
  }, []);

  useEffect(() => {
    setWorkData(workSort(appContext.appData.projectTypes));
  }, [appContext.appData.projectTypes]);

  //!scroll to top func -- DO NOT DELETE
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
  //!end of scroll to top//

  return (
    <div
      className="w-full bg-brand-a flex flex-wrap flex-col xl:flex-row"
      id="container"
      style={{ overflowY: appContext.appData.showNav ? "hidden" : "auto" }}
    >
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
        <div className="w-full relative" id="scroll-top-btn">
          <motion.div
            initial={{ opacity: 0, transform: "translateY(500px)" }}
            animate={
              isOffScreen
                ? { opacity: 1, transform: "none" }
                : { opacity: 0, transform: "translateY(500px)" }
            }
            onClick={() => scrollToTop()}
            className="fixed bottom-5 right-5 w-[50px] h-[50px] bg-brand-a border-color-d border-2 rounded-lg p-2 z-10"
          >
            <img src={arrowUp} alt="arrow-up" className="object-cover w-full" />
          </motion.div>
        </div>

        {/* scroll to top ref */}
        <div className="w-full" ref={divRef} />
        {/* put others here */}
        <div className="w-full overflow-x-hidden">
          <WorkButtons />
        </div>
        <div className="w-full pb-16">
          <WorkContent workData={workData} />
        </div>
        {/* end here */}
      </div>
      {/* <Footer /> */}
      <div className="w-full bg-brand-b">
        <Footer />
      </div>
    </div>
  );
};

export default Work;
