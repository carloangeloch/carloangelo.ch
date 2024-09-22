import { FC, ReactNode } from "react"

interface ContainerProps {
    children: ReactNode;
}

const Container: FC<ContainerProps> = ({children}) => {
  return (
    <div id="container" className="w-full 2xl:w-[1550px] mx-auto">
        {children}
    </div>
  )
}

export default Container