import SectionTitle from '../../components/SectionTitle'
import Container from '../../components/Container'
import {motion} from 'framer-motion'

const  WhoAmI = () => {
    return (
        <div id="me" className='py-14 px-2 md:px-6 lg:px-9 xl:px-14 bg-a'>
            <SectionTitle title="Who Am I?" textColor='text-color-d'/>
            <Container>
                <div id="my-info" className='flex flex-wrap md:flex-nowrap w-full gap-2 md:gap-5 lg:gap-8 mb-4 md:mb-7 lg:mb-14'>
                    <motion.div
                        initial={{opacity: 0, transform: 'scale(0.5'}}
                        animate={{opacity: 1, transform: 'scale(1)'}}
                        transition={{duration: 0.5, ease:'easeInOut',delay:0.2}}
                        className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 shadow-lg bg-d rounded-lg'
                    >
                        <div className='h-[400px] bg-my-image bg-left-top bg-cover'></div>
                    </motion.div>
                    <div className='w-full md:w-1/2 lg:w-2/3 xl:w-3/4 pt-2 md:pt-6 lg:pt-12 xl:pt-20'>
                        <motion.div
                            initial={{opacity: 0, transform: 'scale(0.5'}}
                            animate={{opacity: 1, transform: 'scale(1)'}}
                            transition={{duration: 0.5, ease:'easeInOut',delay:0.3}}
                            className='text-color-d text-center md:text-left text-lg lg:text-xl xl:text-2xl mb-3'
                        >
                            <strong>Hi! I am Carlo Angelo Hilaus</strong>
                        </motion.div>
                        <motion.div
                            initial={{opacity: 0, transform: 'scale(0.5'}}
                            animate={{opacity: 1, transform: 'scale(1)'}}
                            transition={{duration: 0.5, ease:'easeInOut',delay:0.4}}
                            className='text-color-d text-base lg:text-lg text-center md:text-left'
                        >
                            <span className="opacity-80">
                                — a passionate tech enthusiast, data strategist, and creative designer with a diverse background in data intelligence, web development, and graphic design. I love turning ideas into solutions that make a real impact, whether it’s through code, data, or design.
                                I’m driven by passion in everything I do, whether it’s building applications, designing marketing visuals, or extracting insights from data. I approach every project with dedication, creativity, and a love for solving problems.
                                Outside of work, I enjoy staying up-to-date with the latest trends in technology and design, always looking for new ways to innovate and enhance my skills.
                            </span>
                        </motion.div>
                    </div>
                </div>              
            </Container>
        </div>
    )
}

export default WhoAmI