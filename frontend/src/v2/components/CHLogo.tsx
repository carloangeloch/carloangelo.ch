import { Link } from "react-router-dom";

const CHLogo = () => {
  return (
    <Link to="/">
      <img
        src={
          "https://dl.dropboxusercontent.com/scl/fi/cpq372ielpgcvgihxhnd4/ch-light.svg?rlkey=4tpubcoc6ygmjebarem38wig3&st=5tmv512s"
        }
        alt="CH-Logo"
        className="w-[50px] xl:w-32"
      />
    </Link>
  );
};

export default CHLogo;
