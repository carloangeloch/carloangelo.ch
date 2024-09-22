import { useContext, useEffect } from "react"
import JobHistory from "../modules/profile/JobHistory"
import MySkills from "../modules/profile/MySkills"
import WhoAmI from "../modules/profile/WhoAmI"
import { AppContext } from "../context/AppContext"

const Profile = () => {

    const appContext = useContext(AppContext);
    useEffect(() => appContext.setAppData({ currentPage: 'profile'}) ,[]);

    return (
        <div>
            <WhoAmI/>
            <MySkills/>
            <JobHistory/>
        </div>
    )
}

export default Profile