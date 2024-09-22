export const getDeviceInfo = () => {
    if (
        navigator.userAgent.match(/Mobi/i) ||
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/iPhone/i)
      ) {
        return 'mobile'
    }
    else{
        return 'pc'
    }
}