import React,{useEffect,useState}from 'react';
import axios from "axios";


const Viewpayment = () => {
  const[inputs,setInputs]=useState([]);
  useEffect(()=>{
 
    axios.get(`http://127.0.0.1:8000/api/get_all_payment`,inputs).then((response)=>{
      if(response.data.success===true){
        setInputs(response.data.data);
      }
    });
  },[]);
  console.log("data",inputs);
  return (
    <div>
      
      <table class="table table-success table-striped">
  

  <thead>
    <tr>
{/*     
      <th scope="col">name</th>
      <th scope="col">product_name</th>
      <th scope="col">quantity</th>
      <th scope="col">price</th> */}
      <th scope="col">patient_id </th>
      <th scope='col'>total_amount</th>
    </tr>
  </thead>
  <tbody>
  {inputs.map((data,key)=>(
    <tr>
   
      {/* <td>{data.name}</td>
      <td>{data.product_nmae}</td>
      <td>{data.quantity}</td>
      <td>{data.price}</td> */}
       <td>{data.patient_id}</td>
      <td>{data.total_amount}</td>
    
    </tr>
  
  ))}
  </tbody>
</table>

    </div>
  )
}

export default Viewpayment

