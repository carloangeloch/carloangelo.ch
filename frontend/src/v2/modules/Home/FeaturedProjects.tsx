import worksData from "../../../data/works_data.json";
import { motion } from "framer-motion";
import Button from "../../components/Button";
import ImageLazyLoad from "../../../utils/ImageLazyLoad";
import { Link } from "react-router-dom";

const FeaturedProjects = () => {
  return (
    <div id="featured-projects" className="w-full bg-white p-10">
      <div
        id="featured-projects-title"
        className="w-full text-center flex flex-col p-8 text-color-a"
      >
        <strong className="text-4xl">FEATURED PROJECTS</strong>
        <span>Explore some of my recent work</span>
      </div>
      <div
        id="feature-projects-cards"
        className="flex flex-wrap justify-center gap-5 p-5 mb-4"
      >
        {Object.values(worksData).map(
          (work, index) =>
            index < 3 && (
              <Link to={`/work/${work.id}`} key={work.id}>
                <motion.div
                  initial={"initial"}
                  whileHover={"hovered"}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="card bg-base-100 w-96 h-[400px] shadow-md hover:-translate-y-2 transition-all duration-300 ease-in-out"
                >
                  <figure>
                    <ImageLazyLoad
                      imageSrc={[
                        String(work.thumbnail_link)
                          .replace(
                            "www.dropbox.com",
                            "dl.dropboxusercontent.com"
                          )
                          .replace("?dl=0", ""),
                      ]}
                      altname={work.title}
                      styles="w-full h-2/3 object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <motion.h2
                      className="card-title"
                      variants={{
                        initial: { color: "white" },
                        hovered: { color: "#FDE047" },
                      }}
                    >
                      {work.title}
                    </motion.h2>
                    <p>{String(work.description).substring(0, 80)}...</p>
                  </div>
                </motion.div>
              </Link>
            )
        )}
      </div>
      <Button content="See More" isArrow={true} url="/work" />
    </div>
  );
};

export default FeaturedProjects;
