import React from 'react'

const Pharmacyfooter = () => {
    return (
        <div id='footerstyle'>
            <div id='footercolor'>
           <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="Viewsymptoms" className="nav-link px-2 text-muted">
              View symptoms
            </a>
          </li>
          <li className="nav-item">
            <a href="Addproduct" className="nav-link px-2 text-muted">
              Add product
            </a>
          </li>
          <li className="nav-item">
            <a href="Viewpayment" className="nav-link px-2 text-muted">
              check payment
            </a>
          </li>
          <li className="nav-item">
            <a href="Addnotification" className="nav-link px-2 text-muted">
              Add notification
            </a>
          </li>
          <li className="nav-item">
            <a href="Viewfeedback" className="nav-link px-2 text-muted">
              View Feedback
            </a>
          </li>
         
     
          <li className="nav-item">
            <a href="Logout" className="nav-link px-2 text-muted">
              Logout
            </a>
          </li>
        </ul>
        <p className="text-center text-muted" >Medicine finder</p>
      </footer>
    </div>
        </div>
        </div>
      )
    }

export default Pharmacyfooter
