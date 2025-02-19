import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AppContext } from "../../context/AppContext";
import { getScreenWidth } from "../../utils/getScreenWidth";
import chLogo from '../../assets/ch-light.svg';
import close from '../../assets/close-icon.svg';
import burger from '../../assets/hamburger.svg';

const Header = () => {
    const appContext = useContext(AppContext)
    const [ showNav, setShowNav ] = useState(false)

    let screenWidth = getScreenWidth();

    useEffect(() => {
        if(screenWidth >= 1280){
            setShowNav(true)
        }
    },[]);
    return(
        <div className="w-full xl:w-auto flex flex-row xl:flex-col gap-y-5 font-title" id="header">
            <div id="logo-div" className="w-1/2 flex flex-col justify-center">
                <Link to='/'>
                    <img src={chLogo} alt="CH-Logo" className="w-[50px] xl:w-32" />
                </Link>
            </div>
            {
                screenWidth <= 500 ?
                    <div className="w-1/2">
                        <div className="w-full flex justify-end" onClick={() => setShowNav(!showNav)}>
                            <img src={burger} alt="menu-icon" className="w-10"/>
                        </div>
                        <motion.div
                            id="hidden-nav"
                            initial={{top:'-50%'}}
                            animate={showNav? {top:0} : {top:'-50%'}}
                            className="fixed bg-color-a2 left-0 w-full drop-shadow-md z-30">
                            <motion.div
                            initial={{opacity:0}}
                            animate={{opacity:1}}
                            className="w-full flex flex-wrap flex-col justify-center items-center gap-y-10 p-3 text-center"
                            >
                                <div className="w-full flex">
                                    <div className="w-1/2 flex flex-col justify-center">
                                        <Link to='/'>
                                            <img src={chLogo} alt="CH-Logo" className="w-[50px]" />
                                        </Link>
                                    </div>
                                    <div className="w-1/2 flex justify-end">
                                        <img src={close} alt="menu-icon" className="w-10" onClick={() => setShowNav(!showNav)}/>
                                    </div>
                                </div>
                                
                                <Link to='/about'>
                                    <motion.div
                                        initial='initial'
                                        whileHover='hovered'
                                        className="w-14"
                                    >
                                        <span style={appContext.appData.currentPage == 'about' ?  {color: '#FDE047', fontWeight: 'bold'} : {color: '#F6F8F5', fontWeight: 'normal'}}>
                                            About
                                        </span>
                                        <motion.div
                                            className="h-0.5"
                                            variants={
                                                {
                                                    initial: {
                                                        width: 0
                                                    },
                                                    hovered: {
                                                        width: '100%',
                                                        backgroundColor: appContext.appData.currentPage == 'about' ? '#FDE047' : '#F8E7E2'
                                                    }
                                                }
                                            }
                                        />
                                    </motion.div>
                                </Link>

                                <Link to='/career'>
                                    <motion.div
                                        initial='initial'
                                        whileHover='hovered'
                                        className="w-14"
                                    >
                                        <span style={appContext.appData.currentPage == 'career' ?  {color: '#FDE047', fontWeight: 'bold'} : {color: '#F6F8F5', fontWeight: 'normal'}}>
                                            Career
                                        </span>
                                        <motion.div
                                            className="h-0.5"
                                            variants={
                                                {
                                                    initial: {
                                                        width: 0
                                                    },
                                                    hovered: {
                                                        width: '100%',
                                                        backgroundColor:  appContext.appData.currentPage == 'career' ? '#FDE047' : '#F8E7E2'
                                                    }
                                                }
                                            }
                                        />
                                    </motion.div>
                                </Link>
                                
                                <Link to='/work'>
                                    <motion.div
                                        initial='initial'
                                        whileHover='hovered'
                                        className="w-14"
                                    >
                                        <span style={appContext.appData.currentPage == 'work' ?  {color: '#FDE047', fontWeight: 'bold'} : {color: '#F6F8F5', fontWeight: 'normal'}}>
                                            Work
                                        </span>
                                        <motion.div
                                            className="h-0.5"
                                            variants={
                                                {
                                                    initial: {
                                                        width: 0
                                                    },
                                                    hovered: {
                                                        width: '100%',
                                                        backgroundColor:  appContext.appData.currentPage == 'work' ? '#FDE047' : '#F8E7E2'
                                                    }
                                                }
                                            }
                                        />
                                    </motion.div>
                                </Link>
                                
                                <Link to='/contact'>
                                    <motion.div
                                        initial='initial'
                                        whileHover='hovered'
                                        className="w-14"
                                    >
                                        <span style={appContext.appData.currentPage == 'contact' ?  {color: '#FDE047', fontWeight: 'bold'} : {color: '#F6F8F5', fontWeight: 'normal'}}>
                                            Contact
                                        </span>
                                        <motion.div
                                            className="h-0.5"
                                            variants={
                                                {
                                                    initial: {
                                                        width: 0
                                                    },
                                                    hovered: {
                                                        width: '100%',
                                                        backgroundColor:  appContext.appData.currentPage == 'contact' ? '#FDE047' : '#F8E7E2'
                                                    }
                                                }
                                            }
                                        />
                                    </motion.div>
                                </Link>
                            </motion.div>
                        </motion.div> {/*hidden-nav*/}
                        <motion.div
                            initial={{opacity: 0, zIndex:-10}}
                            animate={showNav? {opacity: 1, zIndex:20} : {opacity: 0, zIndex:-10}}
                            className="fixed bg-color-a bg-opacity-80 w-full h-screen left-0 top-0"
                        />
                    </div>
                :
                    <div className="w-1/2 xl:w-auto pr-3 xl:pr-auto flex flex-row xl:flex-col gap-x-3 xl:gap-y-3 justify-end text-base xl:text-lg" id="nav-div">
                        <Link to='/about'>
                            <motion.div
                                initial='initial'
                                whileHover='hovered'
                                className="w-14"
                            >
                                <span style={appContext.appData.currentPage == 'about' ?  {color: '#FDE047', fontWeight: 'bold'} : {color: '#F6F8F5', fontWeight: 'normal'}}>
                                    About
                                </span>
                                <motion.div
                                    className="h-0.5"
                                    variants={
                                        {
                                            initial: {
                                                width: 0
                                            },
                                            hovered: {
                                                width: '100%',
                                                backgroundColor: appContext.appData.currentPage == 'about' ? '#FDE047' : '#F8E7E2'
                                            }
                                        }
                                    }
                                />
                            </motion.div>
                        </Link>

                        <Link to='/career'>
                            <motion.div
                                initial='initial'
                                whileHover='hovered'
                                className="w-14"
                            >
                                <span style={appContext.appData.currentPage == 'career' ?  {color: '#FDE047', fontWeight: 'bold'} : {color: '#F6F8F5', fontWeight: 'normal'}}>
                                    Career
                                </span>
                                <motion.div
                                    className="h-0.5"
                                    variants={
                                        {
                                            initial: {
                                                width: 0
                                            },
                                            hovered: {
                                                width: '100%',
                                                backgroundColor:  appContext.appData.currentPage == 'career' ? '#FDE047' : '#F8E7E2'
                                            }
                                        }
                                    }
                                />
                            </motion.div>
                        </Link>
                        
                        <Link to='/work'>
                            <motion.div
                                initial='initial'
                                whileHover='hovered'
                                className="w-14"
                            >
                                <span style={appContext.appData.currentPage == 'work' ?  {color: '#FDE047', fontWeight: 'bold'} : {color: '#F6F8F5', fontWeight: 'normal'}}>
                                    Work
                                </span>
                                <motion.div
                                    className="h-0.5"
                                    variants={
                                        {
                                            initial: {
                                                width: 0
                                            },
                                            hovered: {
                                                width: '100%',
                                                backgroundColor:  appContext.appData.currentPage == 'work' ? '#FDE047' : '#F8E7E2'
                                            }
                                        }
                                    }
                                />
                            </motion.div>
                        </Link>
                        
                        <Link to='/contact'>
                            <motion.div
                                initial='initial'
                                whileHover='hovered'
                                className="w-14"
                            >
                                <span style={appContext.appData.currentPage == 'contact' ?  {color: '#FDE047', fontWeight: 'bold'} : {color: '#F6F8F5', fontWeight: 'normal'}}>
                                    Contact
                                </span>
                                <motion.div
                                    className="h-0.5"
                                    variants={
                                        {
                                            initial: {
                                                width: 0
                                            },
                                            hovered: {
                                                width: '100%',
                                                backgroundColor:  appContext.appData.currentPage == 'contact' ? '#FDE047' : '#F8E7E2'
                                            }
                                        }
                                    }
                                />
                            </motion.div>
                        </Link>
                    </div>
            }
        </div>
    )
}


export default Header