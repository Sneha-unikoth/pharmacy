import React,{useEffect,useState}from 'react';
import axios from "axios";

const Viewnotification = () => {
  const[inputs,setInputs]=useState([]);
  useEffect(()=>{
    axios
    .get('http://127.0.0.1:8000/api/get_all_notification').then((response)=>{
      if(response.data.success===true){
        setInputs(response.data.data);
      }
    });
  },[]);
  console.log("data",inputs);
  return (
    <div>
   
    {inputs.map((data,key)=>(
       <div className="card text-bg-info mb-3" style={{ maxWidth: "18rem",display:"flex" }}>
  <div className="card-header">{data.date}</div>
  <div className="card-body">
    <h5 className="card-title"></h5>
    <p className="card-text">
    {data.notification}    </p>
  </div>
</div>
))}
    </div>
  )
}

export default Viewnotification
