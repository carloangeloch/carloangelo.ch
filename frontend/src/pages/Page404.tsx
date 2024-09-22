import { useContext, useEffect, useState } from "react"
import { AppContext } from "../context/AppContext"
import { getScreenHeight } from "../utils/getScreenHeight"
import { Link } from "react-router-dom"

const Page404 = () => {

    const appContext = useContext(AppContext)
    const [screenY, setScreenY] = useState<any | null>(null)
    useEffect(() => {
        appContext.setAppData({ currentPage: 'page404'})
        setScreenY(getScreenHeight())
    },[])

    return (
            <div className="w-full pt-36" style={{height: screenY-(screenY*0.1)}}>
                <div className="w-full h-[500px] flex justify-center">
                    <img src="https://media1.tenor.com/m/XQLVLptLIBEAAAAd/maes-b-lost-in-a-field.gif" alt="are you lost?" />
                </div>
                <div className="w-full flex flex-wrap justify-center">
                    <div className="w-full text-5xl text-center pt-20">
                        <strong>Hey! Are you lost?</strong>
                    </div>
                    <div className="w-full text-xl text-center pt-10 px-5">
                        <span>If you want to go to Carlo Angelo Hilaus' website, you can search for <Link to='/'><span className="text-blue-600">carloangelo.ch</span></Link> or jus click the button below.</span>
                    </div>
                    <Link to='/'>
                        <div className="bg-c text-xl hover:text-2xl p-3 hover:p-5 rounded-xl cursor-pointer mt-5 hover:bg-opacity-40 transition-all duration-200">Lead the way</div>
                    </Link>
                </div>
            </div>
    )
}

export default Page404