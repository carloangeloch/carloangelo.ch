import { useContext, useEffect, useState } from "react";
import worksData from "../../data/works_data.json";
import { sorted } from "../../utils/mapSorted";
import { AppContext } from "../../context/AppContext";

export const workSort = (t: string) => {
  if (t === "all" ) {
    return worksData.sort(sorted);
  } else {
    return worksData.filter((obj) => obj.project_type.includes(t)).sort(sorted);
  }
};

export const workDataController = (projectType: string) => {

    sessionStorage.setItem("pstate", projectType);

  }
