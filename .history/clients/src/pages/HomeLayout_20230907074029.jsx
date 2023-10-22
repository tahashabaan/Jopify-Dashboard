import React from 'react'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <>
    <h1>nav</h1>
    <Outlet/>
    </>
  )
}

export default HomeLayout