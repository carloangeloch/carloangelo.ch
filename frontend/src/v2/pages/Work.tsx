import { useContext, useEffect, useState, useRef, lazy} from "react";
import { AppContext } from "../../context/AppContext";
import Header from "../components/Header";
import Socmed from "../components/Socmed";
import { motion } from "framer-motion";
import WorkContent from "../modules/Work/WorkContent";
// import worksData from "../../data/works_data.json";
import arrowUp from "../../assets/up-arrow.png";
import { workSort, workDataController } from "../controller/worksController";
const WorkButtons = lazy(() => import("../modules/Work/WorkButton"));

const Work = () => {
  const appContext = useContext(AppContext);
  const [workData, setWorkData] = useState(
    workSort('all')
  ); //hold current work data

  useEffect(() => {
    appContext.setAppData({ currentPage: "work" })
    const pstate = sessionStorage.getItem("pstate")
    if(!sessionStorage.getItem("pstate")){
      //Persistent projectType
      workDataController('all')
      setWorkData(workSort('all'))
      appContext.setAppData({ projectTypes: "all" })
    }
    if(sessionStorage.getItem("pstate") ) {
      workDataController(pstate as string)
      setWorkData(workSort(pstate as string))
      appContext.setAppData({ projectTypes: pstate as string })
    }
  }, []);

  useEffect(() => {
    setWorkData(workSort(appContext.appData.projectTypes));
  },[workData, appContext.appData.projectTypes]);

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
      className="w-full bg-color-a2 font-title flex flex-wrap xl:flex-nowrap h-screen "
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

        <div className="h-auto xl:h-1/2">
          <div className="flex p-3 xl:pl-20 xl:pt-20 w-full">
            <Header />
          </div>
        </div>

        {/* <div className="h-auto xl:h-1/2 " id="header-container">
          <div
            className="flex p-3 xl:pl-20 xl:pt-20 w-full"
            id="header-box"
          >
            <Header />
          </div>
        </div> */}
        {window.innerHeight > 1050 ? (
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
        className="w-full xl:w-5/6 h-auto xl:h-full mt-0 pt-20"
        id="content"
      >
        {/* scroll to top ref */}
        <div className="w-full" ref={divRef} />
        {/* put others here */}
        <WorkButtons />
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
