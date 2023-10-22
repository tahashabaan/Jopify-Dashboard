import React from 'react'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <>
    <h1>navbar</h1>
    <Outlet/>
    </>
  )
}

export default HomeLayout