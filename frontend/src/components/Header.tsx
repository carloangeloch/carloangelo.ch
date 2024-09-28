import { useContext, useEffect, useRef, useState } from "react";
import chLogo from "../assets/ch-logo-square.png";
import { Link, useNavigate } from "react-router-dom";
import { getScreenHeight } from "../utils/getScreenHeight";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { getScreenWidth } from "../utils/getScreenWidth";
import arrowUp from '../assets/up-arrow.png'


const Header = () => {

    const appContext = useContext(AppContext)
    const headerTop = useRef(false);
    const [ headerOpacity, setHeaderOpacity ] = useState(false)
    const [ showNav, setShowNav ] = useState(false)

    let screenHeight = getScreenHeight();
    let screenWidth = getScreenWidth();
    let screen20 = screenHeight * 0.15

    useEffect( () => {
        window.onscroll = () => {scrollPosition()}
        const scrollPosition = () => {
            var scrollPos = window.scrollY | document.body.scrollTop;
            if (scrollPos < screen20){
                setHeaderOpacity(false)
                appContext.setAppData((t:any) => ({...t, yScroll: false}))
                headerTop.current === false ? headerTop.current = true : headerTop
            } else {
                setHeaderOpacity(true)
                appContext.setAppData((t:any) => ({...t, yScroll: true}))
                headerTop.current === true ? headerTop.current = false : headerTop
            }
        }
    }, [headerTop])

    useEffect(() => {
        if(screenWidth >= 1280){
            setShowNav(true)
        }
    },[])

    const navigate = useNavigate();

    return (
        <div className="fixed w-full h-16 flex top-0 left-0 z-30">
            {appContext.appData.currentPage !== 'page404' &&
                <>
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: headerOpacity? 1: 0 }}
                        transition={{ease: "easeInOut", duration: 0.2}}
                        className="absolute top-0 left-0 w-full h-full bg-[#223843] -z-10" 
                    ></motion.div>
                    <div className="w-1/2 flex py-1 pl-5">
                        <img src={chLogo} alt="ch logo" className="cursor-pointer" onClick={() => navigate('/')}/>
                    </div>
                    
                    <div id="navbar" className="w-1/2 flex justify-end xl:justify-normal">
                        <motion.div
                            initial={{top: -500}}
                            animate={{top: showNav ? 0: -500}}
                            className="absolute xl:relative w-full bg-a xl:bg-transparent mt-16 xl:mt-0">
                            <div className="w-full flex flex-col-reverse xl:flex-row-reverse">
                                <Link to="/contact">
                                    <div className="w-full xl:w-36 h-[80px] xl:h-full text-center p-2 cursor-pointer transition-all duration-200 text-color-a hover:text-xl hover:pt-1" onClick={() => setShowNav(false)}>
                                        <div className="bg-yellow-300 rounded-md w-full h-full p-5 xl:p-3"><strong>Contact</strong></div>
                                    </div>
                                </Link>
                                <Link to='/works'>
                                    <div className="w-full xl:w-36 h-[80px] xl:h-full text-center p-7 xl:p-5 cursor-pointer transition-all duration-200 hover:bg-a hover:bg-opacity-30 over:text-xl hover:pt-4"
                                    onClick={() => setShowNav( screenWidth >= 1280 ? true : false )} style={
                                        {
                                            color: (screenWidth >= 1280 )?
                                                    //PC
                                                    (!headerOpacity && appContext.appData.currentPage === 'landing') ? '#223843' : '#F8E7E2'
                                                :
                                                    //mobile
                                                    '#F8E7E2'
                                        }
                                    }><strong>Works</strong></div>
                                </Link>
                                <Link to="/profile">
                                    <div className="w-full xl:w-36 h-[80px] xl:h-full text-center p-7 xl:p-5 cursor-pointer transition-all duration-200 hover:bg-a hover:bg-opacity-30 hover:text-xl hover:pt-4"
                                    onClick={() => setShowNav( screenWidth >= 1280 ? true : false)} style={
                                        {
                                            color: (screenWidth >= 1280 )?
                                                    //PC
                                                    (!headerOpacity && appContext.appData.currentPage === 'landing') ? '#223843' : '#F8E7E2'
                                                :
                                                    //mobile
                                                    '#F8E7E2'
                                        }
                                    }><strong>Profile</strong></div>
                                </Link>
                                <Link to="/">
                                    <div className="w-full xl:w-36 h-[80px] xl:h-full text-center p-7 xl:p-5 cursor-pointer transition-all duration-200 hover:bg-a hover:bg-opacity-30 hover:text-xl hover:pt-4"
                                    onClick={() => setShowNav( screenWidth >= 1280 ? true : false)} style={
                                        {
                                            color: (screenWidth >= 1280 )?
                                                    //PC
                                                    (!headerOpacity && appContext.appData.currentPage === 'landing') ? '#223843' : '#F8E7E2'
                                                :
                                                    //mobile
                                                    '#F8E7E2'
                                        }
                                    }><strong>Home</strong></div>
                                </Link>
                            </div>
                        </motion.div>
                        {
                            screenWidth < 1280 &&
                                <div className="w-[60px] h-[60px] text-center p-2 cursor-pointer transition-all duration-200 text-color-a hover:text-xl hover:pt-1 mt-0 md:mt-2 md:mr-2" onClick={() => setShowNav(!showNav)}>
                                    <div className="bg-yellow-300 rounded-[50%] w-full h-full flex flex-col justify-center align-middle relative">
                                        <motion.div
                                            initial={{width: 5, transform: 'none'}}
                                            animate={
                                                showNav ? 
                                                    {width: 20, transform: 'rotate(45deg)', position: 'absolute', left: '28%'}
                                                :
                                                    {width: 5, transform: 'none'}
                                            }
                                            className="rounded-md h-[5px] w-[5px] bg-a my-0.5 mx-auto"/>
                                        { !showNav && <div className="rounded-md h-[5px] w-[5px] bg-a my-0.5 mx-auto"/>}
                                        <motion.div
                                            initial={{width: 5, transform: 'none', position:'relative', left : 0}}
                                            animate={
                                                showNav ? 
                                                    {width: 20, transform: 'rotate(-45deg)', position: 'absolute',  left: '28%'}
                                                :
                                                    {width: 5, transform: 'none'}
                                            }
                                            className="rounded-md h-[5px] w-[5px] bg-a my-0.5 mx-auto"/>
                                    </div>
                                </div>
                }
                    </div>
                </>
            }
            <div className="relative" id='scroll-to-top'>
                <motion.div
                    initial={{opacity: 0, transform:'translateY(500px)'}}
                    animate={
                        headerOpacity ? 
                            {opacity:1, transform:'none'}
                        :
                            {opacity: 0, transform:'translateY(500px)'}
                    }
                    className="fixed bottom-10 right-10 w-[50px] h-[50px] bg-a border-color-d border-2 rounded-lg p-2"
                    onClick={() => window.scrollTo(0,0)}
                >
                    <img src={arrowUp} alt="arrow-up" className="object-cover w-full"/>
                </motion.div>
            </div>
        </div>
    )
}

export default Header