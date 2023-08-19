import React from 'react'

const Uploadprescription = () => {
  return (
    <div>
      <div>
    <form>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="name">Name</label>
          <input
            type="name"
            className="form-control"
            id="name"
            placeholder="name"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="Age">Age</label>
          <input
            type="Number"
            className="form-control"
            id="Age"
            placeholder="Age"
          />
        </div>
      </div>
     
  
      <div className="form-row">
        
        <div className="form-group col-md-4">
          <label htmlFor="Sex">Sex</label>
          <select id="Sex" className="form-control">
            <option selected="">Sex</option>
            <option>Female</option>
            <option>Male</option>
            <option>Transgender</option>
          </select>
        </div>
        <div className="mb-3">
  <label htmlFor="formFile" className="form-label">
  Upload prescription
  </label>
  <input className="form-control" type="file" id="formFile" />
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
    </div>
  )
}

export default Uploadprescription
