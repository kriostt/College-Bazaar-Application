import React, { useState } from 'react'
import "./style.scss"
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase';
function Login() {

  const [err,setErr] = useState(false)
  const navigate = useNavigate()

  const handleSubmit  = async (e) =>{
    e.preventDefault()   
    const email = e.target[0].value;
    const password = e.target[1].value;
    

    try{
        await signInWithEmailAndPassword(auth, email, password)
        navigate("/")
    }
    catch(err){
      setErr(true);
    }         
  };


  return (
    <div>
            <div className='formContainer'>
                <div className='formWrapper'>
                        <span className='logo'>RDP messaging</span>
                        <span className='title'>Register</span>
                        <form onSubmit={handleSubmit}>                          
                            <input type='email' placeholder='email'/>
                            <input type='password' placeholder='password'/>                            
                            <button>Sign in</button>
                            {err && <span>Invalid User Name or Password</span>}
                        </form>
                        <p>You do have an account?<Link to="/register">Register</Link> </p>
                </div>
            </div>
    </div>
  )
}

export default Login
