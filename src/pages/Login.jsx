import React from 'react'
import "./style.scss"
function Login() {
  return (
    <div>
            <div className='formContainer'>
                <div className='formWrapper'>
                        <span className='logo'>RDP messaging</span>
                        <span className='title'>Register</span>
                        <form>                          
                            <input type='email' placeholder='email'/>
                            <input type='password' placeholder='password'/>                            
                            <button>Sign in</button>
                        </form>
                        <p>You do have an account? Register</p>
                </div>
            </div>
    </div>
  )
}

export default Login
