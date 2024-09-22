import chLogo from '../assets/ch-logo-square.png'

const Footer = () => {
  return (
    <div className="w-full bg-a p-10 text-center items-center text-color-d relative">
        <img src={chLogo} alt={chLogo} className='h-20 mx-auto'/>
        <strong>Carlo Angelo Hilaus</strong><br/><br/>
        <em className='opacity-20'>@ Carlo Angelo Hilaus, ch 2024</em>
    </div>
  )
}

export default Footer