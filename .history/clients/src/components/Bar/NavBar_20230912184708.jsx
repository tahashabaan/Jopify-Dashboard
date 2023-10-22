import {useState} from 'react'
import {HiOutlineMenuAlt1} from 'react-icons/hi'
import {CiLight}  from 'react-icons/ci'
import {MdDarkMode} from 'react-icons/md'
import {BsPersonSquare} from 'react-icons/bs'
import {IoMdArrowDropdown} from 'react-icons/io';

import Wrapper from './NavBarStyle'

const NavBar = (props) => {



  return (
    <Wrapper>
       <div className=''>
        <HiOutlineMenuAlt1 className='icon'/>
       </div>
       <h3> Dashboard </h3>
       <div className='btn-container'>
         <section>
           <CiLight className='icon icon_btn'/>
           <MdDarkMode className='icon icon_btn'/>
         </section>
         <div className=''>
           <button className='btn'>
            <BsPersonSquare />
              <span>  {sideBar} </span>
              <IoMdArrowDropdown />
           </button>
           <div className='drop_down'>
            <button className='btn'>LogoOut</button>
           </div>

         </div>


       </div>
      
    </Wrapper>
  )
}

export default NavBar

