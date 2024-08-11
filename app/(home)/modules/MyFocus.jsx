import React from 'react'

const MyFocus = () => {
  return (
    <div className='bg-gradient-to-b from-gray-800 to-gray-100 py-8 md:py-16'>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl text-center mb-8">
            <h2 className="mb-4 text-white">My <span className='text-blue-600'>Focus</span></h2>
            <p className='text-white'>My focus on building websites that help you achieve your goals.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {[...Array(15)]?.map((item,i) => {
                return(
                    <div key={i} className="border border-gray-100 rounded-md shadow-lg hover:scale-105 cursor-pointer transition-all hover:bg-slate-800 hover:text-white">
                        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-blue-300 px-4 py-2 rounded-tl-md rounded-tr-md">Feature {i+1}</h3>
                        <p className='px-4 py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel ipsum ac velit hendrerit sagittis.</p>
                    </div>
                )
            })}
        </div>
      </div>
    </div>
  )
}

export default MyFocus
