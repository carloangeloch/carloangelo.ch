import { useContext, lazy } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AppContext } from "../../context/AppContext";
import menuLinks from "../../data/menuLinks.json";

const CHLogo = lazy(() => import("./CHLogo"));
const CiMenuBurger = lazy(() =>
  import("react-icons/ci").then((mod) => ({ default: mod.CiMenuBurger }))
);
const IoClose = lazy(() =>
  import("react-icons/io5").then((mod) => ({ default: mod.IoClose }))
);

const Header = () => {
  const appContext = useContext(AppContext);

  return (
    <div
      id="header-inner"
      className="h-full flex flex-row xl:flex-col gap-y-4 items-center xl:items-start justify-between  px-3 xl:p-[40px_0_0_64px] relative  text-brand-d"
    >
      <div className="flex flex-row xl:flex-col gap-y-4 items-center xl:items-start justify-between w-full xl:w-auto">
        <CHLogo />
        {/* Desktop Menu Button */}
        <div
          id="side-menu-pc"
          className="h-full hidden flex-row md:flex xl:flex-col gap-y-4 gap-x-10 items-center xl:items-start"
        >
          {menuLinks.map((m: { name: string; path: string }) => {
            return (
              <Link to={m.path} key={m.name}>
                <motion.div initial="initial" whileHover="hovered">
                  <motion.div
                    variants={{
                      initial: {
                        translateX: 0,
                        translateY: 0,
                      },
                      hovered: {
                        translateX: window.innerWidth > 1280 ? 8 : 0,
                        translateY: window.innerWidth > 1280 ? 0 : -5,
                      },
                    }}
                    style={
                      appContext.appData.currentPage == m.name.toLowerCase()
                        ? { color: "#EBD26B", fontWeight: "bold" }
                        : { color: "#EEEEEE", fontWeight: "normal" }
                    }
                  >
                    {m.name}
                  </motion.div>
                  <motion.div
                    className="h-0.5"
                    variants={{
                      initial: {
                        width: 0,
                      },
                      hovered: {
                        width: window.innerWidth > 1280 ? "130%" : "100%",
                        backgroundColor:
                          appContext.appData.currentPage == m.name.toLowerCase()
                            ? "#EBD26B"
                            : "#EEEEEE",
                      },
                    }}
                  />
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div
          id="side-menu-mobile"
          className="h-full flex flex-row md:hidden gap-4 items-center xl:items-start"
        >
          <CiMenuBurger
            fontSize={28}
            onClick={() =>
              appContext.setAppData({ ...appContext.appData, showNav: true })
            }
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* // Mobile Menu */}
      <motion.div
        initial={{ width: 0, top: 0, right: 0 }}
        animate={{ width: appContext.appData.showNav ? "100%" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        id="mobile-menu"
        className="fixed flex flex-col gap-y-2 md:hidden h-full bg-brand-c z-50 top-00 right-0"
      >
        <motion.div
          initial={
            appContext.appData.showNav
              ? { opacity: 0, translateY: "-20px" }
              : { opacity: 1, translateY: 0 }
          }
          animate={
            appContext.appData.showNav
              ? { opacity: 1, translateY: 0 }
              : { opacity: 0, translateY: "-20px" }
          }
          transition={{ delay: 0.15, duration: 0.3, ease: "easeIn" }}
          className="flex flex-row justify-between items-center p-4"
        >
          <CHLogo />
          <div>
            <IoClose
              fontSize={28}
              onClick={() =>
                appContext.setAppData({ ...appContext.appData, showNav: false })
              }
              className="cursor-pointer"
            />
          </div>
        </motion.div>
        {menuLinks.map((m: { name: string; path: string }, idx) => {
          return (
            <Link
              to={m.path}
              key={m.name}
              onClick={() =>
                appContext.setAppData({ ...appContext.appData, showNav: false })
              }
            >
              <motion.div
                initial={
                  appContext.appData.showNav
                    ? { opacity: 0, translateY: "-20px" }
                    : { opacity: 1, translateY: 0 }
                }
                animate={
                  appContext.appData.showNav
                    ? { opacity: 1, translateY: 0 }
                    : { opacity: 0, translateY: "-20px" }
                }
                transition={{
                  delay: 0.15 * idx + 0.15,
                  duration: 0.3,
                  ease: "easeIn",
                }}
                className="w-full p-4 text-center"
              >
                {m.name}
              </motion.div>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Header;
