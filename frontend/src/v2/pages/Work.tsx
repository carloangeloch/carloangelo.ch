import { useContext, useEffect, useState, useRef } from "react";
import { AppContext } from "../../context/AppContext";
import Header from "../components/Header";
import Socmed from "../components/Socmed";
import { easeIn, motion } from "framer-motion";
import WorkContent from "../modules/Work/WorkContent";
// import worksData from "../../data/works_data.json";
import arrowUp from "../../assets/up-arrow.png";
import { getScreenWidth } from "../../utils/getScreenWidth";
import projectList from "../../data/projectList.json";
import { worksController } from "../controller/worksController";

const Work = () => {
  const appContext = useContext(AppContext);
  const [workData, setWorkData] = useState(
    worksController(appContext.appData.projectTypes)
  );
  const [prevState, setPrevState] = useState(appContext.appData.projectTypes);

  const updateData = (projectType: string) => {
    if (appContext.appData.projectTypes === projectType) {
      setWorkData(worksController(projectType));
      appContext.setAppData({ projectTypes: projectType });
    }
  };

  useEffect(() => {
    appContext.setAppData({ currentPage: "work" });
    setWorkData(worksController(appContext.appData.projectTypes));
    setPrevState(workData);
    updateData(appContext.appData.projectTypes);
  }, []);

  useEffect(() => {
    appContext.appData.projectTypes !== prevState &&
      updateData(appContext.appData.projectTypes); //prevent rerender of context data resulting to undefined
  }, [appContext.appData.projectTypes]);

  //!scroll to top -- DO NOT DELETE
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
      className="w-full bg-color-a2 font-title flex flex-wrap xl:flex-nowrap h-screen overflow-visible xl:overflow-hidden"
      id="container"
    >
      <div
        className="w-full xl:w-1/6 h-auto xl:h-full relative text-color-d "
        id="header"
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
            className="fixed bottom-5 right-5 w-[50px] h-[50px] bg-color-a border-color-d border-2 rounded-lg p-2 z-10"
          >
            <img src={arrowUp} alt="arrow-up" className="object-cover w-full" />
          </motion.div>
        </div>

        <div className="h-auto xl:h-1/2 " id="header-container">
          <div
            className="flex p-3 xl:pl-20 xl:pt-20 w-full fixed xl:relative z-[5] xl:z-0 bg-color-a2"
            id="header-container"
          >
            <Header />
          </div>
        </div>
        {getScreenWidth() > 1050 ? (
          <div className="w-full h-1/2 absolute bottom-0">
            <div className="relative w-full h-full">
              <div className=" absolute bottom-0 pb-20 px-20">
                <div className="flex flex-col gap-y-5">
                  <Socmed />
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <div
        className="w-full xl:w-5/6 h-auto xl:h-full overflow-y-visible xl:overflow-y-scroll mt-0 pt-20"
        id="content"
      >
        {/* scroll to top ref */}
        <div className="w-full" ref={divRef} />
        {/* put others here */}
        <div>
          <div className="w-full flex flex-row">
            <motion.div
              className="flex-1 flex flex-col justify-center text-center p-2 cursor-pointer"
              initial={{ backgroundColor: undefined }}
              animate={
                appContext.appData.projectTypes === "all"
                  ? { backgroundColor: "#31363F" }
                  : { backgroundColor: undefined }
              }
              transition={{ duration: 0.3, ease: easeIn }}
              onClick={() => {
                appContext.setAppData({ projectTypes: "all" });
                updateData("");
              }}
            >
              All
            </motion.div>
            {Object(projectList).map(
              (p: { name: string; v: string; color: string }) => {
                return (
                  <motion.div
                    className="flex-1 flex flex-col justify-center text-center p-2 cursor-pointer"
                    initial={{ backgroundColor: undefined }}
                    animate={
                      appContext.appData.projectTypes === p.v
                        ? { backgroundColor: p.color }
                        : { backgroundColor: undefined }
                    }
                    transition={{ duration: 0.3, ease: easeIn }}
                    key={p.v}
                    onClick={() => {
                      appContext.setAppData({ projectTypes: p.v });
                      updateData(p.v);
                    }}
                  >
                    {p.name}
                  </motion.div>
                );
              }
            )}
          </div>
        </div>
        <div className="w-full pb-16">
          <WorkContent workData={workData} />
          {/* <div className="h-16"></div> */}
        </div>
        {/* end here */}
      </div>
    </div>
  );
};

export default Work;
