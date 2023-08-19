import React from 'react'

const Addfeedback = () => {
  return (
    <div>
       <form>
      <div className="form-row" >
        <div className="form-group col-md-6">
          <label htmlFor="name">Name</label>
          <input
            type="name"
            className="form-control"
            id="name"
            placeholder="name"
          />
        </div>
       
      </div>

      <div className="form-row" >
        <div className="form-group col-md-6">
          <label htmlFor="name">Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            placeholder="date"
          />
        </div>
       
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="feedback">Feedback</label>
          <input type="text" className="form-control" id="feedback"  placeholder="feedback" />
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

export default Addfeedback
