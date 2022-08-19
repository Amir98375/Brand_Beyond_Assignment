import React from 'react'
import './Login.css'
export const Login = () => {
  return (
    <div className='main'>
      <div className="logoBanner">
        
      </div>
      <div className='container'>
          <h2 className='parasign'>Enter your email</h2>
          
      <p className='para'>You’ll use it to log in to Commonstock</p>
      <br></br>
    
      <input type="text" placeholder='Email'className='inputemail' />
    <br />
    <input type="text" placeholder='password'className='inputemail' />
    <br />
    <input type="text" placeholder='role'className='inputemail' />
    <br />
    <br />
      <button className='buttonlogin'>Next</button>
    
      </div>

    </div>
  )
}
