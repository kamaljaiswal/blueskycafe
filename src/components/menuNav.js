import React from "react"
import { Link } from "gatsby"

const MenuNav = () => {

  return (
    <ul className="menuHeaders">
        <li><Link to='/menu'>A LA CARTE</Link></li>
        <li><Link to='/mid-week-menu'>MID-WEEK</Link></li>
        <li><Link to='/lunch-menu'>LUNCH</Link></li>
        <li><Link to='/drinks-menu'>DRINKS</Link></li>
    </ul>
  )
}

export default MenuNav