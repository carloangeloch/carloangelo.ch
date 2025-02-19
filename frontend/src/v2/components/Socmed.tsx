import behance from '../../assets/behance.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'

const Socmed = () => {
  return (
    <>
        <div>
            <a href="https://www.behance.net/carloangeloch" target="_blank" rel="noreferrer">
                <img src={behance} alt="behance" className="w-8 h-8 text-color-d"/>
            </a>
        </div>
        <div>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <img src={facebook} alt="facebook" className="w-8 h-8 text-color-d"/>
            </a>
        </div>
        <div>
            <a href="https://www.instagram.com/carloangelo.ch" target="_blank" rel="noreferrer">
                <img src={instagram} alt="instagram" className="w-8 h-8 text-color-d"/>
            </a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/carlo-angelo-hilaus-13b972173" target="_blank" rel="noreferrer">
                <img src={linkedin} alt="linkedin" className="w-8 h-8 text-color-d"/>
            </a>
        </div>
    </>
  )
}

export default Socmed