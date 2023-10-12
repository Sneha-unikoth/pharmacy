import React, { useState } from 'react'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';

const Search = ({search}) => {
  const usr_id=localStorage.getItem('user_id')
  const [isSubmit,setIssubmit]=useState(false)
  const[inputs,setInputs]=useState({
    patient_id:usr_id,
  });
  

  const setSearch=(event)=>{
    console.log(event.target);
    const name=event.target.name;
    const value=event.target.value;
    setInputs({...inputs,[name]:value});
    console.log(inputs);
  }
  const searchSubmit=(event)=>{
    console.log(inputs);
    event.preventDefault();
    search(inputs)
 

  };
  return (
    <div>
    <nav className="navbar bg-body-tertiary">
  <div className="container-fluid" >
  <ToastContainer/>
    
    <form className="d-flex" role="search"onSubmit={searchSubmit} style={{border:'2px solid black'}} >
      <input
        className="form-control me-2"
        type="search"
        name="search"
        placeholder="Search"
        value={inputs.search}
        onChange={setSearch}
        aria-label="Search"
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  </div>
</nav>
  
    </div>
  )
}

export default Search
