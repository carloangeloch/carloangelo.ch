import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import SectionTitle from '../components/SectionTitle';
import {motion} from 'framer-motion'
import WorkList from '../modules/works/WorkList'
import Container from '../components/Container';
import worksData from '../data/works_data.json'



const FilterButton = ({text, active, onClick}:any) => {

    // text === 'Graphic Design' ? '#1D4ED8' :
    // text === 'Web Development' ? '#15803D':
    // text === 'E-commerce' ? '#DB2777':
    // text === '3D Art' ? '#F59E0B':
    // text === 'Illustration' ? '#8B5CF6':
    // text === 'Animation' ? '#F87171':

    // if()

    let bgcolor = '#00000';

    if(text === 'Graphic Design'){
        bgcolor = '#1D4ED8'
    } else if(text === 'Web Development'){
        bgcolor = '#15803D'
    } else if(text === 'E-commerce'){
        bgcolor = '#DB2777'
    } else if(text === '3D Art'){
        bgcolor = '#F59E0B'
    } else if(text === 'Illustration'){
        bgcolor = '#8B5CF6'
    } else if(text === 'Animation'){
        bgcolor = '#F87171'
    }

    return (
        <motion.div
            initial={{ backgroundColor: '#f6f8f5'}}
            animate={{ backgroundColor: active ? bgcolor : '#f6f8f5'}}
            transition={{duration: 0.2, ease:"easeInOut"}}
            className='w-1/4 lg:w-1/6 hover:bg-opacity-80 transition-all duration-200 h-10 lg:h-full bg-d rounded-lg p-1 flex justify-around'
            onClick={onClick}
        >
            <div className='w-full relative text-center flex flex-wrap justify-center items-center'>
                <motion.div
                    initial={{color:"#00000"}}
                    animate={{color: active ? '#ffffff' : '#00000'}}
                    className='absolute text-xs sm:text-sm lg:text-base'
                ><strong>{text}</strong></motion.div>
            </div>
        </motion.div>
    )
}


const MyWorks = () => {

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

                <div className='relative w-5/6 md:w-3/4 h-16 flex flex-wrap lg:flex-nowrap gap-2 justify-center mx-auto'>
                    <FilterButton text='Graphic Design' active={appContext.appData.projectTypes === 'graphics'} onClick={ () => {
                        appContext.appData.projectTypes !== 'graphics' ?  appContext.setAppData({ projectTypes: 'graphics'}) : appContext.setAppData({ projectTypes: 'both'})
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