import { FC, useRef, useState } from "react";
import { useInView } from "framer-motion";
import sdLogo from "../../../assets/split_dragon_logo.jpeg";
import intrepidLogo from "../../../assets/flywheel_digital_logo.jpeg";
import goForthLogo from "../../../assets/go_forth_pest_control_logo.jpeg";
import eCreationsLogo from "../../../assets/e-creation.jpeg";
import m3dLogo from "../../../assets/m3d-logo.png";
import amkorLogo from "../../../assets/amkor.jpeg";
import stacksLogo from "../../../assets/stacks.png";
import building from "../../../assets/office-building.png";
import { motion } from "framer-motion";
import workHistoryList from "../../../data/work_history.json";

interface JobItemHandlerProps {
  companyIcon?: any;
  jobDate: string;
  position: string;
  company: string;
  location: string;
  short: string;
  content: any;
}

const JobItemHandler: FC<JobItemHandlerProps> = ({
  companyIcon,
  jobDate,
  position,
  company,
  location,
  short,
  content,
}) => {
  const refer = useRef(null);
  const isInView = useInView(refer, { once: true });
  const [isShown, setIsShown] = useState(false);

  const ShowDetail = () => {
    setIsShown(!isShown);
    console.log(position + isShown.toString());
  };

  return (
    <div
      ref={refer}
      style={{
        transform: isInView ? "none" : "translatey(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
      }}
      className="w-full md:p-4 p-4 lg:p-6 xl:p-10 flex flex-wrap text-brand-d"
      id="job-details"
    >
      <div className="text-lg lg:text-xl flex" id="role-info">
        <img
          loading="lazy"
          src={String(companyIcon)
            .replace("www.dropbox", "dl.dropboxusercontent")
            .replace("&dl=0", "")}
          alt={companyIcon}
          className="h-[50px] mr-5 mt-5 rounded-md"
        />
        <div className="flex flex-wrap gap-y-1">
          <div className="w-full">
            <strong className="text-brand-b">{position}</strong>
          </div>
          <div className="w-full">
            <span>
              {company} – {location}
            </span>
          </div>
          <div className="text-sm w-full">{jobDate}</div>
        </div>
      </div>
      <div className="text-base lg:text-lg opacity-80 mt-8" id="short-desc">
        {short}
      </div>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={
          isShown ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }
        }
        className="text-base lg:text-lg opacity-80 mt-4"
        id="detailed-desc"
      >
        <strong className="text-brand-b">Detailed Responsibilities</strong>
        <div className="w-3/4 h-0.5 bg-white mb-3" />
        {content.map((i: any) => {
          return (
            <div key={i["title"]}>
              <strong>{i["title"]}:</strong>
              <span className="opacity-80"> {i["description"]}</span>
            </div>
          );
        })}
      </motion.div>
      <div
        className="relative w-full overflow-hidden h-7 items-center p-3 mt-4 bg-white bg-opacity-5 rounded-md"
        id="show-btn"
      >
        <motion.div
          initial={{ top: 0 }}
          animate={isShown ? { top: 50 } : { top: 0 }}
          className="w-full text-center cursor-pointer absolute "
          onClick={ShowDetail}
        >
          See Detailed Job Responsibility
        </motion.div>
        <motion.div
          initial={{ top: -50 }}
          animate={isShown ? { top: 0 } : { top: -50 }}
          className="w-full text-center cursor-pointer absolute "
          onClick={ShowDetail}
        >
          Hide Details
        </motion.div>
      </div>
    </div>
  );
};

const JobHistory = () => {
  return (
    <div className="flex flex-col justify-center gap-y-6">
      {workHistoryList.map((w) => {
        return (
          <JobItemHandler
            key={Math.random()}
            companyIcon={w.companyIcon}
            jobDate={w.jobDate}
            position={w.position}
            company={w.company}
            location={w.location}
            short={w.short}
            content={w.content}
          />
        );
      })}
    </div>
  );

  //TODO: Redesign the Job History Cards
};

export default JobHistory;
