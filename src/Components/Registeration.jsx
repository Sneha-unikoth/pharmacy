import React, { useState } from 'react';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registeration = () => {
  const [input, setInput] = useState({
    username:'',
    password:'',
    name:'',
    address:'',
    place:'',
    age:'',
    phone:'',
    email:'',
  });
  const[formErrors,setFormErrors]=useState({});
  const[isSubmit,setIsSubmit]=useState(false); 
  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value, 
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Username:', input.username);
  //   console.log('Password:', input.password);
  //   console.log('name:', input.name);
  //   console.log('address:', input.address);
  //   console.log('phone:', input.phone);
  //   console.log('email:', input.email);
  //   setInput({
  //     username: '',
  //     password: '',
  //     name: '',
  //     address: '',
  //     phone: '',
  //     email: '',
  //   });
  // };
  const validate=(values)=>{
   var error={}
   if(!values.username){
    error.username="enter your username"
   }
   if(!values.password){
    error.password="enter your password"
   }
   if(!values.name){
    error.name="enter your name"
   }
   if(!values.address){
    error.address="enter your address"
   }
   if(!values.place){
    error.place="enter your place"
   }
   if(!values.age){
    error.age="enter your age"
   }
   if(!values.phone){
    error.phone="enter your phone"
   }
   if(!values.email){
    error.email="enter your email"
   }
   return error
  }
  const handleSubmitClick =(e)=>{
    e.preventDefault();
    setFormErrors(validate(input))
    setIsSubmit(true)
    if(Object.keys(formErrors).length===0 && isSubmit){
      axios.post(`http://127.0.0.1:8000/api/Register`,input).then((response)=>{
      console.log(response.data.message)
      toast.success(response.data.message,{
        position:"bottom-center",
        autoClose:5000,
        hideProgressBar:false,
        closeOnClick:true,
        pauseOnHover:true,
        draggable:true,
        progress:undefined,
        theme:"light",
      });
     
      
      })
      .catch((err)=>{
        console.error(err);
        toast.error("Failed",{
          position:"bottom-center",
          autoClose:5000,
          hideProgressBar:false,
          closeOnClick:true,
          pauseOnHover:true,
          draggable:true,
          progress:undefined,
          theme:"light",
        });
      }
      );
      
    }
  };
  return (
    <div style={{ background: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ border: '1px solid #666', borderRadius: '8px', padding: '16px', background: '#222',width:'530px'}}>
        <h2 style={{ color: 'white', marginLeft: '50px' }}>Register Here</h2>
        <ToastContainer/>
        <form onSubmit={handleSubmitClick }>
          <div style={{ display: 'flex', flexDirection: 'column', color: 'white', marginBottom: '16px' }}>
            <label htmlFor="name" style={{ marginBottom: '8px' }}>Name</label>
            <span style={{color:formErrors.name ? "red":""}}>{formErrors.name}</span>
            <input type="text" id="name" name="name" value={input.name} onChange={handleInputChange} onClick={()=>{setFormErrors({...formErrors,name:""})}} style={{ width: '500px', height: '30px', backgroundColor: '#222' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', color: 'white', marginBottom: '16px' }}>
            <label htmlFor="address" style={{ marginBottom: '8px' }}>address</label>
            <span style={{color:formErrors.address ? "red":""}}>{formErrors.address}</span>
            <input type="address" id="address" name="address" value={input.address} onChange={handleInputChange} onClick={()=>{setFormErrors({...formErrors,address:""})}}  style={{ width: '500px', height: '30px', backgroundColor: '#222' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', color: 'white', marginBottom: '16px' }}>
            <label htmlFor="name" style={{ marginBottom: '8px' }}>Place</label>
            <span style={{color:formErrors.place ? "red":""}}>{formErrors.place}</span>
            <input type="text" id="place" name="place" value={input.place} onChange={handleInputChange} onClick={()=>{setFormErrors({...formErrors,place:""})}} style={{ width: '500px', height: '30px', backgroundColor: '#222' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', color: 'white', marginBottom: '16px' }}>
            <label htmlFor="age" style={{ marginBottom: '8px' }}>Age</label>
            <span style={{color:formErrors.age ? "red":""}}>{formErrors.age}</span>
            <input type="text" id="age" name="age" value={input.age} onChange={handleInputChange} onClick={()=>{setFormErrors({...formErrors,age:""})}} style={{ width: '500px', height: '30px', backgroundColor: '#222' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', color: 'white', marginBottom: '16px' }}>
            <label htmlFor="phone" style={{ marginBottom: '8px' }}>phone</label>
            <span style={{color:formErrors.phone ? "red":""}}>{formErrors.phone}</span>
            <input type="number" id="phone" name="phone" value={input.phone} onChange={handleInputChange} onClick={()=>{setFormErrors({...formErrors,phone:""})}}  style={{ width: '500px', height: '30px', backgroundColor: '#222' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', color: 'white', marginBottom: '16px' }}>
            <label htmlFor="email" style={{ marginBottom: '8px' }}>email</label>
            <span style={{color:formErrors.email ? "red":""}}>{formErrors.email}</span>
            <input type="email" id="email" name="email" value={input.email} onChange={handleInputChange} onClick={()=>{setFormErrors({...formErrors,email:""})}}  style={{ width: '500px', height: '30px', backgroundColor: '#222' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', color: 'white', marginBottom: '16px' }}>
            <label htmlFor="username" style={{ marginBottom: '8px' }}>Username</label>
            <span style={{color:formErrors.username ? "red":""}}>{formErrors.username}</span>
            <input type="text" id="username" name="username"  value={input.username} onChange={handleInputChange}onClick={()=>{setFormErrors({...formErrors,username:""})}}  style={{ width: '500px', height: '30px', backgroundColor: '#222' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', color: 'white', marginBottom: '16px' }}>
            <label htmlFor="password" style={{ marginBottom: '8px' }}>password</label>
            <span style={{color:formErrors.password ? "red":""}}>{formErrors.password}</span>
            <input type="password" id="password" name="password" value={input.password} onChange={handleInputChange}onClick={()=>{setFormErrors({...formErrors,password:""})}}  style={{ width: '500px', height: '30px', backgroundColor: '#222' }} />
          </div>
          <div style={{ marginTop: '16px' }}>
            <button style={{ background: 'white', width: '250px', height: '40px' }}>submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registeration;
