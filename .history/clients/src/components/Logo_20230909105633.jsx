import { Link } from 'react-router-dom'
import imgLogo from '../assets/images/logo.svg'


import React from 'react'

const Logo = () => {
  return (
    <div>
      <Link to='/'>
        <img src={imgLogo} alt ='logo'/>
      </Link>
    </div>
  )
}

export default Logo
