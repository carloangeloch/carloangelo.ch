import {FC} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

interface ImageLazyLoadProps {
    imageScr: any,
    altname: string,
    styles: string
}

const ImageLazyLoad : FC<ImageLazyLoadProps> = ({imageScr, altname, styles}) => {
  return (
    <>
        <LazyLoadImage
            src={imageScr}
            effect="blur"
            alt={altname}
            className={styles}
            wrapperProps={{
                style: {transitionDelay: "1s"}
            }}
        />
    </>
  )
}

export default ImageLazyLoad