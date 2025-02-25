import { useContext, useEffect } from "react"
import { AppContext } from "../../context/AppContext"
import Header from '../components/Header'
import chLogo from '../../assets/ch-light.svg';
import pb from '../../assets/papaB-2.png';
import Socmed from '../components/Socmed';
import ImageLazyLoad from "../../utils/ImageLazyLoad";

const Home = () => {
    const appContext = useContext(AppContext)

    useEffect(() => appContext.setAppData({ currentPage: 'v2-home'}) ,[])

    
    return (
        <div className="w-full bg-color-a2 font-title flex flex-wrap h-screen">
            <div className="w-full xl:w-1/3 h-1/2 md:h-1/4 lg:h-1/3 xl:h-full relative text-color-d">
                <div className="h-auto xl:h-1/2">
                    <div className="flex p-3 xl:pl-20 xl:pt-20 w-full">
                        <Header/>
                    </div>
                </div>
                <div className="w-full h-full xl:h-1/2 relative xl:absolute bottom-0 text-center xl:text-left flex flex-col justify-center items-center">
                    <div className="relative w-full h-auto xl:h-full">
                        <div className="w-full relative xl:absolute bottom-0 p-0 xl:pb-20 px-5 md:px-20 flex flex-col justify-center items-center xl:justify-normal xl:items-start">
                            <div className="text-4xl text-color-c mb-3"><strong>Hi! I'm Carlo.</strong></div>
                            <div className="text-sm md:text-base xl:text-xl">Whether I’m building outstanding applications, crafting compelling designs, or brainstorming data-driven insights ideas, I pour my passion into everything I do.</div>
                            <div className="flex gap-x-3 mt-7 md:mt-3">
                                <Socmed/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full xl:w-2/3 h-1/2 md:h-3/4 lg:h-2/3 xl:h-full relative">
                <div className="flex h-full p-5 xl:pr-20">
                    <img src={chLogo} alt="ch-logo" className="mx-auto opacity-20"/>
                </div>
                <div className="absolute z-10 top-0 w-full h-full flex justify-center">
                    <ImageLazyLoad imageScr={pb} altname="my-image" styles="h-full object-cover" />
                </div>
            </div>
        </div>
    )
}

export default Home