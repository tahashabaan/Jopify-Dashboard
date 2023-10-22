import React from 'react'
import {HiOutlineMenuAlt1} from 'react-icons/hi'
import {CiLight}  from 'react-icons/ci'
import {MdDarkMode} from 'react-icons/md'
import {BsPersonSquare} from 'react-icons/bs'
import {IoMdArrowDropdown} from 'react-icons/io';

import Wrapper from './'

const NavBar = () => {
  return (
    <Wrapper>
       <button>
        <HiOutlineMenuAlt1/>
       </button>
       <h1> Dashboard </h1>
       <div className='btn-container'>
         <button>
           <CiLight/>
           <MdDarkMode/>
         </button>
         <div className=''>
           <button>
            <BsPersonSquare/>
              user.name
              <IoMdArrowDropdown/>

           </button>
           <div className='drop_down'>
            <button>LogoOut</button>
           </div>

         </div>


       </div>
      
    </Wrapper>
  )
}

export default NavBar

