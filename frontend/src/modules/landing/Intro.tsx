import pythonLogo from '../../assets/python.png';
import djangoLogo from '../../assets/django.png';
import aeLogo from '../../assets/ae.png';
import aiLogo from '../../assets/ai.png';
import psLogo from '../../assets/ps.png';
// import pwLogo from '../../assets/playwright.png';
// import drfLogo from '../../assets/drf.png';
import reactLogo from '../../assets/react.png';
import jsLogo from '../../assets/js.png';
import htmlLogo from '../../assets/html.png';
import cssLogo from '../../assets/css.png';
import figmaLogo from '../../assets/figma.png';
import wordpressLogo from '../../assets/wordpress.png';
import elementorLogo from '../../assets/elementor.png';
import bqLogo from '../../assets/bq.png';
import gcpLogo from '../../assets/gcp.png';
// import gceLogo from '../../assets/gce.png';
import cloudSqlLogo from '../../assets/cloud-sql.png';
import uipathLogo from '../../assets/uipath.png';
import lookerLogo from '../../assets/looker.png';
import unrealLogo from '../../assets/unreal.png';
import sppLogo from '../../assets/spp.png';
import blenderLogo from '../../assets/blender.png';
import {motion} from "framer-motion"

const Intro = () => {

    return (
        <div className="w-full h-screen flex flex-wrap xl:flex-nowrap overflow-hidden xl:overflow-visible">
            <div className='relative w-full h-1/3 xl:w-0 md:h-2/5 lg:h-1/2 xl:h-full bg-a'>
                <div className='absolute w-screen h-full lg:h-1/2 xl:h-full z-10 flex justify-center items-center'>
                    <div className="bg-a w-5/6 lg:w-4/6 h-4/6 md:h-2/5 p-5 flex flex-wrap justify-center items-center rounded-2xl">

                        <div className="text-2xl md:text-5xl lg:text-5xl xl:text-7xl 2xl:text-8xl mx-auto xl:mx-0 text-center w-full flex  flex-wrap justify-center items-center gap-y-5 lg:gap-y-10">  
                            <strong className='text-color-d drop-shadow-[5px_3px_5px_rgba(0,0,0,0.5)]'>
                                <span className='text-color-d hover:text-yellow-400 duration-200 ease-in-out'>Tech Innovator.</span><br/>
                                <span className='text-color-d hover:text-red-400 duration-200 ease-in-out'>Data-Driven Analyst.</span><br/>
                                <span className='text-color-d hover:text-purple-400 duration-200 ease-in-out'>Creative Designer.</span>
                            </strong>
                            <div className="text-sm md:text-lg xl:text-xl md:w-2/3 mx-auto xl:mx-0 text-color-d text-center  w-full">
                                <span className='drop-shadow-[5px_3px_5px_rgba(0,0,0,0.5)]'>Whether I’m building applications, crafting marketing designs, or brainstorming data-driven ideas, I pour my passion into everything I do</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="top-image" className="w-full h-2/3 md:h-3/5 xl:h-full relative">
                <div id="icon-loop-1" className="absolute w-[220%] h-1/4 overflow-x-hidden -right-10 z-[5] top-[5%]">
                    <motion.div
                        animate={{
                            right: ['0%', '100%']
                        }}
                        transition={{ease:"linear",duration:20, repeat:Infinity}}
                        className="absolute w-full lg:w-1/2 h-1/2 top-[25%]"
                    >
                        <div className='w-full h-full flex'>
                            <div className="w-full h-full flex-none">
                                <div className=" flex w-full h-full">
                                    <div className="flex items-center w-full relative">
                                        <img src={pythonLogo} alt="python-logo" className='h-[130%] hover:h-[180%] transition-all duration-200 absolute' />
                                    </div>
                                    <div className="flex items-center w-full">
                                        <img src={djangoLogo} alt="django-logo" className='h-full hover:h-[150%] transition-all duration-200 absolute' />
                                    </div>
                                    <div className="flex items-center w-full">
                                        <img src={blenderLogo} alt="blender-logo" className='h-full hover:h-[150%] transition-all duration-200 absolute' />
                                    </div>
                                    <div className="flex items-center w-full">
                                    <img src={sppLogo} alt="spp-logo" className='h-full hover:h-[150%] transition-all duration-200 absolute' />
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

                            
                            <div className="w-full h-full flex-none hidden lg:flex">
                                <div className=" flex w-full h-full">
                                    <div className="flex items-center w-full relative">
                                        <img src={pythonLogo} alt="python-logo" className='h-[130%] hover:h-[180%] transition-all duration-200 absolute' />
                                    </div>
                                    <div className="flex items-center w-full">
                                        <img src={djangoLogo} alt="django-logo" className='h-full hover:h-[150%] transition-all duration-200 absolute' />
                                    </div>
                                    <div className="flex items-center w-full">
                                        <img src={blenderLogo} alt="blender-logo" className='h-full hover:h-[150%] transition-all duration-200 absolute' />
                                    </div>
                                    <div className="flex items-center w-full">
                                    <img src={sppLogo} alt="spp-logo" className='h-full hover:h-[150%] transition-all duration-200 absolute' />
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
                                <div className=" flex w-full h-full">
                                    <div className="flex items-center w-full relative">
                                        <img src={pythonLogo} alt="python-logo" className='h-[130%] hover:h-[180%] transition-all duration-200 absolute' />
                                    </div>
                                    <div className="flex items-center w-full">
                                        <img src={djangoLogo} alt="django-logo" className='h-full hover:h-[150%] transition-all duration-200 absolute' />
                                    </div>
                                    <div className="flex items-center w-full">
                                        <img src={blenderLogo} alt="blender-logo" className='h-full hover:h-[150%] transition-all duration-200 absolute' />
                                    </div>
                                    <div className="flex items-center w-full">
                                    <img src={sppLogo} alt="spp-logo" className='h-full hover:h-[150%] transition-all duration-200 absolute' />
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
                        </div>
                    </motion.div>
                </div>

                <div id="icon-loop-2" className="absolute w-[220%] h-1/4 overflow-x-hidden -right-10 z-[4] top-[38%] lg:top-[33%] xl:top-[38%]">
                    <motion.div
                        animate={{
                            right: ['100%', '0%']
                        }}
                        transition={{ease:"linear",duration:20, repeat:Infinity}}
                        className="absolute w-full md:w-1/2 h-1/2 top-[25%]"
                    >
                        <div className='w-full h-full flex'>
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
                            
                            <div className="w-full h-full flex-none hidden lg:flex">
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
                        </div>
                    </motion.div>
                </div>

                <div id="icon-loop-1" className="absolute w-[220%] h-1/4 overflow-x-hidden -right-10 z-[3] top-[66%] lg:top-[55%] xl:top-[66%]">
                    <motion.div
                        animate={{
                            right: ['0%', '100%']
                        }}
                        transition={{ease:"linear",duration:20, repeat:Infinity}}
                        className="absolute w-full lg:w-1/2 h-1/2 top-[25%]"
                    >
                        <div className='w-full h-full flex'>

                            <div className="w-full  h-full flex-none">
                                <div className="flex w-full h-full">
                                    <div className="flex items-center w-full relative">
                                        <img src={gcpLogo} alt="gcp-logo" className='h-[150%] hover:h-[200%] transition-all duration-200 absolute' />
                                    </div>
                                    <div className="flex items-center w-full">
                                    <img src={unrealLogo} alt="unreal-logo" className='h-full hover:h-[150%] transition-all duration-200 absolute' />
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

                            <div className="w-full  h-full flex-none hidden lg:flex">
                                <div className="flex w-full h-full">
                                    <div className="flex items-center w-full relative">
                                        <img src={gcpLogo} alt="gcp-logo" className='h-[150%] hover:h-[200%] transition-all duration-200 absolute' />
                                    </div>
                                    <div className="flex items-center w-full">
                                    <img src={unrealLogo} alt="unreal-logo" className='h-full hover:h-[150%] transition-all duration-200 absolute' />
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
                                        <img src={unrealLogo} alt="unreal-logo" className='h-full hover:h-[150%] transition-all duration-200 absolute' />
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
                        </div>
                    </motion.div>
                </div>
                
            </div>
        </div>
    )
}

export default Intro