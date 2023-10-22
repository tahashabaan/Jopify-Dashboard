import React from 'react'
import styled from 'style-component'

import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  const styledNavBar = Styled.nav`
    
  `
  return (
    <>
    <nav>navbar</nav>
    <Outlet/>
    </>
  )
}

export default HomeLayout