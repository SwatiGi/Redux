import React from 'react'
import "./Auth.css"
import { useDispatch } from 'react-redux'
import { authAction } from '../store'
const Auth = () => {
    const dispatch= useDispatch()
  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(authAction.login())
  }
  return (
    <div style={{margin:"auto",width:"80%",height:"auto",padding:"20px"}}>
      <h1>Login</h1>  
      <form onSubmit={loginHandler} >
        <div  className='input-div'>
          <label htmlFor="email">Email</label>
          <input type="email" id='email' />
        
        </div>
         <div className='input-div'>
          <label htmlFor="password">Password</label>
          <input type="password" id='password' />
        
        </div>
        <button className='login'>Login</button>
      </form>      
    </div>
  )
}

export default Auth