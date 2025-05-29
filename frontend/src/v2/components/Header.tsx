import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AppContext } from "../../context/AppContext";
import { getScreenWidth } from "../../utils/getScreenWidth";
import close from "../../assets/close-icon.svg";
import burger from "../../assets/hamburger.svg";
import menuLinks from "../../data/menuLinks.json";
import CHLogo from "./CHLogo";

const Header = () => {
  const getDeviceType = () => {
    const userAgent = navigator.userAgent;

    if (
      /Mobile|Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(userAgent)
    ) {
      return "mobile";
    } else if (/Tablet/i.test(userAgent)) {
      return "tablet";
    } else {
      return "desktop";
    }
  };

  const appContext = useContext(AppContext);
  const [showNav, setShowNav] = useState(false);
  const [device, setDevice] = useState("");

  let screenWidth = getScreenWidth();

  useEffect(() => {
    setDevice(getDeviceType());
    // screenWidth >= 1280
    if (device !== "mobile") {
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
      {/* screenWidth <= 500  */}
      {device === "mobile" ? (
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
      ) : (
        //Desktop Menu
        <div
          className="w-1/2 xl:w-auto pr-3 xl:pr-auto flex flex-row xl:flex-col gap-x-3 xl:gap-y-3 justify-end text-base xl:text-lg"
          id="nav-div"
        >
          <Link to="/about">
            <motion.div initial="initial" whileHover="hovered" className="w-14">
              <span
                style={
                  appContext.appData.currentPage == "about"
                    ? { color: "#FDE047", fontWeight: "bold" }
                    : { color: "#F6F8F5", fontWeight: "normal" }
                }
              >
                About
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

          <Link to="/career">
            <motion.div initial="initial" whileHover="hovered" className="w-14">
              <span
                style={
                  appContext.appData.currentPage == "career"
                    ? { color: "#FDE047", fontWeight: "bold" }
                    : { color: "#F6F8F5", fontWeight: "normal" }
                }
              >
                Career
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
                      appContext.appData.currentPage == "career"
                        ? "#FDE047"
                        : "#F8E7E2",
                  },
                }}
              />
            </motion.div>
          </Link>

          <Link to="/work">
            <motion.div initial="initial" whileHover="hovered" className="w-14">
              <span
                style={
                  appContext.appData.currentPage == "work"
                    ? { color: "#FDE047", fontWeight: "bold" }
                    : { color: "#F6F8F5", fontWeight: "normal" }
                }
              >
                Work
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
                      appContext.appData.currentPage == "work"
                        ? "#FDE047"
                        : "#F8E7E2",
                  },
                }}
              />
            </motion.div>
          </Link>

          <Link to="/contact">
            <motion.div initial="initial" whileHover="hovered" className="w-14">
              <span
                style={
                  appContext.appData.currentPage == "contact"
                    ? { color: "#FDE047", fontWeight: "bold" }
                    : { color: "#F6F8F5", fontWeight: "normal" }
                }
              >
                Contact
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
                      appContext.appData.currentPage == "contact"
                        ? "#FDE047"
                        : "#F8E7E2",
                  },
                }}
              />
            </motion.div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
