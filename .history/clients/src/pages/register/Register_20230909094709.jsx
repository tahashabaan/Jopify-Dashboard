import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../components/Logo'
import RowForm from '../../components/RowForm'
const Register = () => {
  return (
    <div>
        <h1>
          <Logo/>
        </h1>
        <h1>Register</h1>
        <form className='form'>
           <RowForm label='firstName' type='text' className={form-input}/>
           <RowForm label='lastName'  type='text'     className={form-input}/>
           <RowForm label='location'  type='text'     className={form-input}/>
           <RowForm label='email'     type='email'    className={form-input}/>
           <RowForm label='password'  type='password' className={form-input}/>
           <button className='btn btn-register'>signUp</button>
        </form>
        <span>Already a member?</span><Link to='/login'>Login</Link>
    </div>
  )
}

export default Register