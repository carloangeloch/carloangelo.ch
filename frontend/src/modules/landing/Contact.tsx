import { Link } from "react-router-dom"
import Container from "../../components/Container"
import SectionTitle from "../../components/SectionTitle"
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <div className="p-16">
        <SectionTitle title="Let’s Collaborate!"/>
        <Container>
            <div className="text-base md:text-lg xl:text-xl w-full xl:w-[1000px] mx-auto text-center">
                If you’re looking for a dedicated professional to help you turn your data into actionable insights, develop robust web applications, or craft designs that speak to your audience, I’d love to hear from you. Let’s build something amazing together!
                <motion.div
                    initial={{transform: 'scale(1)'}}
                    whileHover={{transform: 'scale(1.15)'}}
                    className="bg-c rounded-lg p-3 mt-10 w-[200px] mx-auto text-color-a">
                    <Link to="/contact">
                        <strong>Let's Talk Now</strong>
                    </Link>
                </motion.div>
            </div>
        </Container>
    </div>
  )
}

export default Contact  