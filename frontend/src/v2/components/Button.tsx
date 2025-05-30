import { FaArrowRightLong } from "react-icons/fa6";
import { FC } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  content: string;
  url: string;
  isArrow?: boolean;
}

const Button: FC<ButtonProps> = ({ content, url, isArrow }) => {
  return (
    <Link to={url} className="w-full">
      <div className="more-work-btn w-full flex justify-center relative h-14">
        <button className="flex items-center gap-x-2 justify-center p-4 bg-[rgb(247,222,122)] text-color-a rounded-md absolute h-14 hover:h-16 hover:p-6 hover:-translate-y-1 duration-300 ease-in-out">
          {content} {isArrow && <FaArrowRightLong className="w-5" />}
        </button>
      </div>
    </Link>
  );
};

export default Button;
