import React from 'react'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <>
    <Outlet/>
    <h1>HomeLayout</h1>
    </>
  )
}

export default HomeLayout