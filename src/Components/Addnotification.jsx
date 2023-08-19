import React from 'react'

const Addnotification = () => {
  return (
    <div>
    <form style={{color:"red",border:'2px solid black'}}>
  <div className="mb-3" >
    <label htmlFor="date" className="form-label">
     Date
    </label>
    <input
      type="date"
      className="form-control"
      id="date"
      aria-describedby="date"
    />
   
  </div>
  <div className="mb-3">
    <label htmlFor="heading" className="form-label">
      Notification
    </label>
    <input
      type="Notification"
      className="form-control"
      id="Notification"
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
