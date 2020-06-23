import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import MenuNav from '../components/menuNav'
import SEO from "../components/seo"


const TakeawayMenu = ({ data }) => {
  
  return (
    <Layout>
      <SEO title="Takeaway Menu" />
      <section className="menuContainer">
        <MenuNav />
        <div className="menu">
          <section className="menuList">
            <h3>Stuzzichini</h3>
            <div className="lineBreak"></div>
            <div className="menuItemsContainer">
              <div className="menuItems">
                {data.markdownRemark.frontmatter.menu.stuzzichini.map((item) => (
                  <div className="menuItem">
                    <span className="menuItem__name">{item.title}</span>
                    <p className="menu_Item__description">{item.description}</p>
                    <span className="menuItem__price">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="menuList">
            <h3>Antipasti</h3>
            <div className="lineBreak"></div>
            <div className="menuItemsContainer">
              <div className="menuItems">
                {data.markdownRemark.frontmatter.menu.antipasti.map((item) => (
                  <div className="menuItem">
                    <span className="menuItem__name">{item.title}</span>
                    <p className="menu_Item__description">{item.description}</p>
                    <span className="menuItem__price">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="menuList">
            <h3>PRIMI</h3>
            <div className="lineBreak"></div>
            <div className="menuItemsContainer">
              <div className="menuItems">
                {data.markdownRemark.frontmatter.menu.primi.map((item) => (
                  <div className="menuItem">
                    <span className="menuItem__name">{item.title}</span>
                    <p className="menu_Item__description">{item.description}</p>
                    <span className="menuItem__price">{item.price}</span>
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
                    <span className="menuItem__price">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="menuList">
            <h3>Pizza</h3>
            <div className="lineBreak"></div>
            <div className="menuItemsContainer">
              <div className="menuItems">
                {data.markdownRemark.frontmatter.menu.pizza.map((item) => (
                  <div className="menuItem">
                    <span className="menuItem__name">{item.title}</span>
                    <p className="menu_Item__description">{item.description}</p>
                    <span className="menuItem__price">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="menuList">
            <h3>Contorni</h3>
            <div className="lineBreak"></div>
            <div className="menuItemsContainer">
              <div className="menuItems">
                {data.markdownRemark.frontmatter.menu.contorni.map((item) => (
                  <div className="menuItem">
                    <span className="menuItem__name">{item.title}</span>
                    <p className="menu_Item__description">{item.description}</p>
                    <span className="menuItem__price">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="menuList">
            <h3>Desserts</h3>
            <div className="lineBreak"></div>
            <div className="menuItemsContainer">
              <div className="menuItems">
                {data.markdownRemark.frontmatter.menu.desserts.map((item) => (
                  <div className="menuItem">
                    <span className="menuItem__name">{item.title}</span>
                    <span className="menuItem__price">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="menuList">
            <h3>Cocktails</h3>
            <div className="lineBreak"></div>
            <div className="menuItemsContainer">
              <div className="menuItems">
                {data.markdownRemark.frontmatter.menu.cocktails.map((item) => (
                  <div className="menuItem">
                    <span className="menuItem__name">{item.title}</span>
                    <span className="menuItem__price">{item.price}</span>
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

export const takeawayQuery = graphql`
  {
    markdownRemark(frontmatter: {templateKey: {eq: "takeaway-menu"}}) {
      id
      frontmatter {
        templateKey
        menu {
          stuzzichini {
            title
            description
            price
          }
          antipasti {
            title
            description
            price
          }
          primi {
            title
            description
            price
          }
          secondi {
            title
            description
            price
          }
          pizza {
            title
            description
            price
          }
          contorni {
            title
            description
            price
          }
          desserts {
            title
            price
          }
          cocktails {
            title
            price
          }
        }
      }
    }
  }
`

export default TakeawayMenu