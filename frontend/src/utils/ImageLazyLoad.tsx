import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { getScreenWidth } from "./getScreenWidth";
import { dropboxConverter } from "./dropboxConverter";

interface ImageLazyLoadProps {
  imageSrc: string[];
  altname: string;
  styles: string;
}

const ImageLazyLoad: FC<ImageLazyLoadProps> = ({
  imageSrc,
  altname,
  styles,
}) => {
  const w = getScreenWidth();

  return (
    <picture>
      <LazyLoadImage
        src={
          imageSrc.length === 1
            ? dropboxConverter(imageSrc[0])
            : w >= 650
            ? dropboxConverter(imageSrc[2])
            : w >= 465
            ? dropboxConverter(imageSrc[1])
            : dropboxConverter(imageSrc[0])
        }
        effect="blur"
        alt={altname}
        className={styles}
        wrapperProps={{
          style: { transitionDelay: "0.5s" },
        }}
      />
    </picture>
  );
};

export default ImageLazyLoad;
