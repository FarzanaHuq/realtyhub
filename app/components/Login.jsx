import React from 'react'
import LoginInputContainer from './Login/LoginInputContainer'

const Login = () => {
  return (
    <div>
        <p className='text-3xl font-bold text-center'>Log in</p>
        <p className='text-center mt-3'>Welcome back!</p>
        <LoginInputContainer />
    </div>
  )
}

export default Login