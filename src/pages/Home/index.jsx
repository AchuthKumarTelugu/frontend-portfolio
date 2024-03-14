import React from 'react'
import Header from '../../components/Header'
import Intro from './Intro'
import About from './About'
import Experiences from './Experiences'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import LeftSider from './LeftSider'
import { useSelector } from 'react-redux'

function Home() {
  const { portfolioData}=useSelector(state=>state.root)
  return (
    <div className=''>
      <Header/>
     {portfolioData ?( <div className="bg-primary px-40">
      <Intro/>
      <About/>
      <Experiences/>
      <Projects/>
      <Contact/>
      <Footer/>
      <LeftSider/>
      </div>) : null}
    </div>
  )
}

export default Home
