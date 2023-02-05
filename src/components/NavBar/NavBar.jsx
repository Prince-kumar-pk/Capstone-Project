import { faPalette } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './NavBar.css'

export default function NavBar() {

  return (
    <div>
       <nav id="navbar" class="">
  <div class="nav-wrapper">
 
    <div class="logo">

      <a href="#home"><FontAwesomeIcon icon= {faPalette} /></a>
    </div>

    <ul id="menu">
      <li><a href="/home">Home</a></li>
   <li><a href="/services">About</a></li>
   <li><a href="/about">Art List</a></li>
   <li><a href="/services">Gallary</a></li>
   <li><a href="/contact">Location</a></li>
    </ul>
  </div>
</nav>

<div class="menuIcon">
  <span class="icon icon-bars"></span>
  <span class="icon icon-bars overlay"></span>
</div>

<div class="overlay-menu">
  <ul id="menu">
  <li><a href="/home">Home</a></li>
   <li><a href="/services">About</a></li>
   <li><a href="/about">Art List</a></li>
   <li><a href="/services">Gallary</a></li>
   <li><a href="/contact">Location</a></li>
    </ul>
</div>
    </div>
  )
}
