import React from 'react'
import './Signup.css'
export const Signup = () => {
 
 
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [role,setRole] = useState("");
  const navigate =useNavigate()
  const {isSignUpSuccess,signUpLoading}= useSelector((state)=>state.signup)
  // console.log('skdfjlasdf',signUpLoading);
  const dispatch = useDispatch((s)=>s.signup);

  const handleSignup =()=>{
        const userData = {
    
        email:email,
        password:password,
        role:role
      
      
      }
      // console.log(userData);
      dispatch(registerUser(userData));
    }
    
    if(isSignUpSuccess){
      navigate('/login');
    }
  return (
    <div className='main'>
        <div className='container'>
            <h2 className='para'>Log In</h2>
            
         <p className='para'>Dont have an account?<span className='blue'>Signup</span></p>
        <br></br>
       
         <input type="text" placeholder='Email'className='inputemail'onChange={(e)=>setEmail(e.target.value)} />
        <br />
       
         <input type="text" placeholder='password' className='inputpass' onChange={()=>setPassword(e.target.value)} />
       <br />
       <input type="text" placeholder='role' className='inputpass' onChange={(e)=>setRole(e.target.value)} />
       <br />
       <br />
         <button className='buttonlogin'> Login</button>
         <br />
         <p className='blue' onClick={handleSignup}>Forgot password ?</p>
        </div>
    </div>
  )
}
