import React from 'react'
import styled from 'styled-components';


import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  let Nav = styled.nav`
      color: ;
  `

  return (
    <>
    <Nav>navbar</Nav>
    <Outlet/>
    </>
  )
}

export default HomeLayout