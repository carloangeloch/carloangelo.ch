import { FC, useRef } from 'react'
import Container from '../../components/Container'
import SectionTitle from '../../components/SectionTitle'
import {motion, useInView} from 'framer-motion'

import pythonLogo from '../../assets/python.png';
import djangoLogo from '../../assets/django.png';
import seleniumLogo from '../../assets/selenium.png';
import aiLogo from '../../assets/ai.png';
import psLogo from '../../assets/ps.png';
import pwLogo from '../../assets/playwright.png';
import reactLogo from '../../assets/react.png';
import figmaLogo from '../../assets/figma.png';
import wordpressLogo from '../../assets/wordpress.png';
import bqLogo from '../../assets/bq.png';
import gcpLogo from '../../assets/gcp.png';
import gceLogo from '../../assets/gce.png';
import cloudSqlLogo from '../../assets/cloud-sql.png';
import uipathLogo from '../../assets/uipath.png';
import lookerLogo from '../../assets/looker.png';
import { getScreenWidth } from '../../utils/getScreenWidth';

interface SkillsModuleProps {
    tag: string,
    title: string;
    description: string;
    item1? :any;
    item2? :any;
    item3? :any;
}
const SkillsModule : FC<SkillsModuleProps> = ({tag, title, description, item1, item2, item3}) => {
    const refer = useRef(null);
    const isInView = useInView(refer, {once: true});
    const screenWidth = getScreenWidth()

    return(
        <div ref={refer}
            id={tag}
            className='mb-10 flex flex-wrap lg:flex-nowrap gap-y-3 lg:gap-0'
            style={{
                transform: isInView ? "none" : "translatey(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
            }}
        >
            <div className='w-full lg:w-2/3 h-auto lg:h-[300px] relative'>
                <div className="relative lg:absolute lg:top-1/4 xl:top-1/3 left-0 lg:left-4 text-center lg:text-left">
                    <strong className='text-lg md:text-xl lg:text-2xl text-color-a'>{title}</strong><br/>
                    <span className='text-base md:text-lg  text-color-a opacity-80'>{description}</span>
                </div>
            </div>
            {screenWidth <= 900 ?
                <div className='w-full flex justify-center gap-x-2'>
                    <div>
                        <img src={item1} alt={item1}className='h-[80px]'/>
                    </div>
                    <div>
                        <img src={item2} alt={item2}className='h-[80px]'/>
                    </div>
                    <div>
                        <img src={item3} alt={item3}className='h-[80px]'/>
                    </div>
                </div> 
                :
                <motion.div
                    initial="initial"
                    whileHover="hovered"
                    className='w-1/3 h-[300px] relative'>
                        <motion.img
                            src={item1}
                            alt={item1}
                            variants={{
                                    initial: {left: "20%", top: "10%", rotate: "-6deg"} ,
                                    hovered:{left: "10%", top: "5%", rotate: "-12deg"}
                                    }}
                        className='lg:h-[120px] xl:h-[150px] absolute'/>
                        <motion.img
                            src={item2}
                            alt={item2}
                            variants={{
                                initial: {right: "20%", top: "20%", rotate: "6deg"} ,
                                hovered:{right: "10%", top: "10%", rotate: "15deg"}
                            }}
                        className='lg:h-[120px] xl:h-[150px] absolute'/>
                        <motion.img
                            src={item3}
                            alt={item3}
                            variants={{
                                initial: {left: "25%", bottom: "10%", rotate: "-10deg"} ,
                                hovered:{left: "15%", bottom: "5%", rotate: "-20deg"}
                            }}
                        className='lg:h-[120px] xl:h-[150px] absolute'/>
                </motion.div>
            }
        </div>  
    )
}

const MySkills = () => {
  return (
    <div className='pt-8 md:p-10 lg:p-12 xl:pt-16'>
        <SectionTitle title="Skillsets"/>
        <Container>
            <div className='w-full xl::w-3/4 mx-auto'>
                <SkillsModule
                    tag='data'
                    title="Data Intelligence & Analysis"
                    description='Data collection, ETL processes, data transformation, and visualization using tools like Python, Google Bigquery and Google Looker.'
                    item1={pythonLogo}
                    item2={bqLogo}
                    item3={lookerLogo}
                />
                <SkillsModule
                    tag='web-dev'
                    title="Web Development"
                    description='I specialize in frontend technologies like React.js, JavaScript, Tailwind CSS, HTML5, and CSS3, while for backend development, I work with Python, Django, and REST APIs. Additionally, I have nearly 2 years of experience building and customizing WordPress websites using Elementor.'
                    item1={reactLogo}
                    item2={djangoLogo}
                    item3={wordpressLogo}
                />
                <SkillsModule
                    tag='cloud'
                    title="Cloud Solutions"
                    description='Creating data storage in Google BigQuery, building ETL pipelines using Google Cloud Storage and Dataflow, creating visualizations with Google Looker, and deploying full-stack web applications on Google Cloud.'
                    item1={gcpLogo}
                    item2={gceLogo}
                    item3={cloudSqlLogo}
                />
                <SkillsModule
                    tag='graphics'
                    title="Graphic and Marketing Design"
                    description='Specializing in marketing banners, product images, and branding for online marketplaces using Adobe Photoshop and Illustrator. I also create user interface and experience designs with Figma.'
                    item1={psLogo}
                    item2={aiLogo}
                    item3={figmaLogo}
                />
                <SkillsModule
                    tag='rpa'
                    title="Process Automation"
                    description='Streamlining workflows through automation for data collection and marketplace management on various online marketplace platforms in South East Asia. I also create automation solutions using tools like Playwright, Selenium, and UiPath to optimize processes and improve efficiency.'
                    item1={uipathLogo}
                    item2={seleniumLogo}
                    item3={pwLogo}
                />
            </div>
        </Container>
    </div>
  )
}

export default MySkills