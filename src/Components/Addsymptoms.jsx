import React, { useState } from "react";
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
const Addsymptoms = () => {
  const user_id = localStorage.getItem('pharmacy_id')
  const [isSubmit, setIssubmit] = useState(false)
  const [inputs, setInputs] = useState({

    patient_id: user_id,


  });
  const setRegister = (event) => {
    console.log(event.target);
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
    console.log(inputs);
  };
  
  const registerSubmit = (event) => {
    console.log(inputs);
    event.preventDefault();




    axios.post('http://127.0.0.1:8000/api/symptoms', inputs).then((data) => {
      console.log(data);
      // console.log(data.response.data.message);
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
    <div className='row' style={{ border: '2px solid black' }}>
      <ToastContainer />
      <form onSubmit={registerSubmit}>
        <div className="form-row" >
          <div className="form-group col-md-6">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={inputs.name || ""}
              onChange={setRegister}
              className="form-control"
              id="name"
              placeholder="name"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="age">Age</label>
            <input
              type="Number"
              name="age"
              value={inputs.age || ""}
              onChange={setRegister}
              className="form-control"
              id="age"
              placeholder="age"
            />
          </div>
        </div>


        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="symptoms">Symptoms</label>
            <input type="text"
              name="symptoms"
              value={inputs.symptoms || ""}
              onChange={setRegister}
              className="form-control" id="symptoms" placeholder="symptoms" />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="gender">gender</label>
            <select id="gender" name="gender" 
              onChange={setRegister} className="form-control">
              <option value="">Select Gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Transgender">Transgender</option>
            </select>
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

export default Addsymptoms
