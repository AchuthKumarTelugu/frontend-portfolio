import React, { useState } from 'react'
// import projects from '../../resources/Projects'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux'

function Projects() {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const {portfolioData}=useSelector(state=>state.root)
    const {projects} = portfolioData;
    function subtitleExtract(arr) {
       return arr.join(',')
    }
    return (
        <div>
            <SectionTitle title={"My Projects"} />
            <div className='flex gap-20 sm:gap-10 sm:flex-col'>
                <div className='flex flex-col sm:flex-row sm:overflow-auto gap-10 py-10 border-l-2 border-[#135e4c82] '>
                    {
                        projects.map((value, index) => (
                            <div
                                onClick={() => { setSelectedIndex(index) }}
                                key={index}
                                className={`text-xl cursor-pointer px-5 py-3  ${selectedIndex === index ? 'text-tertiary border-l-2 border-tertiary bg-tertiary bg-opacity-10' : 'text-white'}`}>{value.title}</div>
                        ))
                    }
                </div>
                <div className='flex items-center justify-between gap-5 sm:flex-col'>
                    <div className='w-1/2 p-3 sm:w-full'>
                        <a href={projects[selectedIndex].link} target='_blank' >
                     <img src={projects[selectedIndex].image} alt="Project Image"/>
                        </a>
                    </div>
                    <div  className='flex flex-col justify-center gap-5 sm:gap-5 w-1/2 sm:w-full'>
                        <h1 className='text-secondary text-2xl'>{projects[selectedIndex].title}</h1>
                        <h1 className='text-tertiary text-xl'>{subtitleExtract(projects[selectedIndex].techStack)}</h1>
                        <p className='text-white '>{projects[selectedIndex].description.length > 0 ? projects[selectedIndex].description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium voluptatum consectetur dolores autem voluptate veritatis.'}</p>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Projects
