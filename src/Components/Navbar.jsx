import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
  const navigate = useNavigate()
  const logout = () => {
      localStorage.removeItem("name")
      localStorage.removeItem("loginId")
      localStorage.removeItem("role")
      localStorage.removeItem("user_id")
      navigate('/')}
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid" >
    
    <a class="navbar-brand" href="#">Medicine finder</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
       
        <li class="nav-item">
          <a class="nav-link" href="/About">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Addsymptoms">Add symptoms</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Uploadprescription">upload prescription</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href='Viewnotification'>View notification</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href='Addfeedback'>Add feedback</a>
        </li>
        
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Medicine
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="Viewproduct">view Medicine</a></li>
            {/* <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li> */}
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Contact">contact</a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link" href="Cart/id">View cart</a>
        </li> */}
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
  )
}

export default Navbar
