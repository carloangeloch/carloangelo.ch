import { Link } from "react-router-dom";
import ImageLazyLoad from "../../utils/ImageLazyLoad";

const CHLogo = () => {
  return (
    <Link to="/">
      <ImageLazyLoad
        imageSrc={
          ["https://dl.dropboxusercontent.com/scl/fi/cpq372ielpgcvgihxhnd4/ch-light.svg?rlkey=4tpubcoc6ygmjebarem38wig3&st=5tmv512s"]
        }
        altname="CH-Logo"
        styles="w-[50px] xl:w-16"
      />
    </Link>
  );
};

export default CHLogo;
