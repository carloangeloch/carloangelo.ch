import { ReactNode, createContext, useState } from "react";


type AppData = {
    currentPage: string;
    yScroll: boolean;
    workActive: string;
    projectTypes: string;
}


export type AppDataInterface = {
    appData: any;
    setAppData:any;
}

export const AppContext = createContext({} as AppDataInterface);

interface AppProvidedrProps {
    children : ReactNode;
}

const defaultAppData = {currentPage: 'landing', yScroll: false, workActive: 'graphics', projectTypes: 'both'}

const AppProvider = ({children} : AppProvidedrProps) => {

    const [appData, setAppData] = useState<AppData | typeof defaultAppData> (defaultAppData)
    return (
        <AppContext.Provider value={{appData, setAppData}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;