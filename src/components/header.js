import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle, parentCallback }) => {
  const [isOpen, changeState] = useState(false);
  const lineColor1 = isOpen ? 'white line line1' : 'line line1';
  const lineColor2 = isOpen ? 'white line line2' : 'line line2';
  const lineColor3 = isOpen ? 'white line line3' : 'line line3';

  return (
  <div>
    <div className="mobileMenu">
      <header>
        <Link to="/" className="logo">{siteTitle}</Link>
      </header>
      <div className="burgerMenu" onClick={(() => {
        let newValue = !isOpen
        changeState(!isOpen);
        parentCallback(newValue);
      })}>
        <span className={lineColor1}></span>
        <span className={lineColor2}></span>
        <span className={lineColor3}></span>
      </div>
    </div>
    <div className="desktopMenu">
      <nav>
        <span><Link to="/about">About</Link></span>
        <span><Link to="/takeaway">Menu</Link></span>
        <span><Link to="/" className="logo">{siteTitle}</Link></span>
        <span><Link to="/gallery">Gallery</Link></span>
        <span><Link to="/contact">Contact</Link></span>
      </nav>
    </div>
  </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
