export const pageLocationStore = (ploc:string) => {
    if(!sessionStorage.getItem('pageLoc'))
        sessionStorage.setItem('pageLoc',ploc)
    sessionStorage.setItem('pageLoc',ploc)
}

export const currentProjectType = (ptype: string) => {
    if(!sessionStorage.getItem('pstate'))
        sessionStorage.setItem('pstate',ptype)
    sessionStorage.setItem('pstate',ptype)
}