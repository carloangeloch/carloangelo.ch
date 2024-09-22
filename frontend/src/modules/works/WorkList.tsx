import Container from "../../components/Container"
import {motion} from 'framer-motion'
import { FC, useEffect, useRef, useState } from "react";
import {monthByNumbers} from '../../utils/monthByNumber'
import iconList from '../../data/icon_list.json'

const Modal = ({data, setOpenModal} :any) => {
    return(
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration: 0.5, ease:"easeInOut"}}
            className="fixed w-full h-screen bg-a bg-opacity-70 z-30 top-0 left-0 py-20 overflow-y-scroll"
        >
            <Container>
                <div className="bg-d w-full flex flex-wrap p-1 md:p-3 lg:p-10 flex-row-reverse">
                    <div id="close-btn" className="w-full flex justify-end text-2xl relative">
                        <div className="w-[30px] md:w-[40px] lg:w-[50px] h-[30px] md:h-[40px] lg:h-[50px] text-center text-sm md:text-lg lg:text-2xl cursor-pointer fixed border bg-red-500 text-white hover:bg-red-800 transition-all duration-200 rounded-[50%] pt-1 z-10" onClick={() => setOpenModal(false)} onKeyDown={e=> e.key==='Escape' && setOpenModal(false)}><strong>x</strong></div>
                    </div>
                    <motion.div
                        initial={{opacity:0, transform: "scale(0.5)"}}
                        animate={{opacity:1, transform: "scale(1)"}}
                        transition={{delay:0.8}}
                        id="thumbnail"
                        className="w-full xl:w-1/2 flex flex-wrap justify-center"
                    >
                        <img loading="lazy" src={String(data.thumbnail_link).replace("www.dropbox","dl.dropboxusercontent").replace("&dl=0","")} alt="" className="h-[400px] xl:h-[600px] object-cover"/>
                    </motion.div>
                    <div id="modal-text" className="text-color-a w-full xl:w-1/2 text-center xl:text-left mx-auto justify-center my-10">
                        <div className="text-xl md:text-2xl lg:text-3xl w-full mb-5">
                            <motion.strong
                                initial={{opacity:0, transform:'translateX(-100px)'}}
                                animate={{opacity:1, transform:'none'}}
                                transition={{delay:0.2}}
                            >
                                {data.title}
                            </motion.strong>
                            <motion.div
                                initial={{opacity:0, transform:'translateX(-100px)'}}
                                animate={{opacity:0.8, transform:'none'}}
                                transition={{delay:0.4}}
                                className="text-sm lg:text-base mt-5"
                            >
                                {monthByNumbers(data.month)} {data.year}<br/>
                                {data.website !== '' && <span>Website: <a href={data.website} target="_blank" className="text-blue-600">{data.website}</a></span>}
                            </motion.div>
                        </div>
                        <motion.div
                                initial={{opacity:0, transform:'translateX(-100px)'}}
                                animate={{opacity:0.8, transform:'none'}}
                                transition={{delay:0.6}}
                            className="text-sm md:text-base lg:text-lg w-full pr-5"
                        >
                            {data.description}
                        </motion.div>
                        <div>
                            <motion.div
                                initial={{opacity:0, transform:'translateX(-100px)'}}
                                animate={{opacity:1, transform:'none'}}
                                transition={{delay:0.8}}
                                className="my-3"
                            >
                                <strong>
                                    {data.project_type.includes('graphics') ? data.project_type.includes('development')? 'Dev Stack / Design Tools Used' : 'Design Tools Used' : 'Dev Stack Used' }
                                </strong>
                            </motion.div>
                            {data.stacks.map((e:any, index: number) => {
                                var index = (index * 0.2) + 1
                                return(
                                    <motion.div
                                        initial={{opacity:0, transform:'translateY(-50px)'}}
                                        animate={{opacity:1, transform:'none'}}
                                        transition={{delay:index}}
                                        key={Math.random()}
                                        className="mb-5"
                                    >
                                        <div className="mb-2">{e.name}</div>
                                        <div className="flex justify-center xl:justify-start">
                                            {e.lists.map((i:any) => {
                                                var iconFind = iconList.find( obj => obj.name === i) || {"name":"" , "url":""}
                                                return(
                                                    <motion.div
                                                        key={Math.random()}
                                                        initial='initial'
                                                        whileHover="hovered"
                                                        className="relative flex justify-center xl:justify-start"
                                                    >
                                                        <img src={String(iconFind.url).replace("www.dropbox","dl.dropboxusercontent").replace("&dl=0","")} alt={i} className="h-[50px] mr-3"/>
                                                        <motion.span
                                                            variants={{
                                                                initial: {opacity: 0 , transform: 'translateX(-30px)'},
                                                                hovered:{opacity: 1 , transform: 'none'}
                                                            }}
                                                            className="absolute -bottom-5 w-[200px]"
                                                        >
                                                            {iconFind.name}
                                                        </motion.span>
                                                    </motion.div>
                                                )
                                            })}
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                    <div id="other-images" className="w-full my-3 xl:my-20">
                            {data.others.map((i:any) => {
                                if(i.type === 'image'){
                                    return(
                                        <div className="w-full flex flex-wrap justify-center text-center" key={i.title+String(Math.random())}>
                                            <div className="w-full lg:w-3/4 py-1 lg:py-3">
                                                {i.title !== '' && <div id='item-title' className="text-xl w-full my-2"><strong>{i.title}</strong></div>}
                                                {i.description !== '' && <div id='item-title' className="text-sm lg:text-base opacity-80 w-full my-2">{i.description}</div>}
                                            </div>
                                            <div key={i.url} className="w-full flex justify-center my-0 md:my-2 lg:my-10">
                                                <img src={String(i.url).replace("www.dropbox","dl.dropboxusercontent").replace("&dl=0","")} alt="" className="w-full md:w-3/4 lg:w-2/3" loading="lazy"/>
                                            </div>
                                        </div>
                                    )
                                } else if(i.type === 'video'){
                                    return(
                                        <div key={i.title+String(Math.random())} className="text-center">
                                            <div className="w-full flex flex-wrap justify-center my-10">
                                                <div className="w-3/4 py-3">
                                                    {i.title !== '' && <div id='item-title' className="text-xl w-full my-2"><strong>{i.title}</strong></div>}
                                                    {i.description !== '' && <div id='item-title' className="text-sm lg:text-base opacity-80 w-full my-2">{i.description}</div>}
                                                </div>
                                                <iframe 
                                                    src={`${i.url}?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
                                                    className="w-full h-[600px]"
                                                    allow="autoplay; fullscreen; picture-in-picture" 
                                                    allowFullScreen
                                                    >
                                                </iframe>
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                                
                    </div>
                    <div className="bg-c w-[150px] h-[5px] mx-auto my-5"/>
                    <div className="w-full text-xl md:text-2xl lg:text-3xl text-center text-color-a opacity-80 my-10"> 
                        That's it! Thank you!
                    </div>
                </div>
            </Container>
        </motion.div>
    )
}


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
                <Modal data={workData.find((obj:any) => obj.id === modalID.current)} setOpenModal={setOpenModal}/>
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