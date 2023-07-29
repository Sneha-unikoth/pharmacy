import React from 'react';

const Register = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className='style' style={{ padding: '50px', border: '1px solid black', display: 'flex' }}>
        <div style={{ flex: '1' }}>
          <h style={{ padding: '100px' }}><b>Register</b></h>
          <p>please fill in the form to create an account</p>
          <div className='firstname' style={{ marginBottom: '10px' }}>
            <label className='Email'>Email: &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</label>
            <input type='Email' id='Email' placeholder='Email'></input>
          </div>
          <div className='password' style={{ marginBottom: '10px' }}>
            <label className='password'>password:&emsp;&emsp;&emsp;&emsp; </label>
            <input type='text' id='password' placeholder='password'></input>
          </div>
          <div className='Repeatpassword' style={{ marginBottom: '10px' }}>
            <label className='Repeatpassword'>Repeatpassword:&emsp;</label>
            <input type='password' id='Repeatpassword' placeholder='Repeatpassword'></input>
          </div>
          <div className='btn' style={{ display: 'flex', justifyContent: 'center' }}>
            <div className='button'>
              <button type='submit' style={{ backgroundColor: 'green', color: 'white',height:'30px' ,width: '100px' }}>REGISTER</button>
            </div>
          </div>
        </div>
        <div style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src="sunflower.jpeg" alt="Registration Image" style={{ maxWidth: '100%', maxHeight: '100%', height: 'auto' }} />
        </div>
      </div>
    </div>
  );
};

export default Register;
