import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';



const Homepage = () => {
  return (
    <div className='k1'>
    <h1>Pharmacy</h1>
    <div className='k2'>
      <div className='nav'>
        <ul style={{ listStyle: 'none'}}>
             
<ul class="nav nav-tabs">
 
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/Login">Login</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Register
          </button>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="Registeration">user register</a></li>
            <li><a class="dropdown-item" href="Pharmacyreg">pharmacy register</a></li>
           
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  
  
</ul>
        
           
      </ul>
      </div>
     



        
    </div> 
     
    </div>
  )
}

export default Homepage
