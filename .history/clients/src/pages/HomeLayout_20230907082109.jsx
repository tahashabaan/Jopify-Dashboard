import React from 'react'
import styled from 'styled-components';


import { Outlet } from 'react-router-dom'

const HomeLayout = () => {

  const styledNavBar = styled.nav`
   font-size:18px;
   color:red;
   font-weight:
  `

  return (
    <>
    <styledNavBar>navbar</styledNavBar>
    <Outlet/>
    </>
  )
}

export default HomeLayout