import Container from "../../components/Container"
import {motion} from 'framer-motion'
import { FC, useEffect, useRef, useState } from "react";
import {monthByNumbers} from '../../utils/monthByNumber'
import WorkModal from "./WorkModal";


interface WorkListProps {
    workData: any;
}

const WorkList: FC<WorkListProps> = ({workData}) => {
    const [ openModal, setOpenModal ] = useState(false)
    const modalID = useRef<any>(null)
    
    useEffect( () => {
        openModal ? document.body.style.overflow = 'hidden' :  document.body.style.overflow = 'unset'
    },[openModal])

    return (
        <div className="relative w-full">
            
            {
                openModal &&
                <WorkModal data={workData.find((obj:any) => obj.id === modalID.current)} setOpenModal={setOpenModal}/>
            }
            <div className="my-5 md:my-10 lg:my-28">
                <Container>
                    <div className="w-full flex flex-wrap justify-center gap-x-2 lg:gap-x-5 gap-y-5 lg:gap-y-10">
                        {workData.map( (work:any) => {
                            return(
                                <motion.div
                                    key={work.id}
                                    initial="initial"
                                    whileHover="hovered"
                                    className="w-5/6 md:w-[320px] lg:w-[350px] h-[450px] lg:h-[550px] rounded-lg cursor-pointer"
                                    onClick={ () => {
                                        modalID.current = work.id
                                        setOpenModal(true)
                                    }}
                                    title={work.title}
                                >
                                    <div id="thumbnail-image" className="w-full  h-[320px] lg:h-[400px] overflow-hidden">
                                        <motion.img
                                            loading="lazy"
                                            layout
                                            variants={{
                                                initial: {height: 400, width: 400},
                                                hovered: {height: 500, width: 500}
                                            }}
                                            src={String(work.thumbnail_link).replace("www.dropbox","dl.dropboxusercontent").replace("&dl=0","")}
                                            alt={String(work.thumbnail_link).split("/")[5]}
                                            className="object-cover rounded-lg"
                                        />
                                    </div>
                                    <div className="text-lg md:text-xl lg:text-2xl mt-2 h-[60px] lg:h-[70px] text-color-a opacity-80">
                                        <strong>{String(work.title).length > 50 ? `${String(work.title).slice(0,50)}...` : work.title}</strong>
                                    </div>
                                    <div className="w-1/2 text-sm lg:text-base text-color-a opacity-60">
                                        {monthByNumbers(work.month)} - {work.year}
                                    </div>
                                    <div className="w-fulll flex">
                                        {work.project_type.includes("graphics") && <div className="bg-blue-700 text-color-d text-xs rounded-xl p-1 mr-2">Graphic Design</div>}
                                        {work.project_type.includes("development") && <div className="bg-green-700 text-color-d text-xs rounded-xl p-1 mr-2">Web Development</div>}
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default WorkList