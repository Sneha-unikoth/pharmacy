import React,{useState} from 'react'
import Viewproduct from '../Components/Viewproduct'
import Navbar from '../Components/Navbar'
import Search from '../Components/Search'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';

const VIEWPRODUCT = () => {

const[inputs,setInputs]=useState(null);
const searchData= (values)=>{
console.log("values",values);
axios.post('http://127.0.0.1:8000/api/search', values).then((data) => {
  console.log(data);
 
  setInputs(data.data.data);


})
}

  return (
    <div>
      <Navbar/>
      <Search search={searchData}/>
      <Viewproduct productdetails={inputs}/>
  
    </div>
  )
}

export default VIEWPRODUCT
