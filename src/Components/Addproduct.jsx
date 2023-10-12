import axios from 'axios';
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';

const Addproduct = () => {
  const user_id=localStorage.getItem('pharmacy_id')
  // const [isSubmit,setIssubmit]=useState(false)
  const [img,setImg]=useState()
  const[Inputs,setInputs]=useState({
    pharmacy_id:user_id,
    // name: "",
    // price: "",
    // description: "",
   
  });

  const setProduct=(event)=>{
    console.log(event.target);
    const name=event.target.name;
    const value=event.target.value;
    setInputs({...Inputs,[name]:value});
    console.log(Inputs);
  };
  const productSubmit=(event)=>{
    event.preventDefault();
    const formData=new FormData();
    formData.append('image',Inputs.image);
    formData.append('name',Inputs.name);
    formData.append('description',Inputs.description);
    formData.append('price',Inputs.price);
    formData.append('pharmacy_id',Inputs.pharmacy_id)

    axios.post('http://127.0.0.1:8000/api/medicine',formData).then((data)=>{
      console.log(data);
      toast(data.data.message,{
       position:"bottom-center",
       autoClose:5000,
       hideProgressBar:false,
       closeOnClick:true,
       puaseOnHover:true,
       draggable:true,
       progress:undefined,
       theme:"light",

      });
    }).catch((err) => {
      console.log(err);
      toast(err.response.data.message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    })

  };

    return (
        <div>
           <ToastContainer />
      <form onSubmit={productSubmit}>
       
          <div className="form-row" >
            <div className="form-group col-md-6">
              <label htmlFor="name"> Medicine Name</label>
              <input
                type="text"
                value={Inputs.name}
                onChange={setProduct}
                className="form-control"
                id=""
                placeholder="name"
                name='name'
              />
            </div>
          
          </div>
         
      
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="description">Description</label>
              <input type="text" 
              value={Inputs.description} 
              onChange={setProduct}
              className="form-control"
               id=""
               rows={4}
               name='description'
                 placeholder="description" />
            </div>
            
            
          </div>
          <div className="form-group">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
             
            </div>
          </div>
          <div className="form-group col-md-6">
          <label htmlFor="price">price</label>
          <input
            type="Number"
            value={Inputs.price} 
            onChange={setProduct}
            className="form-control"
            name="price"
            id=""
            placeholder="price"
          />
        </div>
          <div className="mb-3">
  <label htmlFor="formFile" className="form-label">
  Upload image
  </label>
  <input
              className="form-control"
              type="file"
              name="image"
              onChange={(e)=>setInputs({...Inputs,image:e.target.files[0]})}
              // onChange={(e) => { console.log(e.target.files[0]); setImg(e.target.files[0]) }}
            />
</div>
          <button type="submit" className="btn btn-primary">
         Submit
          </button>
        </form>
      </div>
      
      )
    }
export default Addproduct
