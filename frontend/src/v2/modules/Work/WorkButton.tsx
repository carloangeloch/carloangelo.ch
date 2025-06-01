import {motion} from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import projectList from "../../../data/projectList.json";

import { workDataController } from "../../controller/worksController"

const WorkButton = () => {
    const appContext = useContext(AppContext);
    console.log("WorkButton Rendered", appContext.appData.projectTypes);
    console.log("WorkButton on storage", sessionStorage.getItem("pstate"));
  return (
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
            transition={{ duration: 0.3, ease: 'easeIn' }}
            onClick={() => {
            workDataController("all");
            appContext.setAppData({ projectTypes: "all" });
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
                transition={{ duration: 0.3, ease: 'easeIn' }}
                key={p.v}
                onClick={() => {
                    workDataController(p.v);
                    appContext.setAppData({ projectTypes: p.v });
                }}
                >
                {p.name}
                </motion.div>
            );
            }
        )}
        </div>
    </div>
  )
}

export default WorkButton