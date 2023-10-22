import React from 'react'

import Src from '../assets/images/main-alternative.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
       
         <button>
          <h1>
           Dashboard
        </h1>
        <section>
          <button><i></i></button>
          <button><i></i></button>
          <button>
             <button>
              <Link to='/logoOut'> LogoOut </Link>
             </button> 
          </button>
         </section>
        

    </div>
  )
}

export default Header
