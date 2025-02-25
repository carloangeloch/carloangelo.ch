import {useContext, useEffect, useState, useRef} from 'react'
import { AppContext } from '../../context/AppContext'
import Header from '../components/Header'
import Socmed from '../components/Socmed'
import {motion} from 'framer-motion'
import WorkContent from '../modules/Work/WorkContent'
import worksData from '../../data/works_data.json'
import arrowUp from '../../assets/up-arrow.png'
import { getScreenWidth } from '../../utils/getScreenWidth'



const FilterButton = ({text, active, onClick}:any) => {

    let bgcolor = '#00000';

    if(text === 'Graphic Design'){
        bgcolor = '#1D4ED8'
    } else if(text === 'UI/UX'){
        bgcolor = '#EF4444'
    } else if(text === 'Web Development'){
        bgcolor = '#15803D'
    } else if(text === 'E-commerce'){
        bgcolor = '#0E7490'
    } else if(text === '3D Art'){
        bgcolor = '#EA580C'
    } else if(text === 'Illustration'){
        bgcolor = '#CA8A04'
    } else if(text === 'Animation'){
        bgcolor = '#7E22CE'
    }

    return (
        <motion.div
            initial={{ backgroundColor: '#f6f8f5'}}
            animate={{ backgroundColor: active ? bgcolor : '#f6f8f5'}}
            transition={{duration: 0.2, ease:"easeInOut"}}
            className='w-1/4 lg:w-1/6 hover:bg-opacity-80 transition-all duration-200 h-10 lg:h-full bg-d rounded-lg p-1 flex justify-around'
            onClick={onClick}
        >
            <div className='w-full relative text-center flex flex-wrap justify-center items-center text-black'>
                <motion.div
                    initial={{color:"#00000"}}
                    animate={{color: active ? '#ffffff' : '#00000'}}
                    className='absolute text-xs sm:text-sm lg:text-base'
                ><strong>{text}</strong></motion.div>
            </div>
        </motion.div>
    )
}


