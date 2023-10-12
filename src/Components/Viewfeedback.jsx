import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeedback } from '../Redux/Slice/Feedbackslice';


const Viewfeedback = () => {
  const dispatch = useDispatch()
  const {feedback} = useSelector(state=>state.feedback)
  console.log(feedback);
const[inputs,setInputs]=useState([]);
useEffect(()=>{

  dispatch(fetchFeedback())
  // axios.get('http://127.0.0.1:8000/api/get_all_feedback').then((response)=>{
  //   if(response.data.success===true){
  //     setInputs(response.data.data);
  //   }
  // });
},[]);
  return (
    <div>
      
      <table className="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Date</th>
      <th scope="col">Feedback</th>
    </tr>
  </thead>
  <tbody>
  {feedback?.data?.map((data,key)=>(
    <tr>
     
      <td>{data.name}</td>
      <td>{data.date}</td>
      <td>{data.feedback}</td>
    </tr>
   
   ))}
  </tbody>
</table>
   
    </div>
  )
}

export default Viewfeedback
