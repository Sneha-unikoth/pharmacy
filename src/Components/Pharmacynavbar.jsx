import React from 'react'
import {Link,useNavigate } from 'react-router'

const Pharmacynavbar = () => {
  const navigate=useNavigate()
  const logout = () =>{
    localStorage.removeItem("name")
    localStorage.removeItem("loginId")
    localStorage.removeItem("role")
    localStorage.removeItem("user_id")
    navigate('/')


  }
  return (
    <div>
      <div id='nav'>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Medicine finder</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="Viewsymptoms">Viewsymptoms</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="Addproduct">Add product</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Viewpayment">Check payment</a>
        </li>
        <li class="nav_item">
            <a class="nav-link" href='Addnotification'>Add notification</a>
        </li>
        <li class="nav_item">
            <a class="nav-link" href='Viewfeedback'>View feedback </a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link" href="Contact">contact</a>
        </li>
        
      </ul>
      <div className="navbar-nav ml-auto py-0">
      <a onClick={logout} className="nav-item nav-link">
        Logout
      </a>
      
    </div>
    </div>
  </div>
</nav>
</div>
    </div>
  )
}

export default Pharmacynavbar
