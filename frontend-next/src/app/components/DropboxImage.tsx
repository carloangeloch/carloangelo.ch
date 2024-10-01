import Image from 'next/image'
import React from 'react'
import iconData from '../data/icon_list.json'

interface DropboxImageProps {
    imageName: string;
    width: number;
    height: number;
}

const DropboxImage = ({imageName, width, height} : DropboxImageProps) => {


    return (
        <Image
            src={String(iconData.filter( obj => obj.name === imageName)[0].url).replace("www.dropbox","dl.dropboxusercontent").replace('&dl=0','')}
            alt={String(iconData.filter( obj => obj.name)[0].name)}
            width={width}
            height={height}
            priority
            unoptimized
            className='object-center'
        />
    )
}

export default DropboxImage