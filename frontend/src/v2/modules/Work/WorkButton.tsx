import { motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import projectList from "../../../data/projectList.json";

import ProjectTypeIcon from "../../components/ProjectTypeIcon";

const WorkButton = () => {
  const appContext = useContext(AppContext);

  const shortenedName = (name: string) => {
    switch (name) {
      case "graphics":
        return "Design";
        break;
      case "development":
        return "Dev";
        break;
      case "uiux":
        return "UI/UX";
        break;
      case "ecomm":
        return "Ecomm";
        break;
      case "3d":
        return "3D";
        break;
      case "illustration":
        return "Draw";
        break;
      case "video":
        return "Animate";
        break;
      default:
        return "All";
    }
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, translateY: "-20px" }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 0.2, duration: 0.3, ease: "easeIn" }}
        className="w-full flex flex-row overflow-x-scroll md:overflow-x-visible"
      >
        <motion.div
          className="flex-1 flex flex-col justify-center text-center p-2 cursor-pointer"
          initial={{ backgroundColor: undefined }}
          animate={
            appContext.appData.projectTypes === "all"
              ? { backgroundColor: "#31363F" }
              : { backgroundColor: undefined }
          }
          transition={{ duration: 0.3, ease: "easeIn" }}
          onClick={() => {
            appContext.setAppData({
              ...appContext.appData,
              projectTypes: "all",
            });
          }}
        >
          <span className="hidden md:block">All</span>
          <div className="flex md:hidden flex-col items-center justify-center w-16">
            {<ProjectTypeIcon t={"all"} />}
            <span>All</span>
          </div>
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
                transition={{ duration: 0.3, ease: "easeIn" }}
                key={p.v}
                onClick={() => {
                  appContext.setAppData({
                    ...appContext.appData,
                    projectTypes: p.v,
                  });
                }}
              >
                <span className="hidden md:block">{p.name}</span>
                <div className="flex md:hidden flex-col items-center justify-center w-16">
                  {<ProjectTypeIcon t={p.v} />}
                  <span>{shortenedName(p.v)}</span>
                </div>
              </motion.div>
            );
          }
        )}
      </motion.div>
    </div>
  );
};

export default WorkButton;
