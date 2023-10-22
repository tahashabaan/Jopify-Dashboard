import React from 'react'

import Wrapper from './LandingPageStyled';
import Logo from '../../components/Logo'
import Src from  '../../assets/images/main.svg'


const Landing = () => {
  return (
    <Wrapper className='container'>
      <nav>
        <Logo/>
      </nav>
      <div className='page'>
       <section className='left__page'>
        <h1>Job <span>Tracking</span> App</h1>
        <p >
          I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue bottle single-origin coffee chia. Aesthetic post-ironic venmo, quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch narwhal.
        </p>
        <section className='registre-line'>
          <Link to='/login'>
           <button className='btn btn-login'>Login</button>
          </Link>
         <Lin <button className='btn btn-register'>Register</button>
        </section>
      </section> 
      <section className='right__page'>
        <img src={Src} alt='main image' className='img'/>
      </section>
      </div>
      
    </Wrapper>
  )
}

export default Landing