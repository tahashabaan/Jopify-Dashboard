import React from 'react'

import Logo from './Logo'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
        <h1>
          <Logo/>
        </h1>

        <nav>
           <ul>
            <li><Link>Add </Link></li>
            <li><Link></Link></li>
            <li><Link></Link></li>
            <li><Link></Link></li>
            <li><Link></Link></li>
           </ul>
        </nav>
    </div>
  )
}

export default Menu
