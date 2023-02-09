import React from 'react'
import './Layout.css'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'

export default function Layout({count}) {
  return (
    <div>
        <NavBar  cartcount = {count} />
      <div className="outlet">
        <Outlet/>
      </div>
    </div>
  )
}
