import React from 'react'
import Link from 'next/link'

const Navigation = () => {
    const menus = [
        {
            name:'Home',
            pathname: '/'
        },
        {
            name:'Profile',
            pathname: '/profile'
        },
        {
            name:'Works',
            pathname: '/works'
        },
        {
            name:'Contact',
            pathname: '/contact'
        }
    ]

    return (
        <div className='w-full h-full flex justify-end gap-x-5'>
            {menus.map( i => {
                return(
                    <div key={i.name} className='h-full px-10 text-white hover:text-green-500 transition-all duration-300 text-2xl flex flex-col items-center justify-center'>
                        <Link href={i.pathname}>
                            <span className='block'>{i.name}</span>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Navigation