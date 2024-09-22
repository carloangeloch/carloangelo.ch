import { FC } from "react";
import {motion} from 'framer-motion'

interface SectionTitleProps {
    title: string;
    textColor?: string;
    dividerColor?: string;
}

const SectionTitle: FC<SectionTitleProps> = ({title, textColor = 'text-color-a', dividerColor = 'bg-c'}) => {
  return (
    
    <motion.div
        initial={{opacity: 0, transform: 'scale(0.5'}}
        animate={{opacity: 1, transform: 'scale(1)'}}
        transition={{duration: 0.5, ease:'easeInOut',delay:0.2}}
        className="text-2xl lg:text-3xl xl:text-4xl text-center p-1 md:p-2 lg:p-5 xl:p-6 mb-1 md:mb-3 lg:mb-5 xl:mb-7" id="services">
        <strong className={`${textColor} opacity-80`}>
            {title}
        </strong>
        <div className={`w-24 h-1 ${dividerColor} mx-auto my-2 lg:my-5`}></div>
    </motion.div>
  )
}

export default SectionTitle