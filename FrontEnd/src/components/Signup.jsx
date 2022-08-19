import React from 'react'
import './Signup.css'
export const Signup = () => {
  return (
    <div className='main'>
        <div className='container'>
            <h2 className='para'>Log In</h2>
            
         <p className='para'>Dont have an account?<span className='blue'>Signup</span></p>
        <br></br>
       
         <input type="text" placeholder='Email'className='inputemail' />
        <br />
       
         <input type="text" placeholder='password' className='inputpass' />
       <br />
       <input type="text" placeholder='role' className='inputpass' />
       <br />
       <br />
         <button className='buttonlogin'> Login</button>
         <br />
         <p className='blue'>Forgot password ?</p>
        </div>
    </div>
  )
}
