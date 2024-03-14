import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux'

function Experiences() {
    const [selectedIndex,setSelectedIndex]=useState(0)
    const {portfolioData,loading}=useSelector(state=>state.root)
    const {experiences}=portfolioData
    return (
        <div >
            <SectionTitle title={"Experiences"} />
            <div className='flex gap-20 sm:gap-10 sm:flex-col'> 
                <div className='flex flex-col sm:flex-row sm:overflow-auto gap-10 py-10 border-l-2 border-[#135e4c82] '>
                    {
                      experiences.map((value,index)=>(
                        <div 
                        onClick={()=>{setSelectedIndex(index)}}
                        key={index} 
                        className={`text-xl cursor-pointer px-5 py-3  ${selectedIndex===index ? 'text-tertiary border-l-2 border-tertiary bg-tertiary bg-opacity-10':'text-white'}` }>{value.period}</div>
                      ))
                    }
                </div>
                <div className='flex flex-col justify-center gap-5 sm:gap-5'>
                  <h1 className='text-secondary text-2xl'>{experiences[selectedIndex].title}</h1>
                  <h1 className='text-tertiary text-xl'>{experiences[selectedIndex].company}</h1>
                  <p className='text-white '>{experiences[selectedIndex].description.length > 0 ? experiences[selectedIndex].description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium voluptatum consectetur dolores autem voluptate veritatis.' }</p>

                </div>
            </div>
        </div>
    )
}

export default Experiences
