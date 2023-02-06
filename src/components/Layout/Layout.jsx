import React from 'react'
import './Layout.css'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'

export default function Layout() {
  return (
    <div>
        <NavBar/>
      <div className="outlet">
        <Outlet/>
      </div>
    </div>
  )
}
