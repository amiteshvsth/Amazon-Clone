import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
const Login = () => {

  const  [email, setEmail]=useState('');
  const  [password, setPassword]=useState('');
  const signIn = e => {
    e.preventDefault();
    //some fancy firebase login
    
  } 
  const register  = e => {
    e.preventDefault();
    // do some fancy firebase register
  } 
  return (
    <div className='login'>
        <Link to='/'>
        <img className='login_logo'src="https://wallpapercave.com/wp/wp7771200.png" alt="" />
        </Link>
        <div className="login_container">
            <h1>Sign In</h1>
            
            <form action="">
            <h5>Email</h5>
            <input type="
            text" value={email}  onChange={e => setEmail(e.target.value)}/>
            <h5>Password</h5>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            <button type='submit' onClick={signIn}className='login_signin'>Sign In</button>
            </form>
            <p>
                By signing in you agree to the AMAZON CLONE Conditions of the use & sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice
            </p>
            <button onClick={register}className='login_register'>Create our Amazon Account</button>
        </div>
    </div>
  )
}

export default Login