import React, { useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';

function About() {
  // const [skillset, setSkillset] = useState(["JavaScript", "React", "Node.js", "MongoDB", "Express", "Firebase"]);
 const {portfolioData,loading}=useSelector(state=>state.root)
 const {abouts}=portfolioData
 const {lottieUrl,description1,description2,skills}=abouts
  return (
    <>
      <SectionTitle title={"About me"} />
      <div className='flex flex-row sm:flex-col items-center justify-between '>
        <div className='w-1/2 px-5 sm:px-1 sm:w-full '>
          <dotlottie-player src={lottieUrl} background="transparent"  ></dotlottie-player>
        </div>
        <div className="flex flex-col text-white w-1/2 sm:w-full gap-5 mx-auto  ">
          <p>
            {description1}
          </p>
          <p>
            {description2}
          </p>
        </div>
      </div>


      <div className="py-10 ">
        <h1 className="text-tertiary text-xl sm:text-lg">
          Here are a few technologies I have been working with recently:
        </h1>
        <div className="flex gap-5 flex-wrap mt-8  ">
          {skills.map((value, index) => (
            <button key={index} className="text-tertiary border-2 sm:border border-tertiary py-3 sm:py-1 px-10 sm:px-5 items-start">{value}</button>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
