import { motion, useInView } from "framer-motion";
import { FC, useEffect, useRef, useState } from "react";
import { monthByNumbers } from "../../../utils/monthByNumber";
import WorkModal from "./WorkModal";
import { useNavigate, useParams } from "react-router-dom";
import ImageLazyLoad from "../../../utils/ImageLazyLoad";

import { FaRegFolderOpen } from "react-icons/fa";
import { MdOutlineDraw } from "react-icons/md";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaTerminal } from "react-icons/fa6";
import { Md3dRotation } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { CgBrowser } from "react-icons/cg";
import { PiVideoLight } from "react-icons/pi";

interface WorkListProps {
  workData: any;
}

const WorkContent: FC<WorkListProps> = ({ workData }) => {
  const [openModal, setOpenModal] = useState(false);
  const modalID = useRef<any>(null);
  const navigate = useNavigate();
  const dataId = useParams();
  const refer = useRef(null);
  const isInView = useInView(refer, { once: true });

  useEffect(() => {
    modalID.current = dataId.dataId;
    if (dataId.dataId) {
      setOpenModal(true);
    } else {
      setOpenModal(false);
    }
  }, [dataId]);

  useEffect(() => {
    openModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [openModal]);

  return (
    <div className="flex flex-wrap gap-3 w-full justify-center mt-8">
      {workData.map((work: any, ind: number) => {
        return (
          <motion.div
            ref={refer}
            initial={{ opacity: 0, translateY: "50px" }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.1 * ind, ease: "easeInOut", duration: 0.2 }}
          >
            <motion.div
              initial={{ translateY: 0 }}
              whileHover={{ translateY: "-8px" }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
              className="card bg-base-100 w-full md:w-1/3 lg:w-1/4 2xl:w-96 h-[380px] shadow-sm relative"
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
                {work.project_type.map((t: string) => {
                  if (t == "all")
                    return (
                      <FaRegFolderOpen
                        className="bg-[#31363F] rounded-full p-1"
                        fontSize={32}
                      />
                    );
                  else if (t == "illustration")
                    return (
                      <MdOutlineDraw
                        className="bg-[#CA8A04] rounded-full p-1"
                        fontSize={32}
                      />
                    );
                  else if (t == "graphics")
                    return (
                      <MdOutlineDesignServices
                        className="bg-[#1D4ED8] rounded-full p-1"
                        fontSize={32}
                      />
                    );
                  else if (t == "development")
                    return (
                      <FaTerminal
                        className="bg-[#15803D] rounded-full p-1"
                        fontSize={32}
                      />
                    );
                  else if (t == "3d")
                    return (
                      <Md3dRotation
                        className="bg-[#EA580C] rounded-full p-1"
                        fontSize={32}
                      />
                    );
                  else if (t == "ecomm")
                    return (
                      <CiShop
                        className="bg-[#0E7490] rounded-full p-1"
                        fontSize={32}
                      />
                    );
                  else if (t == "uiux")
                    return (
                      <CgBrowser
                        className="bg-[#EF4444] rounded-full p-1"
                        fontSize={32}
                      />
                    );
                  else if (t == "animation")
                    return (
                      <PiVideoLight
                        className="bg-[#7E22CE] rounded-full p-1"
                        fontSize={32}
                      />
                    );
                })}
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>

    //TODO: MODAL FUNCTIONALITY

    // <div className="relative w-full">
    //   {openModal && (
    //     <WorkModal
    //       data={workData.find((obj: any) => obj.id === modalID.current)}
    //       setOpenModal={setOpenModal}
    //     />
    //   )}
    //   <div className="mt-10">
    //     <div
    //       className="w-full flex flex-wrap justify-center p-auto xl:p-2"
    //       id="image-container"
    //     >
    //       {workData.map((work: any) => {
    //         return (
    //           <motion.div
    //             key={work.id}
    //             initial="initial"
    //             whileHover="hovered"
    //             className="w-[200px] md:w-[280px] xl:w-[400px] h-[200px] md:h-[280px] xl:h-[400px] cursor-pointer relative overflow-hidden"
    //             onClick={() => {
    //               navigate(`/work/${work.id}`);
    //               modalID.current = work.id;
    //               setOpenModal(true);
    //             }}
    //             title={work.title}
    //           >
    //             <motion.div
    //               variants={
    //                 getScreenWidth() <= 1050
    //                   ? {
    //                       initial: { height: 400, width: 400 },
    //                       hovered: { height: 400, width: 400 },
    //                     }
    //                   : {
    //                       initial: { height: 400, width: 400 },
    //                       hovered: { height: 500, width: 500 },
    //                     }
    //               }
    //               className="bg-white"
    //             >
    //               <ImageLazyLoad
    //                 imageScr={String(work.thumbnail_link)
    //                   .replace("www.dropbox", "dl.dropboxusercontent")
    //                   .replace("&dl=0", "")}
    //                 altname={String(work.thumbnail_link).split("/")[5]}
    //                 styles="object-cover object-center h-full mx-auto"
    //               />
    //             </motion.div>
    //             {getScreenWidth() <= 1050 ? (
    //               <div className="absolute bottom-0 w-full text-lg md:text-xl text-color-a2">
    //                 <div
    //                   id="detail-box"
    //                   className="bg-color-d bg-opacity-80 p-1 md:p-2"
    //                 >
    //                   <strong className="text-xs md:text-sm xl:text-xl">
    //                     {String(work.title).length > 40
    //                       ? `${String(work.title).slice(0, 40)}...`
    //                       : work.title}
    //                   </strong>
    //                   <div className="w-full text-xs xl:text-sm my-1">
    //                     {monthByNumbers(work.month)} - {work.year}
    //                   </div>
    //                 </div>
    //               </div>
    //             ) : (
    //               <motion.div
    //                 variants={{
    //                   initial: { bottom: "-100%" },
    //                   hovered: { bottom: 0 },
    //                 }}
    //                 className="absolute bottom-0 w-full"
    //               >
    //                 <div className="text-lg md:text-xl text-color-a bg-gradient-to-t from-white to-white/0 p-2 pt-60">
    //                   <div>
    //                     <strong>
    //                       {String(work.title).length > 40
    //                         ? `${String(work.title).slice(0, 40)}...`
    //                         : work.title}
    //                     </strong>
    //                   </div>
    //                   <div className="w-1/2 text-sm text-color-a my-1">
    //                     {monthByNumbers(work.month)} - {work.year}
    //                   </div>
    //                   <div className="w-full flex flex-wrap gap-1">
    //                     {work.project_type.includes("graphics") && (
    //                       <div className="bg-blue-700 text-color-d text-xs rounded-md p-1.5">
    //                         Graphic Design
    //                       </div>
    //                     )}
    //                     {work.project_type.includes("uiux") && (
    //                       <div className="bg-red-500 text-color-d text-xs rounded-md p-1.5">
    //                         UI/UX
    //                       </div>
    //                     )}
    //                     {work.project_type.includes("development") && (
    //                       <div className="bg-green-700 text-color-d text-xs rounded-md p-1.5">
    //                         Web Development
    //                       </div>
    //                     )}
    //                     {work.project_type.includes("ecomm") && (
    //                       <div className="bg-cyan-700 text-color-d text-xs rounded-md p-1.5">
    //                         E-Commerce
    //                       </div>
    //                     )}
    //                     {work.project_type.includes("3d") && (
    //                       <div className="bg-orange-600 text-color-d text-xs rounded-md p-1.5">
    //                         3D Art
    //                       </div>
    //                     )}
    //                     {work.project_type.includes("illustration") && (
    //                       <div className="bg-amber-600 text-color-d text-xs rounded-md p-1.5">
    //                         Illustration
    //                       </div>
    //                     )}
    //                     {work.project_type.includes("video") && (
    //                       <div className="bg-purple-700 text-color-d text-xs rounded-md p-1.5">
    //                         Animation
    //                       </div>
    //                     )}
    //                   </div>
    //                 </div>
    //               </motion.div>
    //             )}
    //           </motion.div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>
  );
};
export default WorkContent;
