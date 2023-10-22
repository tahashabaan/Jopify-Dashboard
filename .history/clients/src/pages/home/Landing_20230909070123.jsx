import React from 'react'
import styled from 'styled-components';
import Logo from '../../assets/images/logo'

const Landing = () => {
  
  return (
    <>
      <nav>
        <img src={Logo} alt ='logo'/>
      </nav>
      <section className='content'>
        <h1>Jop Traccking App</h1>
      </section>
      
    </>
  )
}

export default Landing