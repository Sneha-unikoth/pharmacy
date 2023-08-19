import React from 'react'

const Addcomplaints = () => {
  return (
    <div>
      <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
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
    <label htmlFor="complaint" className="form-label">
      complaint
    </label>
    <input
      type="complaint"
      className="form-control"
      id="complaint"
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

export default Addcomplaints
