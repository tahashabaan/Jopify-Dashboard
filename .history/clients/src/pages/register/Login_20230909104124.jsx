import React from 'react'
import Logo from '../../components/Logo'
import RowForm from '../../components/RowForm'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='form'>
      <h1>
        <Logo/>
      </h1>
      <h2>Login</h2>
      <form>
        <RowForm label='email' type='email' />
        <RowForm label='password' type='password' />
        <button className='btn form-btn'>signIn</button>
         Not a member yet?<Link to='/register' >Rgister</Link>
      </form>
      </div>
  )
}

export default Login