import {useState} from 'react'
import {HiOutlineMenuAlt1} from 'react-icons/hi'
import {CiLight}  from 'react-icons/ci'
import {MdDarkMode} from 'react-icons/md'
import {BsPersonSquare} from 'react-icons/bs'
import {IoMdArrowDropdown} from 'react-icons/io';

import Wrapper from './NavBarStyle'

const NavBar = () => {

  const[sideBar, setSideBar] =useState(true);


  return (
    <Wrapper>
       <div className='' 
        onClick={(val) => {
            setSideBar(!val);
       }}>
       
        <HiOutlineMenuAlt1 className='icon'/>
       </div>
       <h3> Dashboard </h3>
       <div className='btn-container'>
         <section>
           <CiLight/>
           <MdDarkMode/>
         </section>
         <div className=''>
           <button className='btn'>
            <BsPersonSquare />
             {sideBar}
              <IoMdArrowDropdown className='icon icon_btn'/>
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

