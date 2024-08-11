import Buttons from '@/app/components/Buttons'
import Images from '@/app/components/Images'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <div className='bg-gray-800 py-12 text-white' >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div className="text-left">
                        <p className="mb-4">Welcome to my web...</p>
                        <h1 className="">I build <span className='text-blue-600'>Professional</span> Websites</h1>
                        <Link href={`#contact`} >
                            <Buttons title='Contact Me!' />
                        </Link>
                    </div>
                    <div className="text-center hover:scale-105 transition-all">
                        <Images
                            src="/Hero.jpg"
                            alt="Hero Image" 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
