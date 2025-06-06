import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";
import expertiseList from "../../../data/expertise_list.json";
import { dropboxConverter } from "../../../utils/dropboxConverter";

interface SkillsModuleProps {
  tag: string;
  title: string;
  description: string;
  item1?: any;
  item2?: any;
  item3?: any;
}
const SkillsModule: FC<SkillsModuleProps> = ({
  tag,
  title,
  description,
  item1,
  item2,
  item3,
}) => {
  const refer = useRef(null);
  const isInView = useInView(refer, { once: true });

  return (
    <div
      ref={refer}
      id={tag}
      className="mb-10 w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
      style={{
        transform: isInView ? "none" : "translatey(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
      }}
    >
      <div className=" h-auto relative ">
        <div>
          {window.innerWidth <= 1050 ? (
            <div className="w-full flex justify-center gap-x-2">
              <div>
                <img
                  src={dropboxConverter(item1)}
                  alt={item1}
                  className="h-[60px]"
                />
              </div>
              <div>
                <img
                  src={dropboxConverter(item2)}
                  alt={item2}
                  className="h-[60px]"
                />
              </div>
              <div>
                <img
                  src={dropboxConverter(item3)}
                  alt={item3}
                  className="h-[60px]"
                />
              </div>
            </div>
          ) : (
            <motion.div
              initial="initial"
              whileHover="hovered"
              className="w-full h-[300px] relative p-5"
            >
              <motion.img
                src={dropboxConverter(item1)}
                alt={item1}
                variants={{
                  initial: { left: "15%", top: "10%", rotate: "-6deg" },
                  hovered: { left: "10%", top: "5%", rotate: "-12deg" },
                }}
                className="lg:h-[120px] xl:h-[150px] absolute"
              />
              <motion.img
                src={dropboxConverter(item2)}
                alt={item2}
                variants={{
                  initial: { right: "20%", top: "20%", rotate: "6deg" },
                  hovered: { right: "10%", top: "25%", rotate: "15deg" },
                }}
                className="lg:h-[120px] xl:h-[150px] absolute"
              />
              <motion.img
                src={dropboxConverter(item3)}
                alt={item3}
                variants={{
                  initial: { left: "25%", bottom: "10%", rotate: "-10deg" },
                  hovered: { left: "18%", bottom: "5%", rotate: "-20deg" },
                }}
                className="lg:h-[120px] xl:h-[150px] absolute"
              />
            </motion.div>
          )}
          <div className="mt-5 mb-1">
            <strong className="text-lg md:text-xl lg:text-2xl text-brand-b">
              {title}
            </strong>
            <br />
          </div>
          <span className=" text-brand-d opacity-80">{description}</span>
        </div>
      </div>
    </div>
  );
};

const Expertise = () => {
  return (
    <div className="pt-8 md:p-10 lg:p-12 xl:pt-16">
      <div className="w-full mx-auto flex flex-wrap justify-center gap-x-5">
        {expertiseList.map((e) => {
          return (
            <SkillsModule
              key={e.tag}
              tag={e.tag}
              title={e.title}
              description={e.description}
              item1={e.item1}
              item2={e.item2}
              item3={e.item3}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Expertise;
