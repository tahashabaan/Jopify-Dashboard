import React from 'react'
import styled from 'styled-components';
// import {Logo} from '../../assets/images/logo.svg'



const Landing = () => {

  return (
    <>
      <nav>
        {/* <img src={Logo} alt ='logo'/> */}
      </nav>
      <div className='content'>
        <h1 className='h1-head'>Jop Traccking App</h1>
        <p className='description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, corrupti? Quam exercitationem voluptatibus nesciunt numquam, necessitatibus beatae nemo ad dolor sapiente explicabo debitis quod commodi. Delectus voluptatibus eos facere reprehenderit?
        </p>
        <section className=''>
          <button className='btns btn-register'>Login</button>
          <button className='btns btn-register'>Register</button>
        </section>

      </div>
      
    </>
  )
}

export default Landing