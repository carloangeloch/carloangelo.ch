import Container from "../../components/Container"
import techImage from "../../assets/tech.png"
import dataImage from "../../assets/data.png"
import graphicsImage from "../../assets/graphics.png"
import SectionTitle from "../../components/SectionTitle"
import { useRef } from "react"
import { useInView, motion } from "framer-motion"
import { getDeviceInfo } from "../../utils/getDeviceInfo"

const IDo = () => {
    const deviceType = getDeviceInfo()
    const refer = useRef(null);
    const isInView = useInView(refer, {once: true})

    return (
        <div>
            <Container>
                <SectionTitle title="What I Do" textColor="text-color-a" dividerColor="bg-c"/>
                <div id="tech" className="w-full flex flex-wrap mb-10 md:mb-5 xl:mb-10 px-3">
                    <motion.div ref={refer}
                        initial={{ transform: 'translateX(-100px)', opacity: 0}}
                        animate = {
                            isInView?
                                {  transform: 'none', opacity: 1}
                            :
                                { transform: 'translateX(-100px)', opacity: 0}
                        }
                        transition={{ duration: 0.5, ease:"easeInOut", delay: 0.2 }}
                        className="w-full md:w-1/3 xl:w-1/4 flex flex-col items-center justify-center"
                    >
                        <img src={techImage} alt="tech-image" className="h-[200px] md:h-auto mx-auto" />
                    </motion.div>
                    <motion.div 
                        initial={{ transform: 'translateX(100px)', opacity: 0}}
                        animate = {
                            isInView?
                                {  transform: 'none', opacity: 1}
                            :
                                { transform: 'translateX(100px)', opacity: 0}
                        }
                        transition={{ duration: 0.5, ease:"easeInOut", delay: 0.2 }}
                        className="w-full md:w-2/3 xl:w-3/4 p-5 text-center md:text-left flex flex-col items-center justify-center"
                    >
                        <div>
                            <strong className="text-color-a text-lg md:text-xl xl:text-2xl">
                                Web Development                                                            
                            </strong>
                        </div>
                        <div className="text-color-a text-base xl:text-lg opacity-80 pt-2">
                            For 2 years, I’ve been building dynamic, user-friendly applications. On the frontend, I use React.js, JavaScript, and Tailwind CSS to create seamless interfaces, and for the backend, I work with Python and Django to develop scalable and efficient solutions. I also have nearly 2 years of experience building WordPress websites using Elementor, crafting customizable websites that are visually appealing and easy to manage.
                        </div>
                    </motion.div>
                </div>
                <div id="data" className="w-full flex flex-wrap flex-row-reverse mb-10 md:mb-5 xl:mb-10 px-3">
                    <motion.div
                        initial={{ transform: deviceType == 'pc' ? 'translateX(100px)' : 'translateX(-100px)', opacity: 0}}
                        animate = {
                            isInView?
                                {  transform: 'none', opacity: 1}
                            :
                                { transform: deviceType == 'pc' ? 'translateX(-100px)' : 'translateX(100px)', opacity: 0}
                        }
                        transition={{ duration: 0.5, ease:"easeInOut", delay: 0.2 }}
                        className="w-full md:w-1/3 xl:w-1/4 flex flex-col items-center justify-center"
                    >
                        <img src={dataImage} alt="data-image" className="h-[200px] md:h-auto mx-auto" />
                    </motion.div>
                    <motion.div
                        initial={{ transform: deviceType == 'pc' ? 'translateX(-100px)' : 'translateX(100px)', opacity: 0}}
                        animate = {
                            isInView?
                                {  transform: 'none', opacity: 1}
                            :
                                { transform: deviceType == 'pc' ? 'translateX(100px)' : 'translateX(-100px)', opacity: 0}
                        }
                        transition={{ duration: 0.5, ease:"easeInOut", delay: 0.2 }}
                        className="w-full md:w-2/3 xl:w-3/4 p-5 text-center md:text-left  flex flex-col items-center justify-center"
                    >
                        <div>
                            <strong className="text-color-a  text-lg md:text-xl xl:text-2xl">
                            Data Intelligence & Analytics
                            </strong>
                        </div>
                        <div className="text-color-a text-base xl:text-lg opacity-80">
                            With over 4 years of experience as a Data Intelligence Manager, I specialize in collecting, transforming, and analyzing data from top online marketplaces like Lazada, Shopee, and Amazon. I help businesses turn raw data into actionable insights, enabling smarter decisions that boost performance and growth.
                        </div>
                    </motion.div>
                </div>
                <div id="graphics" className="w-full flex flex-wrap mb-10 md:mb-5 xl:mb-10 px-3">
                    <motion.div
                        initial={{ transform: 'translateX(-100px)', opacity: 0}}
                        animate = {
                            isInView?
                                {  transform: 'none', opacity: 1}
                            :
                                { transform: 'translateX(-100px)', opacity: 0}
                        }
                        transition={{ duration: 0.5, ease:"easeInOut", delay: 0.2 }}
                        className="w-full md:w-1/3 xl:w-1/4  flex flex-col items-center justify-center"
                    >
                        <img src={graphicsImage} alt="graphics-image" className="h-[200px] md:h-auto mx-auto"  />
                    </motion.div>
                    <motion.div
                        initial={{ transform: 'translateX(100px)', opacity: 0}}
                        animate = {
                            isInView?
                                {  transform: 'none', opacity: 1}
                            :
                                { transform: 'translateX(100px)', opacity: 0}
                        }
                        transition={{ duration: 0.5, ease:"easeInOut", delay: 0.2 }}
                        className="w-full md:w-2/3 xl:w-3/4 p-5 text-center md:text-left  flex flex-col items-center justify-center"
                    >
                        <div>
                            <strong className="text-color-a  text-lg md:text-xl xl:text-2xl ">
                            Graphic & Marketing Design​
                            </strong>
                        </div>
                        <div className="text-color-a text-base xl:text-lg opacity-80">
                            My creative side shines through in my graphic design work. I create compelling marketing visuals and product designs for online marketplaces like Lazada and Shopee, helping brands connect with their audiences and increase visibility. Whether it’s marketing banners or product images, I focus on designs that drive engagement and conversion.
                        </div>
                    </motion.div>
                </div>
            </Container>
        </div>
    )
}

export default IDo