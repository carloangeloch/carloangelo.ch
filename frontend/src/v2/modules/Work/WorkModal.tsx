import { AnimatePresence, motion } from "framer-motion";
import { monthByNumbers } from "../../../utils/monthByNumber";
import iconList from "../../../data/icon_list.json";
import { useNavigate } from "react-router-dom";
import ImageLazyLoad from "../../../utils/ImageLazyLoad";

import { IoClose } from "react-icons/io5";
import { useState } from "react";

const WorkModal = ({ data, setOpenModal }: any) => {
  const navigate = useNavigate();
  const [imageFull, setImageFull] = useState(false);
  const [imageZoom, setImageZoom] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <motion.div className="w-full h-screen bg-brand-c p-8 flex flex-wrap overflow-y-scroll">
      <div id="close-div" className="w-full flex flex-row justify-end">
        <IoClose
          fontSize={32}
          className="hover:bg-red-500 duration-300 ease-out"
          onClick={() => setOpenModal(false)}
        />
      </div>
      <div id="project-info" className="w-full lg:w-1/3">
        <div
          id="project description"
          className="flex flex-col gap-y-1 xl:gap-y-"
        >
          <motion.div
            className="text-lg xl:text-2xl text-color-c"
            id="title"
            initial={{ opacity: 0, transform: "translateX(-100px)" }}
            animate={{ opacity: 1, transform: "none" }}
            transition={{ delay: 0.2 }}
          >
            <strong>{data.title}</strong>
          </motion.div>
          <motion.div
            id="description"
            className="text-sm xl:text-base"
            initial={{ opacity: 0, transform: "translateX(-100px)" }}
            animate={{ opacity: 0.8, transform: "none" }}
            transition={{ delay: 0.4 }}
          >
            {monthByNumbers(data.month)} {data.year}
            <br />
            {data.website !== "" && (
              <span>
                Website:{" "}
                <a
                  href={data.website}
                  target="_blank"
                  className="text-blue-300"
                >
                  {data.website}
                </a>
              </span>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, transform: "translateX(-100px)" }}
            animate={{ opacity: 0.8, transform: "none" }}
            transition={{ delay: 0.6 }}
            className="text-sm xl:text-base mb-4"
          >
            {data.description}
          </motion.div>
        </div>
        <motion.div
          id="software used"
          initial={{ opacity: 0, transform: "translateX(-100px)" }}
          animate={{ opacity: 1, transform: "none" }}
          transition={{ delay: 0.8 }}
          className="text-sm xl:text-base"
        >
          <strong>
            {data.project_type.includes("graphics")
              ? data.project_type.includes("development")
                ? "Dev Stack / Design Tools Used"
                : "Software Used"
              : "Dev Stack Used"}
          </strong>
          <div className="flex gap-x-4 flex-wrap mt-3">
            {data.stacks.map((e: any, index: number) => {
              var index = index * 0.2 + 1;
              return (
                <motion.div
                  initial={{ opacity: 0, transform: "translateX(-100px)" }}
                  animate={{ opacity: 1, transform: "none" }}
                  transition={{ delay: index }}
                  key={Math.random()}
                  className="mb-5 w-[40%] md:w-[30%] lg:w-auto "
                >
                  <div className="mb-2">{e.name}</div>
                  <div className="flex flex-col gap-2">
                    {e.lists.map((i: any) => {
                      var iconFind = iconList.find((obj) => obj.name === i) || {
                        name: "",
                        url: "",
                      };
                      return (
                        <div
                          key={Math.random()}
                          className="relative flex flex-row justify-start text-sm"
                        >
                          <img
                            src={String(iconFind.url)
                              .replace("www.dropbox", "dl.dropboxusercontent")
                              .replace("&dl=0", "")}
                            alt={i}
                            className="w-[30px] mr-3"
                          />
                          <span>{iconFind.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
      <div id="project-images" className="w-full lg:w-2/3 pl-2">
        <div id="other-images" className="w-full my-3 xl:my-20">
          {data.others.map((i: any, idx: number) => {
            var index = idx * 0.2 + data.stacks.length * 0.5;
            if (i.type === "image") {
              return (
                <motion.div
                  initial={{
                    opacity: 0,
                    transform:
                      window.innerWidth < 750
                        ? "translateX(-100px)"
                        : "translateX(100px)",
                  }}
                  animate={{ opacity: 1, transform: "none" }}
                  transition={{ delay: index }}
                  className="w-full flex flex-wrap justify-center text-center cursor-pointer"
                  key={i.title + String(Math.random())}
                  onClick={() => {
                    setImageFull(true);
                    setImageIndex(idx);
                    console.log(data.others[imageIndex].url);
                  }}
                >
                  <div className="w-full lg:w-3/4 py-1 lg:py-3">
                    {i.title !== "" && (
                      <div id="item-title" className="text-xl w-full">
                        <strong>{i.title}</strong>
                      </div>
                    )}
                    {i.description !== "" && (
                      <div
                        id="item-title"
                        className="text-sm lg:text-base opacity-80 w-full my-2"
                      >
                        {i.description}
                      </div>
                    )}
                  </div>
                  <div
                    key={i.url}
                    className="w-full flex justify-center my-0 md:my-2 lg:my-10"
                  >
                    <ImageLazyLoad
                      imageSrc={[i.url]}
                      altname=""
                      styles="w-full"
                    />
                    {/* <img src={String(i.url).replace("www.dropbox","dl.dropboxusercontent").replace("&dl=0","")} alt="" className="w-full" loading="lazy"/> */}
                  </div>
                </motion.div>
              );
            } else if (i.type === "video-vimeo") {
              return (
                <motion.div
                  initial={{ opacity: 0, transform: "translateX(-100px)" }}
                  animate={{ opacity: 1, transform: "none" }}
                  transition={{ delay: index }}
                  key={i.title + String(Math.random())}
                  className="text-center"
                >
                  <div className="w-full flex flex-wrap justify-center my-10">
                    <div className="w-3/4 py-3">
                      {i.title !== "" && (
                        <div id="item-title" className="text-xl w-full my-2">
                          <strong>{i.title}</strong>
                        </div>
                      )}
                      {i.description !== "" && (
                        <div
                          id="item-title"
                          className="text-sm lg:text-base opacity-80 w-full my-2"
                        >
                          {i.description}
                        </div>
                      )}
                    </div>
                    <iframe
                      src={`${i.url}?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
                      className="w-full h-[600px]"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </motion.div>
              );
            } else if (i.type === "video-youtube") {
              return (
                <motion.div
                  initial={{ opacity: 0, transform: "translateX(-100px)" }}
                  animate={{ opacity: 1, transform: "none" }}
                  transition={{ delay: index }}
                  key={i.title + String(Math.random())}
                  className="text-center"
                >
                  <div className="w-full flex flex-wrap justify-center my-10">
                    <div className="w-3/4 py-3">
                      {i.title !== "" && (
                        <div id="item-title" className="text-xl w-full my-2">
                          <strong>{i.title}</strong>
                        </div>
                      )}
                      {i.description !== "" && (
                        <div
                          id="item-title"
                          className="text-sm lg:text-base opacity-80 w-full my-2"
                        >
                          {i.description}
                        </div>
                      )}
                    </div>
                    <iframe width="100%" height="600" src={i.url}></iframe>
                  </div>
                </motion.div>
              );
            }
          })}
        </div>
      </div>
      <AnimatePresence>
        {imageFull && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-screen bg-black z-30"
          >
            <button
              className="btn btn-success"
              onClick={() => setImageFull(false)}
            >
              Close
            </button>
            <motion.div
              className={
                imageZoom
                  ? "w-full bg-brand-b fixed top-0 left-0 h-screen overflow-scroll cursor-zoom-out"
                  : "w-full cursor-zoom-in"
              }
              onClick={() => setImageZoom(!imageZoom)}
            >
              <div className={imageZoom ? "w-[150%]" : "w-3/4 mx-auto"}>
                <ImageLazyLoad
                  imageSrc={[data.others[imageIndex].url]}
                  altname={data.others[imageIndex].title}
                  styles={imageZoom ? "w-full" : "h-full"}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
    // TODO: Enhance Image Zooming and View
    // <div className='w-full h-screen bg-color-a2 fixed top-0 left-0 z-10 flex flex-wrap xl:flex-nowrap text-color-d overflow-y-scroll xl:overflow-hidden'>
    //     <div className="w-full xl:w-1/3 pt-10 xl:pt-20 px-10 xl:px-20 flex flex-col gap-y-5" id="project panel">
    //         <div onClick={() => {
    //                 navigate('/work');
    //                 setOpenModal(false)
    //             }}
    //             onKeyDown={e=> e.key==='Escape' && setOpenModal(false)}
    //             className='text-red-500 cursor-pointer text-sm lg:text-base'
    //         ><em>Back</em></div>
    //     <div id="project description" className='flex flex-col gap-y-1 xl:gap-y-3'>
    //         <motion.div
    //             className="text-lg xl:text-2xl text-color-c"
    //             id="title"
    //             initial={{opacity:0, transform:'translateX(-100px)'}}
    //             animate={{opacity:1, transform:'none'}}
    //             transition={{delay:0.2}}
    //         >
    //             <strong>{data.title}</strong>
    //         </motion.div>
    //         <motion.div
    //             id="description"
    //             className="text-sm xl:text-base"
    //             initial={{opacity:0, transform:'translateX(-100px)'}}
    //             animate={{opacity:0.8, transform:'none'}}
    //             transition={{delay:0.4}}
    //         >
    //             {monthByNumbers(data.month)} {data.year}<br/>
    //             {data.website !== '' && <span>Website: <a href={data.website} target="_blank" className="text-blue-300">{data.website}</a></span>}
    //         </motion.div>
    //         <motion.div
    //             initial={{opacity:0, transform:'translateX(-100px)'}}
    //             animate={{opacity:0.8, transform:'none'}}
    //             transition={{delay:0.6}}
    //             className='text-sm xl:text-base'
    //         >
    //             {data.description}
    //         </motion.div>
    //     </div>
    //     <motion.div
    //         id="software used"
    //         initial={{opacity:0, transform:'translateX(-100px)'}}
    //         animate={{opacity:1, transform:'none'}}
    //         transition={{delay:0.8}}
    //         className='text-sm xl:text-base'
    //     >
    //         <strong>
    //             {data.project_type.includes('graphics') ? data.project_type.includes('development')? 'Dev Stack / Design Tools Used' : 'Software Used' : 'Dev Stack Used' }
    //         </strong>
    //         <div className='flex gap-x-4 flex-wrap mt-3'>
    //             {data.stacks.map((e:any, index: number) => {
    //                 var index = (index * 0.2) + 1
    //                 return(
    //                     <motion.div
    //                         initial={{opacity:0, transform:'translateX(-100px)'}}
    //                         animate={{opacity:1, transform:'none'}}
    //                         transition={{delay:index}}
    //                         key={Math.random()}
    //                         className="mb-5"
    //                     >
    //                         <div className="mb-2">{e.name}</div>
    //                         <div className="flex xl:flex-col xl:gap-y-2">
    //                             {e.lists.map((i:any) => {
    //                                 var iconFind = iconList.find( obj => obj.name === i) || {"name":"" , "url":""}
    //                                 return(
    //                                     <div
    //                                         key={Math.random()}
    //                                         className="relative flex justify-start text-sm"
    //                                     >
    //                                         <img src={String(iconFind.url).replace("www.dropbox","dl.dropboxusercontent").replace("&dl=0","")} alt={i} className="w-[30px] mr-3"/>
    //                                         { getScreenWidth() >= 1050 && <span>{iconFind.name}</span> }
    //                                     </div>
    //                                 )
    //                             })}
    //                         </div>
    //                     </motion.div>
    //                 )
    //             })}
    //         </div>
    //     </motion.div>
    // </div>
    //     <div className="w-full xl:w-2/3 xl:overflow-y-scroll px-2 md:px-10 xl:pr-20 xl:pl-0" id="images panel">
    // <div id="other-images" className="w-full my-3 xl:my-20">
    //         {data.others.map((i:any, index: number) => {
    //             var index = (index * 0.2) + 1
    //             if(i.type === 'image'){
    //                 return(
    //                     <motion.div
    //                         initial={{opacity:0, transform:'translateX(-100px)'}}
    //                         animate={{opacity:1, transform:'none'}}
    //                         transition={{delay:index}}
    //                         className="w-full flex flex-wrap justify-center text-center" key={i.title+String(Math.random())}>
    //                         <div className="w-full lg:w-3/4 py-1 lg:py-3">
    //                             {i.title !== '' && <div id='item-title' className="text-xl w-full"><strong>{i.title}</strong></div>}
    //                             {i.description !== '' && <div id='item-title' className="text-sm lg:text-base opacity-80 w-full my-2">{i.description}</div>}
    //                         </div>
    //                         <div key={i.url} className="w-full flex justify-center my-0 md:my-2 lg:my-10">
    //                             <ImageLazyLoad
    //                             imageScr={String(i.url).replace("www.dropbox","dl.dropboxusercontent").replace("&dl=0","")}
    //                             altname=""
    //                             styles='w-full'
    //                             />
    //                             {/* <img src={String(i.url).replace("www.dropbox","dl.dropboxusercontent").replace("&dl=0","")} alt="" className="w-full" loading="lazy"/> */}
    //                         </div>
    //                     </motion.div>
    //                 )
    //             } else if(i.type === 'video-vimeo'){
    //                 return(
    //                     <motion.div
    //                         initial={{opacity:0, transform:'translateX(-100px)'}}
    //                         animate={{opacity:1, transform:'none'}}
    //                         transition={{delay:index}}
    //                         key={i.title+String(Math.random())} className="text-center">
    //                         <div className="w-full flex flex-wrap justify-center my-10">
    //                             <div className="w-3/4 py-3">
    //                                 {i.title !== '' && <div id='item-title' className="text-xl w-full my-2"><strong>{i.title}</strong></div>}
    //                                 {i.description !== '' && <div id='item-title' className="text-sm lg:text-base opacity-80 w-full my-2">{i.description}</div>}
    //                             </div>
    //                             <iframe
    //                                 src={`${i.url}?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
    //                                 className="w-full h-[600px]"
    //                                 allow="autoplay; fullscreen; picture-in-picture"
    //                                 allowFullScreen
    //                                 >
    //                             </iframe>
    //                         </div>
    //                     </motion.div>
    //                 )
    //             }else if(i.type === 'video-youtube'){
    //                 return(
    //                     <motion.div
    //                         initial={{opacity:0, transform:'translateX(-100px)'}}
    //                         animate={{opacity:1, transform:'none'}}
    //                         transition={{delay:index}}
    //                         key={i.title+String(Math.random())} className="text-center">
    //                         <div className="w-full flex flex-wrap justify-center my-10">
    //                             <div className="w-3/4 py-3">
    //                                 {i.title !== '' && <div id='item-title' className="text-xl w-full my-2"><strong>{i.title}</strong></div>}
    //                                 {i.description !== '' && <div id='item-title' className="text-sm lg:text-base opacity-80 w-full my-2">{i.description}</div>}
    //                             </div>
    //                             <iframe width="100%" height="600"
    //                                 src={i.url}>
    //                             </iframe>
    //                         </div>
    //                     </motion.div>
    //                 )
    //             }
    //         })}
    // </div>
    //     </div>
    // </div>
  );
};

export default WorkModal;
