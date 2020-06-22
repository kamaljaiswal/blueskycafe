import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import MenuNav from '../components/menuNav'


const MidWeekMenu = ({ data }) => {
  
  return (
    <Layout>
      <section className="menuContainer">
        <MenuNav />
        <div className="menu">
          <span className="menuInfo">Two courses £17.00</span>
          <span className="menuInfo">Available Tuesday, Wednesday, Thursday</span>
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

export const midweekQuery = graphql`
  {
    markdownRemark(frontmatter: {templateKey: {eq: "mid-week-menu"}}) {
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

export default MidWeekMenu