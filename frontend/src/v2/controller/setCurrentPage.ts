import { AppContext } from "./../../context/AppContext";
import { useContext } from "react";

export const setCurrentPage = (t: string) => {
  const appContext = useContext(AppContext);
  appContext.setAppData({ currentPage: t });
};
