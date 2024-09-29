import { useContext, useEffect } from "react"
import Contact from "../modules/landing/Contact"
import IDo from "../modules/landing/IDo"
import Intro from "../modules/landing/Intro"
import Works from "../modules/landing/Works"
import { AppContext } from "../context/AppContext"

const Landing = () => {

    const appContext = useContext(AppContext)

    useEffect(() => appContext.setAppData({ currentPage: 'landing'}) ,[])

    return (
        <div id="landing-top" className="w-full justify-center text-3xl text-color overflow-x-hidden">
            <Intro/> 
            <IDo/>
            <Works/>
            <Contact/>
        </div>
    )
}

export default Landing