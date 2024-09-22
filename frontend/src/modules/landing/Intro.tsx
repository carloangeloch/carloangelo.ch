import pythonLogo from '../../assets/python.png';
import djangoLogo from '../../assets/django.png';
import aeLogo from '../../assets/ae.png';
import aiLogo from '../../assets/ai.png';
import psLogo from '../../assets/ps.png';
import pwLogo from '../../assets/playwright.png';
import drfLogo from '../../assets/drf.png';
import reactLogo from '../../assets/react.png';
import jsLogo from '../../assets/js.png';
import htmlLogo from '../../assets/html.png';
import cssLogo from '../../assets/css.png';
import figmaLogo from '../../assets/figma.png';
import wordpressLogo from '../../assets/wordpress.png';
import elementorLogo from '../../assets/elementor.png';
import bqLogo from '../../assets/bq.png';
import gcpLogo from '../../assets/gcp.png';
import gceLogo from '../../assets/gce.png';
import cloudSqlLogo from '../../assets/cloud-sql.png';
import uipathLogo from '../../assets/uipath.png';
import lookerLogo from '../../assets/looker.png';
import {motion} from "framer-motion"

const Intro = () => {
  return (
    <div className="w-full h-screen flex flex-wrap xl:flex-nowrap overflow-hidden xl:overflow-visible">
        <div id="title" className="w-full xl:w-1/2 h-1/2 xl:h-full relative ">
            <div className="absolute w-[100%] h-full z-[6]">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-[#223843] translate-x-[2.5rem] translate-y-[3.3rem] rotate-[25deg]  md:translate-x-[1.8rem] md:translate-y-[0.8rem] md:rotate-[40deg] xl:translate-x-[1.5rem] xl:translate-y-[1.8rem] xl:rotate-0"
                        d="M55.2,-68.3C68.5,-54.6,74.2,-34.3,72.8,-16.6C71.4,1.1,62.9,16.2,52.5,26.4C42,36.6,29.6,41.9,16.5,47.6C3.4,53.4,-10.3,59.7,-25.2,58.9C-40.2,58,-56.3,49.9,-66.7,36.4C-77.1,22.8,-81.7,3.8,-76.5,-11.3C-71.3,-26.4,-56.1,-37.7,-41.7,-51.2C-27.3,-64.8,-13.7,-80.7,3.6,-85C20.9,-89.4,41.9,-82.1,55.2,-68.3Z"
                        />
                </svg>
            </div>
            <div id="title-div" className="absolute z-[7] pt-24 xl:pt-48 pl-3 xl:pl-10  w-full text-white text-center xl:text-left drop-shadow-lg">
                <div className="text-4xl md:text-6xl xl:text-8xl">
                    <strong>
                        Tech Innovator.<br/>
                        Data-Driven Analyst.<br/>
                        Creative Designer.
                    </strong>
                </div>
                <div className="text-lg xl:text-xl w-full md:w-2/3 mx-auto xl:mx-0 mt-10 xl:mt-24">
                    <span>Whether I’m building applications, crafting marketing designs, or brainstorming data-driven ideas, I pour my passion into everything I do</span>
                </div>
            </div>
        </div>
        
        <div id="top-image" className="w-full xl:w-1/2 h-1/2 xl:h-full relative">
            <div id="icon-loop-1" className="absolute w-[220%] h-[5rem] md:h-[12rem] xl:h-[20rem] overflow-x-hidden -right-10 z-[5] rotate-3">
                <motion.div
                    animate={{
                        right: ['0%', '100%']
                    }}
                    transition={{ease:"linear",duration:14, repeat:Infinity}}
                    className="absolute w-full h-[4rem] md:h-[5rem] xl:h-[10rem] top-3 xl:top-[5rem] flex"
                >
                    <div className="w-full h-full flex-none">
                        <div className=" flex w-full h-full">
                            <div className="flex items-center w-full relative">
                                <img src={pythonLogo} alt="python-logo" className='h-[130%] hover:h-[180%] transition-all duration-200 absolute' />
                            </div>
                            <div className="flex items-center w-full">
                                <img src={djangoLogo} alt="django-logo" className='h-full hover:h-[150%] transition-all duration-200 absolute' />
                            </div>
                            <div className="flex items-center w-full">
                                <img src={drfLogo} alt="drf-logo" className='h-full hover:h-[150%] transition-all duration-200 absolute' />
                            </div>
                            <div className="flex items-center w-full">
                                <img src={pwLogo} alt="playwright-logo" className='h-full hover:h-[150%] transition-all duration-200 absolute' />
                            </div>
                            <div className="flex items-center w-full">
                                <img src={psLogo} alt="ps-logo"  className='h-[120%] hover:h-[170%] transition-all duration-200 absolute' />
                            </div>
                            <div className="flex items-center w-full">
                                <img src={aiLogo} alt="ai-logo" className='h-full hover:h-[150%] transition-all duration-200 absolute' />
                            </div>
                            <div className="flex items-center w-full">
                                <img src={aeLogo} alt="ae-logo" className='h-full hover:h-[150%] transition-all duration-200 absolute' />
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full flex-none">
                        <div className="flex w-full h-full">
                            <div className="flex items-center w-full relative">
                                <img src={pythonLogo} alt="python-logo" className='h-[130%] hover:h-[180%] transition-all duration-200 absolute' />
                            </div>
                            <div className="flex items-center w-full">
                                <img src={djangoLogo} alt="django-logo" className='h-full hover:h-[150%] transition-all duration-200 absolute' />
                            </div>
                            <div className="flex items-center w-full">
                                <img src={drfLogo} alt="drf-logo" className='h-full hover:h-[150%] transition-all duration-200 absolute' />
                            </div>
                            <div className="flex items-center w-full">
                                <img src={pwLogo} alt="playwright-logo" className='h-full hover:h-[150%] transition-all duration-200 absolute' />
                            </div>
                            <div className="flex items-center w-full">
                                <img src={psLogo} alt="ps-logo"  className='h-[120%] hover:h-[170%] transition-all duration-200 absolute' />
                            </div>
                            <div className="flex items-center w-full">
                                <img src={aiLogo} alt="ai-logo" className='h-full hover:h-[150%] transition-all duration-200 absolute' />
                            </div>
                            <div className="flex items-center w-full">
                                <img src={aeLogo} alt="ae-logo" className='h-full hover:h-[150%] transition-all duration-200 absolute' />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            
            <div id="icon-loop-2" className="absolute w-[220%] h-[50rem] overflow-x-hidden -right-10 z-[4] -rotate-3">
                <motion.div
                    animate={{
                        right: ['100%', '0%']
                    }}
                    transition={{ease:"linear",duration:18, repeat:Infinity}}
                    className="absolute w-full h-[4rem] md:h-[5rem] xl:h-[10rem] top-[11rem] md:top-[14rem] xl:top-[33rem] flex"
                >
                    <div className="w-full h-full flex-none">
                        <div className="flex w-full h-full">
                            <div className="flex items-center w-full relative">
                                <img src={reactLogo} alt="react-logo" className='h-[150%] hover:h-[200%] transition-all duration-200 absolute' />
                            </div>
                            <div className="flex items-center w-full">
                                <img src={jsLogo} alt="js-logo" className='h-full hover:h-[150%] transition-all duration-200 absolute' />
                            </div>
                            <div className="flex items-center w-full">
                                <img src={cssLogo} alt="css-logo" className='h-full hover:h-[150%] transition-all duration-200 absolute' />
                            </div>
                            <div className="flex items-center w-full">
                                <img src={htmlLogo} alt="html-logo" className='h-full hover:h-[150%] transition-all duration-200 absolute' />
                            </div>
                            <div className="flex items-center w-full">
                                <img src={figmaLogo} alt="figma-logo" className='h-[120%] hover:h-[180%] transition-all duration-200 absolute' />
                            </div>
                            <div className="flex items-center w-full">
                                <img src={wordpressLogo} alt="wordpress-logo" className='h-full hover:h-[150%] transition-all duration-200 absolute' />
                            </div>
                            <div className="flex items-center w-full">
                                <img src={elementorLogo} alt="elementor-logo" className='h-full hover:h-[150%] transition-all duration-200 absolute' />
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full flex-none">
                        <div className=" flex w-full h-full">
                            <div className="flex items-center w-full relative">
                                <img src={reactLogo} alt="react-logo" className='h-[150%] hover:h-[200%] transition-all duration-200 absolute' />
                            </div>
                            <div className="flex items-center w-full">
                                <img src={jsLogo} alt="js-logo" className='h-full hover:h-[150%] transition-all duration-200 absolute' />
                            </div>
                            <div className="flex items-center w-full">
                                <img src={cssLogo} alt="css-logo" className='h-full hover:h-[150%] transition-all duration-200 absolute' />
                            </div>
                            <div className="flex items-center w-full">
                                <img src={htmlLogo} alt="html-logo" className='h-full hover:h-[150%] transition-all duration-200 absolute' />
                            </div>
                            <div className="flex items-center w-full">
                                <img src={figmaLogo} alt="figma-logo"  className='h-[120%] hover:h-[180%] transition-all duration-200 absolute' />
                            </div>
                            <div className="flex items-center w-full">
                                <img src={wordpressLogo} alt="wordpress-logo" className='h-full hover:h-[150%] transition-all duration-200 absolute' />
                            </div>
                            <div className="flex items-center w-full">
                                <img src={elementorLogo} alt="elementor-logo" className='h-full hover:h-[150%] transition-all duration-200 absolute' />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            
            <div id="icon-loop-3" className="absolute w-[220%] h-full overflow-x-hidden -right-10 z-[3] rotate-3">
                <motion.div
                    animate={{
                        right: ['0%', '100%']
                    }}
                    transition={{ease:"linear",duration:16, repeat:Infinity}}
                    className="absolute w-full h-[4rem] md:h-[5rem] xl:h-[10rem] top-[19rem] md:top-[23rem] xl:top-[55rem] flex"
                >
                    <div className="w-full  h-full flex-none">
                        <div className="flex w-full h-full">
                            <div className="flex items-center w-full relative">
                                <img src={gcpLogo} alt="gcp-logo" className='h-[150%] hover:h-[200%] transition-all duration-200 absolute' />
                            </div>
                            <div className="flex items-center w-full">
                                <img src={gceLogo} alt="gce-logo" className='h-full hover:h-[150%] transition-all duration-200 absolute' />
                            </div>
                            <div className="flex items-center w-full relative">
                                <img src={cloudSqlLogo} alt="cloud-sql-logo" className='h-full hover:h-[150%] transition-all duration-200 absolute' />
                            </div>
                            <div className="flex items-center w-full">
                                <img src={lookerLogo} alt="looker-logo" className='h-[130%] hover:h-[180%] transition-all duration-200 absolute' />
                            </div>
                            <div className="flex items-center w-full">
                                <img src={bqLogo} alt="bq-logo" className='h-full hover:h-[150%] transition-all duration-200 absolute' />
                            </div>
                            <div className="flex items-center w-full">
                                <img src={uipathLogo} alt="uipath-logo" className='h-full hover:h-[150%] transition-all duration-200 absolute' />
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full flex-none">
                        <div className="flex w-full h-full">
                            <div className="flex items-center w-full relative">
                                <img src={gcpLogo} alt="gcp-logo" className='h-[150%] hover:h-[200%] transition-all duration-200 absolute' />
                            </div>
                            <div className="flex items-center w-full">
                                <img src={gceLogo} alt="gce-logo" className='h-full hover:h-[150%] transition-all duration-200 absolute' />
                            </div>
                            <div className="flex items-center w-full relative">
                                <img src={cloudSqlLogo} alt="cloud-sql-logo" className='h-full hover:h-[150%] transition-all duration-200 absolute' />
                            </div>
                            <div className="flex items-center w-full">
                                <img src={lookerLogo} alt="looker-logo" className='h-[130%] hover:h-[180%] transition-all duration-200 absolute' />
                            </div>
                            <div className="flex items-center w-full">
                                <img src={bqLogo} alt="bq-logo" className='h-full hover:h-[150%] transition-all duration-200 absolute' />
                            </div>
                            <div className="flex items-center w-full">
                                <img src={uipathLogo} alt="uipath-logo" className='h-full hover:h-[150%] transition-all duration-200 absolute' />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Intro