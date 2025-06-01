import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AppContext } from "../../context/AppContext";
import burger from "../../assets/hamburger.svg";
import menuLinks from "../../data/menuLinks.json";
import CHLogo from "./CHLogo";

const Header = () => {

  const appContext = useContext(AppContext);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 750) {
      setShowNav(true);
    }
  }, []);
  

  return (
    <div
      className="w-full xl:w-auto flex flex-row xl:flex-col gap-y-5 font-title"
      id="header"
    >
      <div id="logo-div" className="w-1/2 flex flex-col justify-center">
        <CHLogo />
      </div>
      {window.innerWidth > 750 ? (
        //Desktop Menu
        <div
          className="w-1/2 xl:w-auto pr-3 xl:pr-auto flex flex-row xl:flex-col gap-x-3 xl:gap-y-3 justify-end text-base xl:text-lg"
          id="nav-div"
        >

          {menuLinks.map((m : {name: string, path: string}) => {
            return (

              <Link to={m.path} key={m.name}>
                <motion.div initial="initial" whileHover="hovered" className="px-4">
                  <span
                    style={
                      appContext.appData.currentPage == "about"
                        ? { color: "#FDE047", fontWeight: "bold" }
                        : { color: "#F6F8F5", fontWeight: "normal" }
                    }
                  >
                    {m.name}
                  </span>
                  <motion.div
                    className="h-0.5"
                    variants={{
                      initial: {
                        width: 0,
                      },
                      hovered: {
                        width: "100%",
                        backgroundColor:
                          appContext.appData.currentPage == "about"
                            ? "#FDE047"
                            : "#F8E7E2",
                      },
                    }}
                  />
                </motion.div>
              </Link>
            )
          })}
        </div>
      ) : (
        //Mobile menu
        <div className="w-1/2" id="mobile-nav">
          <div
            className="w-full flex justify-end"
            onClick={() => {
              setShowNav(!showNav);
              console.log("showing nav");
            }}
          >
            <img src={burger} alt="menu-icon" className="w-10" />
          </div>
          {showNav && (
            <div className="relative">
              <div className="fixed bg-brand-a w-full h-screen z-20 top-0 left-0" />
              <div className="fixed w-full p-4 top-0 left-0 z-30 flex flex-col items-end justify-center gap-y-4">
                <button
                  className="btn btn-success"
                  onClick={() => {
                    setShowNav(!showNav);
                    console.log("closing nav");
                  }}
                >
                  X
                </button>
                {menuLinks.map((m) => {
                  return (
                    <Link
                      to={m.path}
                      key={m.name}
                      className="w-full p-2 text-center"
                      onClick={() => setShowNav(!showNav)}
                    >
                      <div className="">{m.name}</div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
