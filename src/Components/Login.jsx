import React, { useState } from 'react';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [input, setInput] = useState({
    username: '',
    password: '',
  });
  const[formErrors,setFormErrors]=useState({});
  const[isSubmit,setIsSubmit]=useState(false);
  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

   
  const validate=(values)=>{
    var error={}
    if(!values.username){
     error.username="enter your username"
    }
    if(!values.password){
     error.password="enter your password"
    }
    
   
    return error
   }
   const handleSubmitClick =(e)=>{
    console.log(input)
    e.preventDefault();
    setFormErrors(validate(input))
    setIsSubmit(true)
    if(Object.keys(formErrors).length===0 && isSubmit){
      axios.post(`http://127.0.0.1:8000/api/Login`,input).then((response)=>{
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
      <div style={{ border: '1px solid #666', borderRadius: '8px', padding: '16px', background: '#222' }}>
        <h2 style={{ color: 'white', marginLeft: '50px' }}>Login Here</h2>
        <ToastContainer/>
        <form onSubmit={handleSubmitClick }>
          <div style={{ display: 'flex', flexDirection: 'column', color: 'white', marginBottom: '16px' }}>
            <label htmlFor="username" style={{ marginBottom: '8px' }}>username</label>
            <span style={{color:formErrors.username ? "red":""}}>{formErrors.username}</span>

            <input type="text" id="username" name="username" value={input.username} onChange={handleInputChange} style={{ width: '250px', height: '30px', backgroundColor: '#222' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', color: 'white', marginBottom: '16px' }}>
            <label htmlFor="password" style={{ marginBottom: '8px' }}>password</label>
            <span style={{color:formErrors.password ? "red":""}}>{formErrors.password}</span>

            <input type="password" id="password" name="password" value={input.password} onChange={handleInputChange} style={{ width: '250px', height: '30px', backgroundColor: '#222' }} />
          </div>
          <div style={{ marginTop: '16px' }}>
            <button style={{ background: 'white', width: '250px', height: '40px' }}>Log in</button>
          </div>
        </form>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
          <button style={{ background: '#444', width: '120px', height: '40px', color: 'white' }}>Google</button>
          <button style={{ background: '#444', width: '120px', height: '40px', color: 'white' }}>Facebook</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
