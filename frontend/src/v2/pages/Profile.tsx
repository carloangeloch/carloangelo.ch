import { useContext, useEffect } from "react"
import { AppContext } from "../../context/AppContext"
import {motion} from 'framer-motion';
import  Footer from "../../v2/components/Footer"
import  Content from "../../v2/components/Content"

const Profile = () => {
    const appContext = useContext(AppContext)

    useEffect(() => appContext.setAppData({ currentPage: 'v2-profile'}) ,[])

    return (
        <div className="h-screen w-full flex justify-center items-center bg-color-a2">
            {/* Content */}
            <div className="w-full h-screen flex flex-wrap justify-center">
                <motion.div
                    initial={{height: '75%'}}
                    animate={appContext.appData.currentPage === 'v2-home' ? {height: '75%'} : {height: '90%'}}
                    className="w-full h-3/4 text-color-d2 flex justify-center items-center"
                >
                    <Content/>
                </motion.div>

                {/* Footer */}
                <motion.div
                    initial={{height: '25%'}}
                    animate={appContext.appData.currentPage === 'v2-home' ? {height: '25%'} : {height: '10%'}}
                    className="w-full color-d2 flex justify-center bg-color-a2 drop-shadow-[-3px_-3px_3px_rgba(0,0,0,0.2)] pt-5"
                >
                    <Footer/>
                </motion.div>
            </div>
        </div>
    )
}


export default Profile