import React from 'react'
import { Routes,Route } from 'react-router-dom'
import LOGIN from '../Pages/LOGIN'
import REGISTER from '../Pages/REGISTER'
import REGISTRATION from '../Pages/REGISTRATION'
import HOMEPAGE from '../Pages/HOMEPAGE'
import PHARMACYREG from '../Pages/PHARMACYREG'

const Mainrouter = () => {
  return (
    <div>
     <Routes>
        <Route path='/Login' element={<LOGIN/>}/>
        <Route path='/Register' element={<REGISTER/>}/>
        <Route path='/Registeration' element={<REGISTRATION/>}/>
        <Route path='/'element={<HOMEPAGE/>}/>
        <Route path='/Pharmacyreg'element={<PHARMACYREG/>}/>


        </Routes> 
    </div>
  )
}

export default Mainrouter
