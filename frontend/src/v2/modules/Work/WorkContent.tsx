import { AnimatePresence, motion } from "framer-motion";
import { FC, useEffect, useState } from "react";
import { monthByNumbers } from "../../../utils/monthByNumber";
import WorkModal from "./WorkModal";
import { useNavigate, useParams } from "react-router-dom";
import ImageLazyLoad from "../../../utils/ImageLazyLoad";
import ProjectTypeIcon from "../../components/ProjectTypeIcon";

interface WorkListProps {
  workData: any;
}

const WorkContent: FC<WorkListProps> = ({ workData }) => {
  const [openModal, setOpenModal] = useState(false);
  const [dataID, setDataID] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    openModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [openModal]);

  const p = useParams();
  useEffect(() => {
    if (Object.keys(p).length > 0) setDataID(Object.values(p).toString());
    if (Object.keys(p).length > 0) setOpenModal(true);
  }, []);

  return (
    <>
      <div className="relative w-full">
        <AnimatePresence>
          {openModal && (
            <motion.div
              initial={{ opacity: 0, bottom: "-100%" }}
              animate={{ opacity: 1, bottom: 0 }}
              exit={{ opacity: 0, bottom: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed left-0 w-full h-screen z-30"
            >
              <WorkModal
                data={workData.find((obj: any) => obj.id === dataID)}
                setOpenModal={setOpenModal}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div
        className="flex flex-wrap gap-4 w-full justify-center mt-8"
        style={{ overflowY: openModal ? "hidden" : "visible" }}
      >
        {workData.map((work: any, ind: number) => {
          return (
            <motion.div
              key={work.id}
              initial={{
                opacity: 0,
                translateY: "50px",
              }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                delay: 0.1 * ind + 0.5,
                ease: "easeInOut",
                duration: 0.2,
              }}
              className="w-full md:w-1/3 lg:w-1/4 2xl:w-96 cursor-pointer"
              onClick={() => {
                setOpenModal(true);
                setDataID(work.id);
                navigate(`/work/${work.id}`);
              }}
            >
              <motion.div
                initial={{ translateY: 0, backgroundColor: "#222831" }}
                whileHover={{ translateY: "-8px", backgroundColor: "#31363F" }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                }}
                className="card bg-base-100 w-full h-[380px] shadow-sm relative"
                key={work.id}
              >
                <figure className="h-3/4 bg-brand-c">
                  <ImageLazyLoad
                    imageSrc={[work.thumbnail_link]}
                    altname={work.title}
                    styles="h-full object-cover w-full"
                  />
                </figure>
                <div className="h-1/4 p-2">
                  <h2 className="card-title">
                    {String(work.title).substring(0, 50)}{" "}
                    {work.title.length > 50 ? "..." : ""}
                  </h2>
                  <p>{monthByNumbers(work.month) + " " + work.year}</p>
                </div>
                <div className="absolute h-16 w-full flex flex-row gap-x-2 justify-end p-2">
                  {work.project_type.map((t: string) => (
                    <div key={t + Math.random().toString()}>
                      <ProjectTypeIcon t={t} />
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};
export default WorkContent;
