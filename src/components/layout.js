import React, {useState} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import SideDrawer from './sideDrawer'
import Header from "./header"
import Footer from './footer'
import '../styles/main.scss'

const Layout = ({ children }) => {
  const [menuState, setMenu] = useState(false)

  const callback =() => {
    setMenu(!menuState);
  }

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} parentCallback={callback}/>
      <SideDrawer menuOpen={menuState}/>
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
