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
        <form>
           <div className='row_form'>
            <label htmlFor='firstName'>firstName</label>
            <input name='firstName' className='inp-fN' id='firstName'/>
           </div>
           <RowForm />

           <button className='btns'>signUp</button>
        </form>
        <span>Already a member?</span><Link to='/login'>Login</Link>
    </div>
  )
}

export default Register