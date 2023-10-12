import React, { useState } from 'react'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';


const Addfeedback = () => {
const usr_id=localStorage.getItem('user_id')
const [isSubmit,setIssubmit]=useState(false)
const[inputs,setInputs]=useState({
  patient_id:usr_id,
});

const setFeedback=(event)=>{
  console.log(event.target);
  const name=event.target.name;
  const value=event.target.value;
  setInputs({...inputs,[name]:value});
  console.log(inputs);
}
const feedbackSubmit=(event)=>{
  console.log(inputs);
  event.preventDefault();

  axios.post('http://127.0.0.1:8000/api/feedback', inputs).then((data) => {
    console.log(data);
    
    toast(data.data.message, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });


  }).catch((err) => {
    console.log(err);
    toast(err.response.data.message, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  })

};
  return (

    <div>
            <ToastContainer/>
    <form onSubmit={feedbackSubmit} style={{border:'2px solid black'}}>
      <div className="form-row" >
        {/* <div className="form-group col-md-6">
          <label htmlFor="name">Name</label>
          <input
            type="name"
            name="name"
            value={inputs.name}
            onChange={setFeedback}
            className="form-control"
            id="name"
            placeholder="name"
          />
        </div> */}
       
      </div>

      <div className="form-row" >
        {/* <div className="form-group col-md-6">
          <label htmlFor="name">Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            placeholder="date"
          />
        </div> */}
       
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="feedback">Feedback</label>
          <input type="text" 
          name='feedback'
          value={inputs.feedback}
          onChange={setFeedback}
          className="form-control"
           id="feedback"  placeholder="feedback" />
        </div>
     
      </div>
      <div className="form-group">
        <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck" />
         
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
     Submit
      </button>
    </form>
    </div>
  )
}

export default Addfeedback
