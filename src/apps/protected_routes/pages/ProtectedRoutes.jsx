import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'

function ProtectedRoutes() {

  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default ProtectedRoutes