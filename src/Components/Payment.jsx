
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from "react";

const Payment = () => {
  const navigate= useNavigate()
  const {id}=useParams()
  const user_id = localStorage.getItem('user_id')

    
 
  const [datas, setdatas] = useState({
 
    patient_id:user_id,
            
  });

  
  const [total, setTotal] = useState([]);

  console.log("data",total)
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/all_price/${id}`,total).then((response)=>{
        if (response.data.success === true) {
         setTotal(response.data.data);
        }
      });
  }, []);
  const [inputs, setInputs] = useState([]);
  useEffect(() => {
   
    axios.get(`http://127.0.0.1:8000/api/get_single_cart/${id}`,inputs).then((response)=>{
        if (response.data.success === true) {
          setInputs(response.data.data);
        }
      });
  }, []);

    const pay=()=>{  
    const value=total.price 
    console.log("datas",datas)
    setdatas({...datas,total_amount:value})
       console.log("value",value)
    axios
    .post(
      `http://127.0.0.1:8000/api/payment`,datas).then((response) => {
      
        if (response.data.success === true) {
          setInputs(response.data.data);
        }
      console.log(response);
      navigate(`/Popup`)

      
   
        
    
    });
  }
  return (
    <div>
         <div className="col-lg-4">
   
   <form className="mb-5" action="">
    
   </form>
 
   <div className="card border-secondary mb-5" >
     <div className="btn btn-primary btn-black">
       <h4 className="font-weight-semi-bold m-0">Payment</h4>
     </div>
     <div className="card-body">
       <div className="d-flex justify-content-between mb-3 pt-1">
         <h6 className="font-weight-medium">name</h6>
         <h6 className="font-weight-medium">product_name </h6>
         <h6 className="font-weight-medium">quantity</h6>
         <h6 className="font-weight-medium">price </h6>
         <h6 className="font-weight-medium">date </h6>
         <h6 className="font-weight-medium">image</h6>
       
       </div>

       {inputs.map((data,key)=>(
       <div className="d-flex justify-content-between">
         <h6 className="font-weight-medium">{data.name}</h6>
         <h6 className="font-weight-medium">{data.medicinename}</h6>
         <h6 className="font-weight-medium">{data.quantity}</h6>
         <h6 className="font-weight-medium">{data.price} </h6>
         <h6 className="font-weight-medium">{data.date} </h6>
         <h6 className="font-weight-medium"><img src={`${data.image}`} style={{height:"80px"}}></img></h6>
      
       </div>
       ))}
     </div>
    

     <div className="card-footer border-secondary bg-transparent">
       <div className="d-flex justify-content-between mt-2">
         <h5  className="font-weight-bold">Total</h5>
        
         <h5  className="font-weight-bold">{total.price}</h5>
     
       </div>
       {/* <button className="btn btn-block btn-primary my-3 py-3"> */}
       <button onClick={pay} className="btn btn-primary px-3">
  
           Pay Amount
          </button>
     </div>
  
   </div>
 
 </div>
    </div>
  )
}

export default Payment
