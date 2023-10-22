import React from 'react'
import styled from 'styled-components';
import Logo from '../../components/Logo'



const Landing = () => {

  return (
    <>
      <nav>
        <Logo/>
      </nav>
      <div className='page'>
        <h1 className='h1-head'>Job <span>Tracking</span> App</h1>
        <p >
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