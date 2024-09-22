export const getScreenWidth = () => {
    return window.screen.width
}

export const getWidthType = () => {
    let screenWidth = window.screen.width
    if(screenWidth <= 640){
        return 'sm'
    } else if(screenWidth > 640 && screenWidth <= 768){
        return 'md'
    } else if(screenWidth > 768 && screenWidth <= 1024){
        return 'lg'
    } else if(screenWidth > 1024){
        return 'xl'
    } 
}