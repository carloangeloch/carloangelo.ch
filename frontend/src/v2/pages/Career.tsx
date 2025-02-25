import {useContext, useEffect, useRef, useState} from 'react'
import { AppContext } from '../../context/AppContext'
import Header from '../components/Header'
import Socmed from '../components/Socmed'
import JobHistory from '../modules/Career/JobHistory'
import arrowUp from '../../assets/up-arrow.png'
import {motion} from 'framer-motion'
import { getScreenWidth } from '../../utils/getScreenWidth'

const Career = () => {
    const appContext = useContext(AppContext)

    useEffect(() => appContext.setAppData({ currentPage: 'career'}) ,[])

    //scroll to top
    const divRef = useRef<HTMLDivElement>(null);
    const [isOffScreen, setIsOffScreen] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsOffScreen(!entry.isIntersecting);
          },
          { threshold: 0 } // Trigger when even 1px is out of view
        );
    
        const currentDiv = divRef.current;
    
        if (currentDiv) {
          observer.observe(currentDiv);
        }
    
        return () => {
          if (currentDiv) {
            observer.unobserve(currentDiv);
          }
        };
    }, []);
    const scrollToTop = () =>{
        divRef.current?.scrollIntoView({behavior:'smooth', block:'end'})
    }

    return (
        <div className="w-full bg-color-a2 font-title flex flex-wrap xl:flex-nowrap h-screen overflow-visible xl:overflow-hidden" id="container">
            <div className="w-full xl:w-1/6 h-auto xl:h-full relative text-color-d" id='header'>
            
                {/* scroll to top button */}
                <div className="w-full relative">
                    <motion.div
                        initial={{opacity: 0, transform:'translateY(500px)'}}
                        animate={
                            isOffScreen ? 
                                {opacity:1, transform:'none'}
                            :
                                {opacity: 0, transform:'translateY(500px)'}
                        }
                        onClick={() => scrollToTop()}
                        className="fixed bottom-5 right-5 w-[50px] h-[50px] bg-color-a border-color-d border-2 rounded-lg p-2 z-10">
                        <img src={arrowUp} alt="arrow-up" className="object-cover w-full"/>
                    </motion.div>
                </div>

                <div className="h-auto xl:h-1/2">
                    <div className="flex p-3 xl:pl-20 xl:pt-20 w-full fixed xl:relative z-[5] xl:z-0  bg-color-a2">
                        <Header/>
                    </div>
                </div>
                {getScreenWidth() > 1050 &&
                    <div className="w-full h-1/2 absolute bottom-0">
                        <div className="relative w-full h-full">
                            <div className=" absolute bottom-0 pb-20 px-20">
                                <div className="flex flex-col gap-y-5">
                                    <Socmed/> 
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
            
            <div className="w-full xl:w-5/6 h-auto xl:h-full overflow-y-visible xl:overflow-y-scroll mt-0 pt-20" id="content">
                <div className="w-full"  ref={divRef}/>
                {/* put others here */}
                <div className="w-full xl:w-3/4 mx-auto">
                    <JobHistory/>
                </div>
                {/* end here */}
            </div>
        </div>
    )
}

export default Career