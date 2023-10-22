import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../components/Logo'
import RowForm from '../../components/RowForm'
import Wrapper from './StyledComponent'



const Login = () => {
  return (
    <Wrapper className='form'>
      <section>
        <h1>
          <Logo/>
        </h1>
        <h2>Login</h2>
      </section>
      <form>
        <RowForm label='email' type='email' />
        <RowForm label='password' type='password' />
        <button className='btn form-btn'>SignIn</button>
      </form>
         Not a member yet?<Link to='/register' >Rgister</Link>
      </Wrapper>
  )
}

export default Login