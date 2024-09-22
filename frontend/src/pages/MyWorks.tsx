import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import SectionTitle from '../components/SectionTitle';
import {motion} from 'framer-motion'
import programming from "../assets/programing.png"
import design from "../assets/graphic-design.png"
import WorkList from '../modules/works/WorkList'
import Container from '../components/Container';
import worksData from '../data/works_data.json'
import { getWidthType } from '../utils/getScreenWidth';


const MyWorks = () => {

    const appContext = useContext(AppContext);
    const [workData, setWorkData] = useState(worksData)
    const screenType = getWidthType()


    
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
        if(appContext.appData.projectTypes === 'both'){
            setWorkData(worksData.sort(sorted))
            appContext.setAppData({projectTypes: 'both'})
        }
    }
    
    useEffect(() => {
        appContext.setAppData({ currentPage: 'works'})
        setWorkData(worksData.sort(sorted))
        updateData()
    } ,[]);

    useEffect( () => {
        appContext.appData.projectTypes !== undefined && updateData() //prevent rerender of context data resulting to undefined
    },[appContext.appData.projectTypes])

    return (
        <div>
            <div className='bg-a py-14'>
                <SectionTitle title="My Works" textColor='text-color-d'/>
                <div className="relative w-full h-[20px] md:h-[45px] lg:h-[60px] xl:h-[120px]">
                    <motion.div
                        initial={{position: 'absolute', top: 0, height: screenType === 'xl'? 120 : (screenType === 'lg' ? 100 : (screenType === 'md' ? 80 : 60)) }}
                        animate={
                            appContext.appData.yScroll ?
                                {position: 'fixed', top: screenType === 'xl'? 80 : (screenType === 'lg' ? 70 : (screenType === 'md' ? 70 : 80)) , height: screenType === 'xl'? 80 : (screenType === 'lg' ? 70 : (screenType === 'md' ? 60 : 50)) }
                            :
                                {position: 'absolute', top: 0}
                        }
                        className="top-0 left-0 w-full flex z-[3] justify-center px-3 md:p-0"
                    >
                        <div className='w-full md:w-[450px] lg:w-[600px] bg-a h-full flex gap-10 justify-around p-3 rounded-lg drop-shadow-lg'>
                            <motion.div
                                initial={{ backgroundColor: '#f6f8f5'}}
                                animate={{ backgroundColor: appContext.appData.projectTypes === 'graphics' ? '#FDE047' : '#f6f8f5'}}
                                transition={{duration: 0.2, ease:"easeInOut"}}
                                className='w-1/2 hover:bg-opacity-80 transition-all duration-200 h-full bg-d rounded-lg p-2 flex justify-around.'
                                onClick={ () => {
                                    appContext.appData.projectTypes !== 'graphics' ?  appContext.setAppData({ projectTypes: 'graphics'}) : appContext.setAppData({ projectTypes: 'both'})
                                }}
                            >
                                { screenType !== 'sm' && <img src={design} alt={design} className='h-full block' />}
                                <div className='w-full relative'>
                                    <motion.div
                                        initial={{top: screenType === 'xl'? "35%" : (screenType === 'lg' ? '30%' : (screenType === 'md' ? "25%" : "5%")) , right: screenType === 'xl'? "20%" : (screenType === 'md' ? "15%" : "20%")}}
                                        animate={
                                            appContext.appData.yScroll ?
                                                {top: screenType === 'xl'? "25%" : (screenType === 'lg' ? '15%' : (screenType === 'md' ? "5%" : -5)) , right: screenType === 'xl'? "30%" : (screenType === 'md' ? "25%" : "20%")}
                                            :
                                            {top: screenType === 'xl'? "35%" :  (screenType === 'lg' ? '30%' :(screenType === 'md' ? "25%" : "5%")) , right: screenType === 'xl'? "20%" : (screenType === 'md' ? "15%" : "20%")}
                                        }
                                        className='absolute text-xs sm:text-sm lg:text-base'
                                    >Graphic Design</motion.div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ backgroundColor: '#f6f8f5'}}
                                animate={{ backgroundColor: appContext.appData.projectTypes === 'development' ? '#FDE047' : '#f6f8f5'}}
                                transition={{duration: 0.2, ease:"easeInOut"}}
                                className='w-1/2 hover:bg-opacity-80 transition-all duration-200 h-full bg-d rounded-lg p-2 flex justify-around'
                                onClick={ () => {
                                    appContext.appData.projectTypes !== 'development' ? appContext.setAppData({ projectTypes: 'development'}) : appContext.setAppData({ projectTypes: 'both'})
                                }}
                            >
                                <div className='w-full relative'>
                                    
                                    <motion.div
                                            initial={{top: screenType === 'xl'? "35%" : (screenType === 'lg' ? '30%' : (screenType === 'md' ? "25%" : "5%")) , left: screenType === 'xl'? "15%" : (screenType === 'md' ? "10%" : "10%")}}
                                            animate={
                                                appContext.appData.yScroll ?
                                                {top: screenType === 'xl'? "25%" : (screenType === 'lg' ? '15%' : (screenType === 'md' ? "5%" : -5)) , left: screenType === 'xl'? "20%" : (screenType === 'md' ? "15%" : "10%")}
                                                :
                                                {top: screenType === 'xl'? "35%" : (screenType === 'lg' ? '30%' : (screenType === 'md' ? "25%" : "5%")) , left: screenType === 'xl'? "15%" : (screenType === 'md' ? "10%" : "10%")}
                                            }
                                            className='absolute text-xs sm:text-sm lg:text-base'
                                        >Web Development</motion.div>
                                </div>
                                { screenType !== 'sm' && <img src={programming} alt={programming} className='h-full block' />}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className='w-full'>
                <Container>
                    <WorkList workData={workData}/>
                </Container>
            </div>
        </div>
    )
}

export default MyWorks