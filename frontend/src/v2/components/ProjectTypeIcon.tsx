import { FaRegFolderOpen } from "react-icons/fa";
import { MdOutlineDraw } from "react-icons/md";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaTerminal } from "react-icons/fa6";
import { Md3dRotation } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { CgBrowser } from "react-icons/cg";
import { PiVideoLight } from "react-icons/pi";
import { ReactElement } from "react";

interface ButtonIconsProps {
  t: string;
}

const ProjectTypeIcon = ({ t }: ButtonIconsProps): ReactElement | undefined => {
  if (t == "all")
    return (
      <FaRegFolderOpen
        className="bg-[#31363F] rounded-full p-1"
        fontSize={32}
      />
    );
  else if (t == "illustration")
    return (
      <MdOutlineDraw className="bg-[#CA8A04] rounded-full p-1" fontSize={32} />
    );
  else if (t == "graphics")
    return (
      <MdOutlineDesignServices
        className="bg-[#1D4ED8] rounded-full p-1"
        fontSize={32}
      />
    );
  else if (t == "development")
    return (
      <FaTerminal className="bg-[#15803D] rounded-full p-1" fontSize={32} />
    );
  else if (t == "3d")
    return (
      <Md3dRotation className="bg-[#EA580C] rounded-full p-1" fontSize={32} />
    );
  else if (t == "ecomm")
    return <CiShop className="bg-[#0E7490] rounded-full p-1" fontSize={32} />;
  else if (t == "uiux")
    return (
      <CgBrowser className="bg-[#EF4444] rounded-full p-1" fontSize={32} />
    );
  else if (t == "video")
    return (
      <PiVideoLight className="bg-[#7E22CE] rounded-full p-1" fontSize={32} />
    );
};

export default ProjectTypeIcon;
