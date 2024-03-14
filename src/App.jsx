
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { useEffect, useState } from 'react'
import Loader from './pages/Home/Loader'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { HideLoading, ReloadData, ShowLoading, setPortfolioData } from './redux/rootSlice'
import Admin from './admin'
import Login from './admin/Login'
function App() {
  const { loading, portfolioData,reloadData } = useSelector(state => state.root)
  const dispatch = useDispatch()
  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading())
      const response = await axios.get('https://portfolio-backend-3-vdt8.onrender.com/api/portfolio/get-portfolio-data')
      dispatch(HideLoading())
      dispatch(setPortfolioData(response.data))
      dispatch(ReloadData(false))
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData()
    }
    console.log('portfolio-data', portfolioData)
  }, [portfolioData])
  useEffect(()=>{
    if(reloadData) {
      getPortfolioData()
    }
  },[reloadData])

  return (

    <div className="App">
      {loading ? <Loader /> : null}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={(<Admin />)} />
        <Route path='/admin-login' element={(<Login/>)} />
      </Routes>
    </div>
  )
}

export default App
