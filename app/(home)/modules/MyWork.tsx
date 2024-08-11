import Image from 'next/image'
import React from 'react'

const MyWork = () => {
    return (
        <div className='bg-gradient-to-b from-slate-100 to-slate-800 py-8 md:py-16'>
            <div className="container mx-auto px-4">
                <div className="max-w-6xl text-center mb-8">
                    <h2 className="mb-4">My <span className='text-blue-600'>Work</span></h2>
                    <p className=''>My work is to bring your imagination to life.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {[...Array(9)]?.map((_, i) => {
                        return (
                            <div key={i} className="w-fit rounded-2xl bg-pink-500 overflow-hidden hover:scale-105 transition-all">
                                <div className="relative">
                                    <Image
                                        height={450}
                                        width={800}
                                        src={`https://picsum.photos/id/${i}/1000`}
                                        alt='media my work'
                                        style={{
                                            borderRadius: '1rem',
                                            filter: 'blur(1px) brightness(75%)', // Applies blur and dark shade
                                            transition: 'filter 0.3s ease-in-out', // Optional: Smooth transition
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-black opacity-25 rounded-2xl"></div> {/* Dark overlay */}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MyWork
