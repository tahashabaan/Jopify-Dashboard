import React from 'react'
import Logo from '../../components/Logo'
import RowForm from '../../components/RowForm'

const Login = () => {
  return (
    <div>
      <h1>
        <Logo/>
      </h1>
      <h2>Login</h2>
      <form>
        <RowForm label='email' type='email'/>
        <RowForm label='password'>
      </form>

      </div>
  )
}

export default Login