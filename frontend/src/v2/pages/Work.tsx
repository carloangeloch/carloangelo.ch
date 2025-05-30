import { useContext, useEffect, useState, useRef } from "react";
import { AppContext } from "../../context/AppContext";
import Header from "../components/Header";
import Socmed from "../components/Socmed";
import { motion } from "framer-motion";
import WorkContent from "../modules/Work/WorkContent";
import worksData from "../../data/works_data.json";
import arrowUp from "../../assets/up-arrow.png";
import { getScreenWidth } from "../../utils/getScreenWidth";

const FilterButton = ({ text, active, onClick }: any) => {
  let bgcolor = "#00000";

  switch (text) {
    case "Graphic Design":
      bgcolor = "#1D4ED8";
      break;
    case "UI/UX":
      bgcolor = "#EF4444";
      break;
    case "Web Development":
      bgcolor = "#15803D";
      break;
    case "E-commerce":
      bgcolor = "#0E7490";
      break;
    case "3D Art":
      bgcolor = "#EA580C";
      break;
    case "Illustration":
      bgcolor = "#CA8A04";
      break;
    case "Animation":
      bgcolor = "#7E22CE";
      break;
    default:
      bgcolor = "#ffffff";
      break;
  }

  return (
    <motion.div
      initial={{ backgroundColor: "#f6f8f5" }}
      animate={{ backgroundColor: active ? bgcolor : "#f6f8f5" }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="w-1/4 lg:w-1/6 hover:bg-opacity-80 transition-all duration-200 h-10 lg:h-full bg-d rounded-lg p-1 flex justify-around"
      onClick={onClick}
    >
      <div className="w-full relative text-center flex flex-wrap justify-center items-center text-black">
        <motion.div
          initial={{ color: "#00000" }}
          animate={{ color: active ? "#ffffff" : "#00000" }}
          className="absolute text-xs sm:text-sm lg:text-base"
        >
          <strong>{text}</strong>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Work = () => {
  const appContext = useContext(AppContext);
  const [workData, setWorkData] = useState(worksData);

  const sorted = (a: any, b: any) => {
    if (b.year !== a.year) {
      return b.year - a.year;
    }
    return b.month - a.month;
  };
  const updateData = (projectType: string) => {
    console.log(projectType);
    if (appContext.appData.projectTypes === projectType) {
      setWorkData(
        worksData
          .filter((obj) => obj.project_type.includes(projectType))
          .sort(sorted)
      );
      appContext.setAppData({ projectTypes: projectType });
      console.log(appContext.appData.projectTypes);
    }
  };

  const projectList = [
    {
      name: "Graphic Design",
      v: "graphics",
    },
    {
      name: "UI/UX",
      v: "uiux",
    },
    {
      name: "Web Development",
      v: "development",
    },
    {
      name: "E-commerce",
      v: "ecomm",
    },
    {
      name: "3D Art",
      v: "3d",
    },
    {
      name: "Illustration",
      v: "illustration",
    },
    {
      name: "Animation",
      v: "video",
    },
  ];

  useEffect(() => {
    appContext.setAppData({ currentPage: "work" });
    setWorkData(worksData.sort(sorted));
    updateData("");
  }, []);

  useEffect(() => {
    appContext.appData.projectTypes !== undefined && updateData(""); //prevent rerender of context data resulting to undefined
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
          <div role="tablist" className="tabs tabs-lift w-full flex flex-row">
            <div
              role="tab"
              className={
                "flex-1 tab" +
                (appContext.appData.projectTypes === "" ? "tab-active" : "")
              }
              onClick={() => {
                appContext.setAppData({ projectTypes: "" });
                updateData("");
              }}
            >
              All
            </div>
            {projectList.map((p) => {
              return (
                <div
                  role="tab"
                  className={
                    "flex-1 tab" +
                    (p.v === appContext.appData.projectTypes
                      ? "tab-active"
                      : "")
                  }
                  key={p.v}
                  onClick={() => {
                    appContext.setAppData({ projectTypes: p.v });
                    updateData(p.v);
                  }}
                >
                  {p.name}
                </div>
              );
            })}
          </div>
        </div>
        {/* <div className="w-full pb-16">
          <WorkContent workData={workData} />
          <div className="h-16"></div>
        </div> */}
        {/* end here */}
      </div>
    </div>
  );
};

export default Work;
