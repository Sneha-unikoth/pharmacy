import React from 'react'
import { useNavigate} from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Cart = () => {
const navigate= useNavigate()
const {id}=useParams()
const user_id = localStorage.getItem('user_id')
const[loading,setLoadings]=useState(true) //CREATE A STATE FOR loading it is used for when click increment there render a error message for solve that we are create a loading function
  const[inputs,setInputs]=useState([]);
useEffect(()=>{
  axios.get(`http://127.0.0.1:8000/api/get_single_cart/${id}`,inputs).then((response)=>{
    if (response.data.success === true) {
      setInputs(response.data.data);
    }
  });
},[]);
console.log("data", inputs);
const increment=(cart_id)=>{
  setLoadings(true); //SET setloading as true
  console.log(cart_id)
  axios.put(`http://127.0.0.1:8000/api/CartIncrement/${cart_id}`,inputs).then((response)=>{  
    if (response.data.success === true) {
      setInputs(response.data.data);
      setLoadings(false); //setloading as false
    }
  });

}
const decrement=(cart_id)=>{

  axios.put(`http://127.0.0.1:8000/api/CartDecrement/${cart_id}`,inputs).then((response)=>{  
    if (response.data.success === true) {
      setInputs(response.data.data);
    } 
  });

}

 

console.log("data", inputs);
const remove=(cart_id)=>{
  axios.delete(`http://127.0.0.1:8000/api/Cartdelete/${cart_id}`,inputs).then((response)=>{  
    if (response.data.success === true) {
      setInputs(response.data.data);
    }
  });


  
}

const checkout=()=>{

  axios
  .get(
    // `http://127.0.0.1:8000/api/payment`,inputs).then((response) => {
      `http://127.0.0.1:8000/api/get_single_cart/${id}`,inputs).then((response)=>{
    console.log(response);
      console.log("inputs",inputs); 
    navigate(`/payment/${user_id}`)
   
  
  });
} 
  return (
    <div>
      {!loading? <>loading</> ://set condition for loading
         <div>
      
      <table class="table table-success table-striped">
  

  <thead>
    <tr>
    
      <th scope="col">Name</th>
      <th scope="col">Medicine Name</th>
      <th scope="col">date</th>
      <th scope="col">image</th>
      <th scope="col">quantity</th>
      <th scope="col">Total price</th>
      <th scope="col">Remove</th>
    </tr>
  </thead>
  <tbody>
  {inputs.map((data,key)=>(
    <tr>
      <td>{data.name}</td>
      <td>{data.medicinename}</td>
      <td>{data.date}</td>
     <td><img src={`${data.image}`} style={{height:"80px"}}></img></td>
     <td className="align-middle">
     <div className="container">
 
  {/* <button onclick={increment}>+</button> <h2 id="counting" />{" "} */}
  <button onClick= {()=>{increment(data.id)}}>+</button>{" "}
  {data.quantity}
  <button onClick= {()=>{decrement(data.id)}}>-</button>{" "}
</div>
            
            </td>
            <td>{data.price}</td>
            {/* <td> <button type="button" className="btn-close" aria-label="Close" /></td> */}
            <td className="align-middle">
            <button onClick= {()=>{remove(data.id)}} type="button" className="btn-close" aria-label="Close" />
              {/* <button onClick= {()=>{remove(data.id)}} className="btn btn-sm btn-primary">
                <i className="fa fa-times" />
              </button> */}
            </td>
    </tr>
  ))}
  </tbody>
</table>

    </div>
    
  }

  <button onClick={checkout} className='btn btn-primary btn-black'> checkout</button>
    </div>
  )
}

export default Cart
