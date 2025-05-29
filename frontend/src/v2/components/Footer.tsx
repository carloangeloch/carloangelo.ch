import CHLogo from "./CHLogo";
import Socmed from "./Socmed";
import menuLinks from "../../data/menuLinks.json";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div
      className="w-full px-8 lg:px-20 py-10 bg-brand-a text-brand-d flex flex-col md:flex-row gap-y-8 text-center md:text-left"
      id="footer"
    >
      <div className="flex-1 flex flex-col gap-y-4">
        <div
          id="logo-div"
          className="w-full md:w-16 flex md:justify-normal justify-center"
        >
          <CHLogo />
        </div>
        <div>Creating beautiful experiences.</div>
      </div>
      <div className="flex-1 flex flex-col  gap-y-2">
        <div className="text-lg">
          <span>Navigation</span>
        </div>
        {menuLinks.map((m) => {
          return (
            <Link to={m.path} key={m.name}>
              <div className="text-brand-d hover:text-brand-b hover:translate-x-2 duration-300 ease-in-out">
                {m.name}
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex-1 flex flex-col gap-y-2">
        <div className="text-lg">Check out my socials</div>
        <div className="flex gap-x-3 mt-7 md:mt-3 justify-center md:justify-normal">
          <Socmed />
        </div>
      </div>
    </div>
  );
};

export default Footer;
