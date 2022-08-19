import React from 'react'
import './Login.css'
export const Login = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [role,setRole] = useState('')
  const {isAuthenticate,token} = useSelector((store)=>store.login)
  const dispatch = useDispatch((store)=>store.login);
  const navigate = useNavigate()
  const handleLogin = ()=>{
    const loginCridential = {
      email,
      password,
      role
    }
    // console.log(loginCridential);
    dispatch(login(loginCridential,dispatch));
  }

  return (
    <div className='main'>
      <div className="logoBanner">
        
      </div>
      <div className='container'>
          <h2 className='parasign'>Enter your email</h2>
          
      <p className='para'>You’ll use it to log in to Commonstock</p>
      <br></br>
    
      <input type="text" placeholder='Email'className='inputemail' onChange={(e)=>setEmail(e.target.value)} />
    <br />
    <input type="text" placeholder='password'className='inputemail' onChange={(e)=>setPassword(e.target.value)}/>
    <br />
    <input type="text" placeholder='role'className='inputemail' onChange={(e)=>setRole(e.target.value)} />
    <br />
    <br />
      <button className='buttonlogin' onClick={handleLogin}>Next</button>
    
      </div>

    </div>
  )
}
