import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../components/Logo'
import RowForm from '../../components/RowForm';
import Wrapper from './StyledComponent'



const Register = () => {
  return (
    <Wrapper  className='form'>
        <h1>
          <Logo/>
        </h1>
        <h2>Register</h2>
        <form>
           <RowForm label='firstName' type='text'     className='form-input'/>
           <RowForm label='lastName'  type='text'     className='form-input'/>
           <RowForm label='location'  type='text'     className='form-input'/>
           <RowForm label='email'     type='email'    className='form-input'/>
           <RowForm label='password'  type='password' className='form-input'/>
           <button className='btn form-btn'>SignUp</button>
        </form>
        <span>Already a member?</span><Link to='/login'>Login</Link>
    </Wrapper>
  )
}

export default Register