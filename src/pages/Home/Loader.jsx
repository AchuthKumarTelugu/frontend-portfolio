import React from 'react'

function Loader() {
  return (
    <div className='h-full flex items-center justify-center fixed inset-0 bg-primary z-[10000]'>
      <div className="flex gap-5 text-7xl sm:text-3xl font-semibold">
         <h1 className='text-secondary t'> T</h1>
         <h1 className='text-white a'> A</h1>
         <h1 className='text-tertiary k'> K</h1>
      </div>
    </div>
  )
}

export default Loader
