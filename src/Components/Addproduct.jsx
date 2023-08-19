import React from 'react'

const Addproduct = () => {
    return (
        <div>
        <form >
          <div className="form-row" >
            <div className="form-group col-md-6">
              <label htmlFor="name"> Medicine Name</label>
              <input
                type="name"
                className="form-control"
                id="name"
                placeholder="name"
              />
            </div>
          
          </div>
         
      
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="Description">Description</label>
              <input type="text" className="form-control" id="Description"  placeholder="Description" />
            </div>
            
            
          </div>
          <div className="form-group">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
             
            </div>
          </div>
          <div className="form-group col-md-6">
          <label htmlFor="Age">Price</label>
          <input
            type="Number"
            className="form-control"
            id="Price"
            placeholder="Price"
          />
        </div>
          <div className="mb-3">
  <label htmlFor="formFile" className="form-label">
  Upload image
  </label>
  <input className="form-control" type="file" id="formFile" />
</div>
          <button type="submit" className="btn btn-primary">
         Submit
          </button>
        </form>
      </div>
      
      )
    }
export default Addproduct
