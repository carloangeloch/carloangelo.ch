import { motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import projectList from "../../../data/projectList.json";

const WorkButton = () => {
  const appContext = useContext(AppContext);
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, translateY: "-20px" }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 0.5, duration: 0.3, ease: "easeIn" }}
        className="w-full flex flex-row"
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
                transition={{ duration: 0.3, ease: "easeIn" }}
                key={p.v}
                onClick={() => {
                  appContext.setAppData({
                    ...appContext.appData,
                    projectTypes: p.v,
                  });
                }}
              >
                {p.name}
              </motion.div>
            );
          }
        )}
      </motion.div>
    </div>
  );
};

export default WorkButton;
