import { motion } from "framer-motion";
import { FC, useEffect, useRef, useState } from "react";
import { monthByNumbers } from "../../../utils/monthByNumber";
import WorkModal from "./WorkModal";
import { useNavigate, useParams } from "react-router-dom";
import { getScreenWidth } from "../../../utils/getScreenWidth";
import ImageLazyLoad from "../../../utils/ImageLazyLoad";

interface WorkListProps {
  workData: any;
}

const WorkContent: FC<WorkListProps> = ({ workData }) => {
  const [openModal, setOpenModal] = useState(false);
  const modalID = useRef<any>(null);
  const navigate = useNavigate();
  const dataId = useParams();

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
    <div className="bg-brand-b">
      {workData.map((work: any) => {
        return (
          <div key={work.id}>
            <div>
              <span>{work.title}</span>
            </div>
            <figure>
              <img src={work.thumbnail_link} />
            </figure>
          </div>
        );
      })}
    </div>
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
