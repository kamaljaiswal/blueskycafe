import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import MenuNav from '../components/menuNav'
import SEO from "../components/seo"


const LunchPage = ({ data }) => {
  
  return (
    <Layout>
      <SEO title="Lunch Menu" />
      <section className="menuContainer">
        <MenuNav />
        <div className="menu">
          <span className="menuInfo">Two courses £11.50</span>
          <section className="menuList">
            <h3>PRIMI</h3>
            <div className="lineBreak"></div>
            <div className="menuItemsContainer">
              <div className="menuItems">
                {data.markdownRemark.frontmatter.menu.primi.map((item) => (
                  <div className="menuItem">
                    <span className="menuItem__name">{item.title}</span>
                    <p className="menu_Item__description">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="menuList">
            <h3>SECONDI</h3>
            <div className="lineBreak"></div>
            <div className="menuItemsContainer">
              <div className="menuItems">
                {data.markdownRemark.frontmatter.menu.secondi.map((item) => (
                  <div className="menuItem">
                    <span className="menuItem__name">{item.title}</span>
                    <p className="menu_Item__description">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  )
}

export const lunchQuery = graphql`
  {
    markdownRemark(frontmatter: {templateKey: {eq: "lunch-page"}}) {
      id
      frontmatter {
        templateKey
        menu {
          primi {
            title
            description
          }
          secondi {
            title
            description
          }
        }
      }
    }
  }
`

export default LunchPage