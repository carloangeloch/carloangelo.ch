'use client'

import React, { useEffect, useState } from 'react'
import DropboxImage from './DropboxImage'
import Navigation from './Navigation'

const Header = () => {

    const [screenWidth, setScreenWidth] = useState(0);
    const handleResize = () => setScreenWidth(window.screen.width);

    useEffect( () => {
        if(window !== undefined){
            setScreenWidth(window.screen.width)
        }
        console.log(screenWidth)
    },[]);

    useEffect( () => {
        window.addEventListener('resize', handleResize);
        console.log(screenWidth)
        return () => removeEventListener('resize', handleResize);
    },[handleResize]);

    return (
        <div className='w-full h-16 flex bg-blue-500'>
            <div className='w-1/2 h-full px-5'>
                <DropboxImage imageName='ch logo' width={60} height={60}/>
            </div>
            <div className='w-1/2 h-full'>
                {screenWidth <= 1024 ?
                    <div>
                        O
                    </div>
                    : <></>
                }
                <Navigation/>
            </div>
        </div>
    )
}

export default Header