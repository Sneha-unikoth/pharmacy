import React from 'react'
import { Routes,Route } from 'react-router-dom'
import LOGIN from '../Pages/LOGIN'
import REGISTER from '../Pages/REGISTER'
import REGISTRATION from '../Pages/REGISTRATION'
import HOMEPAGE from '../Pages/HOMEPAGE'
import PHARMACYREG from '../Pages/PHARMACYREG'
import HOMENAV from '../Pages/HOMENAV'
import ABOUT from '../Pages/ABOUT'
import ADDSYMPTOMS from '../Pages/ADDSYMPTOMS'
import UPLOADPRESCRIPTION from '../Pages/UPLOADPRESCRIPTION'
import ADDPRODUCT from '../Pages/ADDPRODUCT'
import VIEWPRODUCT from '../Pages/VIEWPRODUCT'
import VIEWPAYMENT from '../Pages/VIEWPAYMENT'
import PHARMACYHOME from '../Pages/PHARMACYHOME'
import CONTACT from '../Pages/CONTACT'
import CARTDETAILS from '../Pages/CARTDETAILS'
import ABOUTMEDICINE from '../Pages/ABOUTMEDICINE'
import ADDNOTIFICATION from '../Pages/ADDNOTIFICATION'
import VIEWNOTIFICATION from '../Pages/VIEWNOTIFICATION'
import ADDCOMPLAINTS from '../Pages/ADDCOMPLAINTS'
import VIEWCOMPLAINTS from '../Pages/VIEWCOMPLAINTS'
import ADDFEEDBACK from '../Pages/ADDFEEDBACK'
import VIEWFEEDBACK from '../Pages/VIEWFEEDBACK'
import FOOTER from '../Pages/FOOTER'



const Mainrouter = () => {
  return (
    <div>
     <Routes>
        <Route path='/Login' element={<LOGIN/>}/>
        <Route path='/Register' element={<REGISTER/>}/>
        <Route path='/Registeration' element={<REGISTRATION/>}/>
        <Route path='/'element={<HOMEPAGE/>}/>
        <Route path='/About'element={<ABOUT/>}/>
        <Route path='/Pharmacyreg'element={<PHARMACYREG/>}/>
        <Route path='/Home'element={<HOMENAV/>}/>
        <Route path='/Addsymptoms'element={<ADDSYMPTOMS/>}/>
        <Route path='/Uploadprescription'element={<UPLOADPRESCRIPTION/>}/>
        <Route path='/Addproduct'element={<ADDPRODUCT/>}/>
        <Route path='/Viewproduct'element={<VIEWPRODUCT/>}/>
        <Route path='/Viewpayment'element={<VIEWPAYMENT/>}/>
        <Route path='/Pharmacyhome'element={<PHARMACYHOME/>}/>
        <Route path='/Contact'element={<CONTACT/>}/>
        <Route path='/Cartdetails'element={<CARTDETAILS/>}/>
        <Route path='/Aboutmedicine'element={<ABOUTMEDICINE/>}/>
        <Route path='/Addnotification'element={<ADDNOTIFICATION/>}/>
        <Route path='/Viewnotification'element={<VIEWNOTIFICATION/>}/>
        <Route path='/Addcomplaints'element={<ADDCOMPLAINTS/>}/>
        <Route path='/Viewcomplaints'element={<VIEWCOMPLAINTS/>}/>
        <Route path='/Addfeedback' element={<ADDFEEDBACK/>}/>
        <Route path='/Viewfeedback' element={<VIEWFEEDBACK/>}/>
        <Route path='/Footer' element={<FOOTER/>}/>
        </Routes> 
    </div>
  )
}

export default Mainrouter
