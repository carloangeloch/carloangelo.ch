import {motion} from 'framer-motion'
import Container from '../../components/Container'
import { AppContext } from '../../context/AppContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

    const appContext = useContext(AppContext)

  return (
    <>
        <Container>
            <div id='nav' className="w-1/2 m-auto flex justify-center text-center text-color-d2">
                {appContext.appData.currentPage !== 'v2-home' && 
                        <motion.div
                            initial='initial'
                            whileHover='hovered'
                            id='item'
                            className="w-1/4 p-3"
                        >
                            <Link to="/test/v2/home">
                                <div className="w-full flex flex-wrap justify-center">
                                    <div className="w-full">Home</div>
                                    <div className="h-1 w-full flex justify-center p-2">
                                        <motion.div
                                            className="h-1 bg-color-d2"
                                            variants={{
                                                initial: {width: 0, display: 'none'},
                                                hovered: {width: '64px', display: 'block', transition: {duration: 0.3}}
                                            }}
                                        />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                }
                
                
                {appContext.appData.currentPage !== 'v2-work' && 
                    <motion.div
                        initial='initial'
                        whileHover='hovered'
                        id='item'
                        className="w-1/4 p-3"
                    >
                        <Link to="/test/v2/work">
                            <div className="w-full flex flex-wrap justify-center">
                                <div className="w-full">Work</div>
                                <div className="h-1 w-full flex justify-center p-2">
                                    <motion.div
                                        className="h-1 bg-color-d2"
                                        variants={{
                                            initial: {width: 0, display: 'none'},
                                            hovered: {width: '64px', display: 'block', transition: {duration: 0.3}}
                                        }}
                                    />
                                </div>
                            </div>
                        </Link>
                    </motion.div>
        }

                <motion.div
                    initial='initial'
                    whileHover='hovered'
                    id='item'
                    className="w-1/4 p-3"
                >
                    <Link to="/test/v2/profile">
                        <div className="w-full flex flex-wrap justify-center">
                            <div className="w-full">Profile</div>
                            <div className="h-1 w-full flex justify-center p-2">
                                    <motion.div
                                        className="h-1 bg-color-d2"
                                        variants={{
                                            initial: {width: 0, display: 'none'},
                                            hovered: {width: '64px', display: 'block', transition: {duration: 0.3}}
                                        }}
                                    />
                                </div>
                            </div>
                    </Link>
                </motion.div>

                <motion.div
                    initial='initial'
                    whileHover='hovered'
                    id='item'
                    className="w-1/4 p-3"
                >
                    <Link to="/test/v2/jobs">
                        <div className="w-full flex flex-wrap justify-center">
                            <div className="w-full">Jobs</div>
                            <div className="h-1 w-full flex justify-center p-2">
                                <motion.div
                                    className="h-1 bg-color-d2"
                                    variants={{
                                        initial: {width: 0, display: 'none'},
                                        hovered: {width: '64px', display: 'block', transition: {duration: 0.3}}
                                    }}
                                />
                            </div>
                        </div>
                    </Link>
                </motion.div>

                <motion.div
                    initial='initial'
                    whileHover='hovered'
                    id='item'
                    className="w-1/4 p-3"
                >
                    <Link to="/test/v2/contact">
                    <div className="w-full flex flex-wrap justify-center">
                            <div className="w-full">Connect</div>
                            <div className="h-1 w-full flex justify-center p-2">
                                <motion.div
                                    className="h-1 bg-color-d2"
                                    variants={{
                                        initial: {width: 0, display: 'none'},
                                        hovered: {width: '64px', display: 'block', transition: {duration: 0.3}}
                                    }}
                                />
                            </div>
                        </div>
                    </Link>
                </motion.div>
            </div>
        </Container>
    </>
  )
}

export default Footer