const Work = () => {

    const appContext = useContext(AppContext);
    const [workData, setWorkData] = useState(worksData)


    
    const sorted = (a:any, b:any) => {
        if(b.year !== a.year){
            return b.year - a.year
        }
        return b.month - a.month
    }

    const updateData = () => {
        if(appContext.appData.projectTypes === 'development'){
            setWorkData(worksData.filter( obj => obj.project_type.includes('development')).sort(sorted))
            appContext.setAppData({projectTypes: 'development'})
        }
        if(appContext.appData.projectTypes === 'graphics'){
            setWorkData(worksData.filter( obj => obj.project_type.includes('graphics')).sort(sorted))
            appContext.setAppData({projectTypes: 'graphics'})
        }
        if(appContext.appData.projectTypes === 'uiux'){
            setWorkData(worksData.filter( obj => obj.project_type.includes('uiux')).sort(sorted))
            appContext.setAppData({projectTypes: 'uiux'})
        }
        if(appContext.appData.projectTypes === '3d'){
            setWorkData(worksData.filter( obj => obj.project_type.includes('3d')).sort(sorted))
            appContext.setAppData({projectTypes: '3d'})
        }
        if(appContext.appData.projectTypes === 'ecomm'){
            setWorkData(worksData.filter( obj => obj.project_type.includes('ecomm')).sort(sorted))
            appContext.setAppData({projectTypes: 'ecomm'})
        }
        if(appContext.appData.projectTypes === 'illustration'){
            setWorkData(worksData.filter( obj => obj.project_type.includes('illustration')).sort(sorted))
            appContext.setAppData({projectTypes: 'illustration'})
        }
        if(appContext.appData.projectTypes === 'video'){
            setWorkData(worksData.filter( obj => obj.project_type.includes('video')).sort(sorted))
            appContext.setAppData({projectTypes: 'video'})
        }
        if(appContext.appData.projectTypes === 'both'){
            setWorkData(worksData.sort(sorted))
            appContext.setAppData({projectTypes: 'both'})
        }
    }
    
    useEffect(() => {
        appContext.setAppData({ currentPage: 'work'})
        setWorkData(worksData.sort(sorted))
        updateData()
    } ,[]);

    useEffect( () => {
        appContext.appData.projectTypes !== undefined && updateData() //prevent rerender of context data resulting to undefined
    },[appContext.appData.projectTypes])
    
    

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
            <div className="w-full xl:w-1/6 h-auto xl:h-full relative text-color-d " id='header'>
            
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

                <div className="h-auto xl:h-1/2 " id="header-container">
                    <div className="flex p-3 xl:pl-20 xl:pt-20 w-full fixed xl:relative z-[5] xl:z-0 bg-color-a2" id="header-container">
                        <Header/>
                    </div>
                </div>
                {getScreenWidth() > 1050 ?
                    <div className="w-full h-1/2 absolute bottom-0">
                        <div className="relative w-full h-full">
                            <div className=" absolute bottom-0 pb-20 px-20">
                                <div className="flex flex-col gap-y-5">
                                    <Socmed/> 
                                </div>
                            </div>
                        </div>
                    </div>
                    :null
                }
            </div>

            <div className="w-full xl:w-5/6 h-auto xl:h-full overflow-y-visible xl:overflow-y-scroll mt-0 pt-20" id="content">
                <div className="w-full"  ref={divRef}/>
                {/* put others here */}
                <div className='w-full md:w-3/4 h-auto xl:h-20 flex flex-wrap lg:flex-nowrap gap-2 justify-center mx-auto bg-color-a2 rounded-lg' id="btn-group">
                    <FilterButton text='Graphic Design' active={appContext.appData.projectTypes === 'graphics'} onClick={ () => {
                        appContext.appData.projectTypes !== 'graphics' ?  appContext.setAppData({ projectTypes: 'graphics'}) : appContext.setAppData({ projectTypes: 'both'})
                    }}/>
                    <FilterButton text='UI/UX' active={appContext.appData.projectTypes === 'uiux'} onClick={ () => {
                        appContext.appData.projectTypes !== 'uiux' ?  appContext.setAppData({ projectTypes: 'uiux'}) : appContext.setAppData({ projectTypes: 'both'})
                    }}/>
                    <FilterButton text='Web Development' active={appContext.appData.projectTypes === 'development'} onClick={ () => {
                        appContext.appData.projectTypes !== 'development' ?  appContext.setAppData({ projectTypes: 'development'}) : appContext.setAppData({ projectTypes: 'both'})
                    }}/>
                    <FilterButton text='E-commerce' active={appContext.appData.projectTypes === 'ecomm'} onClick={ () => {
                        appContext.appData.projectTypes !== 'ecomm' ?  appContext.setAppData({ projectTypes: 'ecomm'}) : appContext.setAppData({ projectTypes: 'both'})
                    }}/>
                    <FilterButton text='3D Art' active={appContext.appData.projectTypes === '3d'} onClick={ () => {
                        appContext.appData.projectTypes !== '3d' ?  appContext.setAppData({ projectTypes: '3d'}) : appContext.setAppData({ projectTypes: 'both'})
                    }}/>
                    <FilterButton text='Illustration' active={appContext.appData.projectTypes === 'illustration'} onClick={ () => {
                        appContext.appData.projectTypes !== 'illustration' ?  appContext.setAppData({ projectTypes: 'illustration'}) : appContext.setAppData({ projectTypes: 'both'})
                    }}/>
                    <FilterButton text='Animation' active={appContext.appData.projectTypes === 'video'} onClick={ () => {
                        appContext.appData.projectTypes !== 'video' ?  appContext.setAppData({ projectTypes: 'video'}) : appContext.setAppData({ projectTypes: 'both'})
                    }}/>
                </div>
                <div className="w-full pb-16">
                    <WorkContent workData={workData}/>
                    <div className="h-16"></div>
                </div>
                {/* end here */}
            </div>
        </div>
    )
}

export default Work