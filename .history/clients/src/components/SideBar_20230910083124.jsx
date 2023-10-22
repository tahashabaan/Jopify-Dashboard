import React from 'react'
import { Link } from 'react-router-dom'

import Logo from './Logo'

import {MdAddCard} from 'react-icons/md'

const Menu = () => {
  return (
    <div>
        <h1>
          <Logo/>
        </h1>

        <nav>
           <ul>
            <li><Link>Add Job</Link></li>
            <li><Link>All Jobs</Link></li>
            <li><Link>Stats</Link></li>
            <li><Link>Profile</Link></li>
           </ul>
        </nav>
    </div>
  )
}

export default Menu
