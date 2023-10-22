import React from 'react'

import Src from '../assets/images/main-alternative.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
       
         <img src={Src} alt='menu list'/>
         <h1>
           Dashboard
        </h1>
        <section>
          <button><i></i></button>
          <button><i></i></button>
          <button>
            <button>
              <Link>  </Link>
            </button> 
          </button>
        </section>
        

    </div>
  )
}

export default Header
