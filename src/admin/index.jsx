import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Tabs, message } from 'antd';
import AdminExperience from './adminExperience.jsx';
import AdminIntro from './adminIntro.jsx';
import AdminAbout from './AdminAbout.jsx';
import { useSelector } from 'react-redux';
import AdminProjects from './AdminProjects.jsx';
import AdminContacts from './AdminContacts.jsx';
import { useNavigate } from 'react-router-dom';

function Admin() {
  const navigate=useNavigate()
  const { TabPane } = Tabs;
  const { portfolioData } = useSelector(state => state.root)
  useEffect(()=>{
    if(!localStorage.getItem('token')){
      navigate('/admin-login')
    }
  },[])
  const handleLogout =() => {
    localStorage.removeItem('token')
    message.success('logout successful')
    navigate('/admin-login')
  }
  
  return (
    <div className=''>

      <Header />
      {
        portfolioData ? (<div className='m-4 mt-8 p-5 border-2'>
          <div className="flex justify-end ">
            <button className="px-4 py-2 border-2 shadow-lg bg-red-500 text-white font-bold"
            onClick={handleLogout}
            >logout</button>
          </div>
          <Tabs defaultActiveKey="1"  >
            <TabPane tab="intro" key="1" >
              <AdminIntro />
            </TabPane>
            <TabPane tab="experience" key="2" >
              <AdminExperience />
            </TabPane>
            <TabPane tab="about" key="3" >
              <AdminAbout />
            </TabPane>
            <TabPane tab="projects" key="4" >
              <AdminProjects/>
            </TabPane>
            <TabPane tab="contacts" key="5" >
              <AdminContacts/>
            </TabPane>
          </Tabs>
        </div>) : null
      }
    </div>
  )
}

export default Admin
