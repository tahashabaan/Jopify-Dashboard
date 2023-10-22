import React from 'react'

import Src from '../assets/images/main-alternative.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
       
         <button> </button>
         <h1> Dashboard</h1>
        <section>
          <button><i></i></button>
          <button><i></i></button>
          <div className=''>
           <button></button>
           <div className='dropdown'>
           <button>
              <Link to='/logoOut'> LogoOut </Link>
             </button> 
           </div>
          </div>
         </section>
        

    </div>
  )
}

export default Header
