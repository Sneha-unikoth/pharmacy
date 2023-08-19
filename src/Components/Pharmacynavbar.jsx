import React from 'react'

const Pharmacynavbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Medicine finder</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
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
       
        <li class="nav-item">
          <a class="nav-link" href="Contact">contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Pharmacynavbar
