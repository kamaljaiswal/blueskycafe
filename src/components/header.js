import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle, parentCallback }) => {
  const [isOpen, changeState] = useState(false);

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
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>
    </div>
    <div className="desktopMenu">
      <nav>
        <span><Link to="/about">About</Link></span>
        <span><Link to="/menu">Menu</Link></span>
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
