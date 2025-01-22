import { AppContext } from "../../context/AppContext"
import { useContext } from "react"
import HomeContent from "./HomeContent"
import WorkContent from "../modules/Work/WorkContent"
import JobsContent from "../modules/Jobs/JobsContent"
import ProfileContent from "../modules/Profile/ProfileContent"
import ContactContent from "../modules/Contact/ContactContent"

const Content = () => {

    const appContext = useContext(AppContext)

    if(appContext.appData.currentPage === 'v2-home'){
        return <HomeContent/>
    }
    if(appContext.appData.currentPage === 'v2-work'){
        return <WorkContent/>
    }
    if(appContext.appData.currentPage === 'v2-jobs'){
        return <JobsContent/>
    }
    if(appContext.appData.currentPage === 'v2-profile'){
        return <ProfileContent/>
    }
    if(appContext.appData.currentPage === 'v2-contact'){
        return <ContactContent/>
    }
}

export default Content