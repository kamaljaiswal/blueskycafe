import React, { useState } from 'react'
import { Link } from 'gatsby'

const SideDrawer = ({ menuOpen }) => {
  const menuClass = menuOpen ? 'drawer open' : 'drawer';


  return (
    <nav className={menuClass}>
      <ul className="sideNavbar">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Menu</Link></li>
        <li><Link to='/gallery'>Gallery</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default SideDrawer