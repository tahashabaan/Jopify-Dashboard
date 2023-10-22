import React from 'react'
import Logo from '../../components/Logo'
import RowForm from '../../components/RowForm'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <h1>
        <Logo/>
      </h1>
      <h2>Login</h2>
      <form>
        <RowForm label='email' type='email' className={null}/>
        <RowForm label='password' type='password' className={null}/>
        <button className='btn btn-signIn'>signIn</button>
         Not a member yet?<Link to='/register'>Rgister</Link>
      </form>
      </div>
  )
}

export default Login