import React from 'react'
import { useSelector } from 'react-redux'

function Intro() {
  const {portfolioData,loading}=useSelector(state=>state.root)
  const {intros}=portfolioData
  const {welcomeText,firstName,lastName,caption,description}=intros
  return (
   portfolioData ? (<div className=' bg-primary flex flex-col items-start justify-center space-y-8 py-10 sm:py-5'>
      <h1 className='text-white'>{welcomeText||''}</h1>
      <h1 className='text-secondary  text-7xl sm:text-5xl  font-semibold'>{(firstName+'.'+lastName)|| ''} </h1>
      <h1 className='text-white text-6xl sm:text-4xl font-semibold'>{caption || '' }</h1>
      <p className='text-white w-2/3 sm:w-full'>{description ||''} </p>
      <button className='border-2 border-tertiary  px-10 py-4 rounded text-tertiary sm:py-2 sm:px-7'>Get Started</button>
    </div>):null
  )
}

export default Intro
