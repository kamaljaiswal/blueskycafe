import React, { useState } from 'react'
import { Link } from 'gatsby'

const SideDrawer = ({ menuOpen }) => {
  const menuClass = menuOpen ? 'drawer open' : 'drawer';


  return (
    <nav className={menuClass}>
      <ul className="sideNavbar">
        <li><Link to='/' activeClassName="active" >Home</Link></li>
        <li><Link to='/menu' activeClassName="active">Menu</Link></li>
        <li><Link to='/gallery' activeClassName="active">Gallery</Link></li>
        <li><Link to='/about' activeClassName="active">About</Link></li>
        <li><Link to='/contact' activeClassName="active">Contact</Link></li>
      </ul>
      <span className="logo">Dantes</span>
      <span className="address">48-50 Bridge Road, Colinton</span>
    </nav>
  )
}

export default SideDrawer