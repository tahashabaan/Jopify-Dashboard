import React from 'react'
import styled from 'styled-components';


import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  let Nav = styled.nav`
    
  `

  return (
    <>
    <styledNav>navbar</styledNav>
    <Outlet/>
    </>
  )
}

export default HomeLayout