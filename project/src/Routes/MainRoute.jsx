import React from 'react'
import Navbar from '../home_components/Navbar'
import {Routes,Route} from"react-router-dom"
import Home from '../pages/Home'
import Fotter from '../home_components/Fotter'
import Support from '../pages/Support'
import HotelSearch from '../pages/HotelSearch'
const MainRoute = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
           <Route path={"/"} element={<Home/>}/>
           <Route path={"/support"} element={<Support/>}/>
           <Route path={"/search"} element={<HotelSearch/>}/>
        </Routes>
        <Fotter/>
    </div>
  )
}

export default MainRoute