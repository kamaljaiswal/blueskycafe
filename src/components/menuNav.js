import React from "react"
import { Link } from "gatsby"

const MenuNav = () => {

  return (
    <ul className="menuHeaders">
        <li><Link to='/takeaway' activeClassName="active" >TAKEAWAY</Link></li>
        <li><Link to='/menu' activeClassName="active" >A LA CARTE</Link></li>
        <li><Link to='/menus/mid-week' activeClassName="active" >MID-WEEK</Link></li>
        <li><Link to='/menus/lunch' activeClassName="active" >LUNCH</Link></li>
        <li><Link to='/drinks-menu' activeClassName="active" >DRINKS</Link></li>
    </ul>
  )
}

export default MenuNav