import React from 'react'
import styled from 'style-component'

import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  const styledNavBar = styled.nav`
    
  `
  return (
    <>
    <nav>navbar</nav>
    <Outlet/>
    </>
  )
}

export default HomeLayout