import React from 'react'
import Styled from 
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  const styledNavBar = 
  return (
    <>
    <nav>navbar</nav>
    <Outlet/>
    </>
  )
}

export default HomeLayout