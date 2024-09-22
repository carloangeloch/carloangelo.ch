import Container from "../../components/Container"
import SectionTitle from "../../components/SectionTitle"
import programming from "../../assets/programing.png"
import design from "../../assets/graphic-design.png"
import { motion, useInView} from 'framer-motion'
import { useContext, useRef } from "react"
import { getScreenWidth } from "../../utils/getScreenWidth"
import { AppContext } from "../../context/AppContext"
import { useNavigate } from "react-router-dom"


const Works = () => {

    const appContext = useContext(AppContext)
    const refer = useRef(null);
    const isInView = useInView(refer , {once: true});
    const screenWidth = getScreenWidth()
    const navigate = useNavigate();

    const workClicked = ( workType: string) => {
        console.log(workType, 'is passed to workClicked')
        appContext.setAppData({projectTypes: workType})
        console.log(appContext.appData.projectTypes, "from landing")
        setTimeout( () => {
            window.scrollTo(0,0)
            navigate('/works')
        }, 500)
    }


    return (
        <div id="works" className="bg-a w-full py-14 bg-opacity-80">
            <SectionTitle title="My Work" textColor="text-color-d" dividerColor="bg-color-c"/>
            <Container>
                { screenWidth >= 1280 ?
                    <div className="w-full flex gap-3 xl:gap-10 justify-center">
                        
                        <motion.div
                            initial="initial"
                            whileHover="hovered"
                            transition={{duration:0.5, ease:"easeInOut"}}
                            className="w-[500px] h-[500px] relative"
                            id="data-button"
                        >
                            <motion.div
                                variants={{
                                    initial : {top:'10%', left:'15%'},
                                    hovered : {top:'5%', left:'12%'}
                                }}
                                className="absolute w-2/3 h-3/4 rounded-lg z-[1] bg-designing bg-cover bg-center overflow-hidden cursor-pointer"
                                onClick={ () => {
                                    appContext.setAppData({projectTypes: 'graphics'})
                                    workClicked('graphics')}
                                }
                            >
                                <motion.img src={design}
                                variants={{
                                    initial: { height: 0, opacity:0},
                                    hovered: { height: "50%", opacity: 1}
                                }}
                                layout
                                className="absolute h-1/2 top-[25%] left-[23%] z-[2]"
                                alt="programming-icon"/>
                                <motion.div
                                    variants={{
                                        initial: {opacity: 0.3},
                                        hovered: {opacity: 0.85}
                                    }}
                                className="bg-b w-full h-full absaolute top-0 left-0 z-10"/>
                                <div className="absolute w-full top-[40%] text-center text-4xl text-color-d drop-shadow-xl"  style={screenWidth < 1280 ? { opacity : 1} : { opacity : 0}}>
                                    <strong>Graphic<br/>Design</strong>
                                </div>
                            </motion.div>
                            <motion.div
                                variants={{
                                    initial : {bottom:'10%', right:'15%'},
                                    hovered : {bottom:'5%', right:'12%'}
                                }}
                                className="absolute bg-a w-2/3 h-3/4 rounded-lg  cursor-pointer"
                            >
                                <motion.strong
                                    variants={{
                                        initial: {opacity: 0},
                                        hovered: {opacity: 1},
                                    }}
                                    transition={{duration:0.2, ease:"easeInOut"}}
                                    className="absolute bottom-3 left-3 text-3xl text-color-d"
                                >
                                    Graphic Design
                                </motion.strong>
                            </motion.div>
                        </motion.div>

                        
                        <motion.div
                            initial="initial"
                            whileHover="hovered"
                            transition={{duration:0.5, ease:"easeInOut"}}
                            className="w-[500px] h-[500px] relative"
                            id="dev-button"
                        >
                            <motion.div
                                variants={{
                                    initial : {top:'10%', left:'15%'},
                                    hovered : {top:'5%', left:'12%'}
                                }}
                                className="absolute w-2/3 h-3/4 rounded-lg z-[1] bg-coding bg-cover bg-center overflow-hidden cursor-pointer"
                                onClick={ () =>{
                                        appContext.setAppData({projectTypes: 'development'})
                                        workClicked('development')
                                    }} 
                            >
                                <motion.img src={programming}
                                variants={{
                                    initial: { height: 0, opacity:0},
                                    hovered: { height: "50%", opacity: 1}
                                }}
                                layout
                                className="absolute h-1/2 top-[25%] left-[23%] z-[2]"
                                alt="programming-icon"/>
                                <motion.div
                                    variants={{
                                        initial: {opacity: 0.3},
                                        hovered: {opacity: 0.85}
                                    }}
                                className="bg-b w-full h-full absaolute top-0 left-0"/>
                                <div className="absolute w-full top-[40%] text-center text-4xl text-color-d drop-shadow-xl" style={screenWidth < 1280 ? { opacity : 1} : { opacity : 0}}>
                                    <strong>Web<br/>Development</strong>
                                </div>
                            </motion.div>
                            <motion.div
                                variants={{
                                    initial : {bottom:'10%', right:'15%'},
                                    hovered : {bottom:'5%', right:'12%'}
                                }}
                                className="absolute bg-a w-2/3 h-3/4 rounded-lg  cursor-pointer"
                            >
                                <motion.strong
                                    variants={{
                                        initial: {opacity: 0},
                                        hovered: {opacity: 1},
                                    }}
                                    transition={{duration:0.2, ease:"easeInOut"}}
                                    className="absolute bottom-3 left-3 text-3xl text-color-d"
                                >
                                    Web Development
                                </motion.strong>
                            </motion.div>
                        </motion.div>
                    </div>
                :
                    <div className="w-3/4 md:w-2/3 h-[300px] mx-auto">
                        <motion.div 
                            ref={refer}
                            initial={{ opacity: 0, transform: "translateX(-100px)"}}
                            animate={
                                isInView ? 
                                    {transform: 'none', opacity: 1}
                                :
                                    {transform: 'translateX(-100px)', opacity: 0}
                            }
                            transition={{ duration: 0.5, ease:"easeInOut", delay: 0.2}}
                            className="w-full h-1/2 flex justify-center"
                            onClick={ () => {
                                appContext.setAppData({projectTypes: 'graphics'})
                                workClicked('graphics')}
                            }
                        >
                            <div className="h-[100px] w-[100px] relative flex-none mt-5 rounded-[50%] bg-d">
                                <img src={design} alt={design} className="w-[60px] absolute left-[20%] top-[20%]"/>
                            </div>
                            <motion.div
                                initial={{opacity: 0, transform: 'translateX(-100px)'}}
                                animate={{opacity: 1, transform: 'none'}}
                                transition={{duration: 0.5, ease:"easeInOut", delay: 0.8}}
                                className="h-full pt-8 px-2 text-color-d"
                            >
                                <strong>Graphic Design</strong>
                            </motion.div>
                        </motion.div>
                        <motion.div 
                            ref={refer}
                            initial={{ opacity: 0, transform: "translateX(100px)"}}
                            animate={
                                isInView ? 
                                    {transform: 'none', opacity: 1}
                                :
                                    {transform: 'translateX(100px)', opacity: 0}
                            }
                            transition={{ duration: 0.5, ease:"easeInOut", delay: 0.2}}
                            className="w-full h-1/2 flex justify-center"
                        >
                            <motion.div
                                initial={{opacity: 0, transform: 'translateX(100px)'}}
                                animate={{opacity: 1, transform: 'none'}}
                                transition={{duration: 0.5, ease:"easeInOut", delay: 0.8}}
                                className="h-full pt-8 px-2 text-color-d text-right"
                                onClick={ () => {
                                    appContext.setAppData({projectTypes: 'graphics'})
                                    workClicked('development')}
                                }
                            >
                                <strong>Web Development</strong>
                            </motion.div>
                            <div className="h-[100px] w-[100px] relative flex-none mt-5 rounded-[50%] bg-d">
                                <img src={programming} alt={programming} className="w-[60px] absolute left-[20%] top-[20%]"/>
                            </div>
                        </motion.div>
                        
                        
                    </div>
                }
            </Container>
        </div>
    )
}

export default Works