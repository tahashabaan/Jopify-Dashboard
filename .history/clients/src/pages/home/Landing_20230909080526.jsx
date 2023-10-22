import React from 'react'
import styled from 'styled-components';
import Logo from '../../components/Logo'



const Landing = () => {

  return (
    <>
      <nav>
        <Logo/>
      </nav>
      <div className='content'>
        <h1 className='h1-head'>Job <span></span> App</h1>
        <p className='description'>
          I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue bottle single-origin coffee chia. Aesthetic post-ironic venmo, quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch narwhal.
        </p>
        <section className='registre'>
          <button className='btns btn-login'>Login</button>
          <button className='btns btn-register'>Register</button>
        </section>
      </div>
      
    </>
  )
}

export default Landing