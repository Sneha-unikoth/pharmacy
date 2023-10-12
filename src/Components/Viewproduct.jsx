import { blue } from '@mui/material/colors'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { useParams } from 'react-router-dom'

  const Viewproduct = ({productdetails}) => {
  console.log("productdetails",productdetails)
  const navigate= useNavigate()
  const {id}=useParams()
  const user_id = localStorage.getItem('user_id')
 
  const [inputs, setInputs] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/get_all_medicine').then((response) => {
      if (response.data.success === true) {
        console.log("response", response)
        setInputs(response.data.data);
      
      }
    });
  }, []);

  console.log("data", inputs);
  const addcart=(id)=>{
   console.log(id)
    const medicine={
      medicine_id:id,
      patient_id:user_id,
    }
  
    console.log(medicine)
    axios.post(`http://127.0.0.1:8000/api/cart`,medicine).then((response) => {
        console.log("response",response)
        // setData(response.data.data);
        navigate(`/Cart/${user_id}`)
          
      
      }).catch((error)=>{
        console.log(error);
      })
  }
  return (

    <div>
  
      <div className="row row-cols-1 row-cols-md-3 g-4">
     
   
{productdetails==null ? 
 inputs.map((data) => (

        
  <div className="col"  style={{marginTop:'110px'}}>
    <img className="w-100 h-100" src={`${data.image}`} style={{ width: '10px', height: '5px' }} />

    <div className="card-body">
      <h5 className="card-title">{data.name}</h5>
      <p className="card-text">
        {data.description}
      </p>
    </div>
    <div className="card-footer">
      <small className="text-muted">{data.price}</small>
    </div>
    {/* <a href="#" className="btn btn-primary">
      ADD TO CART
    </a> */}
     <button onClick={()=>{addcart(data.id)}} className="btn btn-primary px-3">

<i className="fa fa-shopping-cart mr-1" /> Add To Cart
</button> 
  </div>
))
:
productdetails.map((data) => (

        
  <div className="col"  style={{marginTop:'110px'}}>
    <img className="w-100 h-100" src={`/media/${data.image}`} style={{ width: '10px', height: '5px' }} />

    <div className="card-body">
      <h5 className="card-title">{data.name}</h5>
      <p className="card-text">
        {data.description}
      </p>
    </div>
    <div className="card-footer">
      <small className="text-muted">{data.price}</small>
    </div>
   
     <button onClick={()=>{addcart(data.id)}} className="btn btn-primary px-3">

<i className="fa fa-shopping-cart mr-1" /> Add To Cart
</button> 
  </div>
))

}
    
     
    
          
      </div>
    </div>
  )
}
export default Viewproduct