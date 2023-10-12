import React, { useState } from 'react'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';


const Addnotification = () => {
  const usr_id=localStorage.getItem('pharmacy_id')
  const [isSubmit,setIssubmit]=useState(false)
  const[inputs,setInputs]=useState({
        pharmacy_id:usr_id,
  });

  const setNotification=(event)=>{
    console.log(event.target);
    const name=event.target.name;
    const value=event.target.value;
    setInputs({...inputs,[name]:value});
    console.log(inputs);
  }
  const notificationSubmit=(event)=>{
    console.log(inputs);
    event.preventDefault();

    axios.post('http://127.0.0.1:8000/api/notification', inputs).then((data) => {
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
    <form onSubmit={notificationSubmit} style={{border:'2px solid black'}}>
  <div className="mb-3" >
    <label htmlFor="date" className="form-label">
     Date
    </label>
    <input
      type="date"
      name="date"
      value={inputs.date || ""}
      onChange={setNotification}
      className="form-control"
      id="date"
      aria-describedby="date"
    />
   
  </div>
  <div className="form-group col-md-6">
            <label htmlFor="name">Notification</label>
            <input
              type="text"
              name="notification"
              value={inputs.notification || ""}
              onChange={setNotification}
              className="form-control"
              id="notification"
              placeholder="notification"
            />
          </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">
      Check me out
    </label>
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>


    </div>
  )
}

export default Addnotification
