import React from 'react'
import {HiOutlineMenuAlt1} from 'react-icons/hi'
import {CiLight}  from 'react-icons/ci'
import {MdDarkMode} from 'react-icons/md'
import {BsPersonSquare} from 'react-icons/bs'
import {IoMdArrowDropdown} from 'react-icons/io';

import Wrapper from './NavBarStyle'

const NavBar = () => {

  const[sideBar, setSideBar] =useState(true);
   console.log()
  return (
    <Wrapper>
       <div className='' 
       onClick={() => {
            setSideBar(false);
       }}>
        <HiOutlineMenuAlt1 className='icon'/>
       </div>
       <h3> Dashboard </h3>
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

