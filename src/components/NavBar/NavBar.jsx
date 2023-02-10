import { faPalette } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import React from 'react'
import './NavBar.css'

export default function NavBar(props) {

  return (
    <div>
       <nav id="navbar" class="">
  <div class="nav-wrapper">
 
    <div class="logo">

      <a href="#home"><FontAwesomeIcon icon= {faPalette} /> Art Store</a>
    </div>

    <ul id="menu">
      <li><Link to="/home">Home</Link></li>
   <li><Link to="/about">About</Link></li>
   <li><Link to="/artlist">Buy item</Link></li>
   <li><Link to="/gallery">Gallery</Link></li>
   <li><Link to="/location">Location</Link></li>
    </ul>
    
  </div>
<div className='cart'>
   <Link to='/cart' >

<button type="button" class="btn  position-relative">
<i className='fas fa-shopping-cart'/> 
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
  {props.cartcount}

  </span>
</button>
    </Link>

</div>
 
</nav>

<div class="menuIcon">
  <span class="icon icon-bars"></span>
  <span class="icon icon-bars overlay"></span>
</div>

<div class="overlay-menu">
  <ul id="menu">
  <li><Link to="/home">Home</Link></li>
   <li><Link to="/about">About</Link></li>
   <li><Link to="/artlist">Art List</Link></li>
   <li><Link to="/gallery">Gallary</Link></li>
   <li><Link to="/location">Location</Link></li>
    </ul>
</div>
    </div>
  )
}
