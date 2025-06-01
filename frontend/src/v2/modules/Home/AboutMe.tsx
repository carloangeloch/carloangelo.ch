import { FaArrowRightLong } from "react-icons/fa6";

const AboutMe = () => {
  return (
    <div
        className="bg-brand-d p-3 xl:p-20 flex flex-wrap text-color-a text-center lg:text-left"
        id="about-me-section"
      >
        <div id="about-me-left" className="w-full lg:w-2/3">
          <div className="flex flex-col gap-y-1 mr-auto lg:mr-10 p-4">
            <strong className="text-4xl mb-3">About Me</strong>
            <span>
              I'm a passionate designer and developer focused on creating
              elegant, functional digital solutions.
            </span>
            <span>
              With expertise in UI/UX design, web development, and creative
              direction, I bring ideas to life through thoughtful design and
              clean code.
            </span>
            <a href="/about" className="pt-5">
              <div className="flex justify-center lg:justify-normal items-center gap-x-2 hover:translate-x-4 duration-300 ease-in-out">
                <div>More about me</div>
                <FaArrowRightLong className="w-5" />
              </div>
            </a>
          </div>
        </div>
        <div id="about-me-right" className="w-full lg:w-1/3">
          <div className="flex flex-col gap-y-1 mr-auto lg:mr-10 p-4 bg-white rounded-md shadow-md">
            <strong className="text-4xl mb-3">Core Skills</strong>
            <div>Full Stack Development</div>
            <div>Ecommerce and Marketing Design</div>
            <div>UI/UX Design</div>
            <div>Data Engineering and Analysis</div>
          </div>
        </div>
      </div>
  )
}

export default AboutMe