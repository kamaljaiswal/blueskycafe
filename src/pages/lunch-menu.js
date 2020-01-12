import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MenuNav from '../components/menuNav'

const LunchMenu = () => {

  return (
    <Layout>
      <SEO title="Lunch Menu" />
      <section className="menuContainer">
        <MenuNav />
        <div className="menu">
          <h2>LUNCH MENU</h2>
          <span className="menuInfo">Two courses £11.50</span>
          <section className="menuList">
            <h3>PRIMI</h3>
            <div className="lineBreak"></div>
            <div className="menuItemsContainer">
              <div className="menuItems">
                <div className="menuItem">
                  <span className="menuItem__name">Zuppa Del Giorno</span>
                  <p className="menuItem__description">Chef’s homemade soup of the day</p>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Insalata Pera Formaggio</span>
                  <p className="menuItem__description">Pear and goats cheese salad</p>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Bruschetta</span>
                  <p className="menuItem__description">Hand stretched flat bread with cherry tomatoes, red onio, olive oil and garlic</p>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Calamari</span>
                  <p className="menuItem__description">Fresh calamari rings dusted with paprika and served with a zesty citrus mayonnaise</p>
                </div>
              </div>
            </div>
          </section>

          <section className="menuList">
            <h3>SECONDI</h3>
            <div className="lineBreak"></div>
            <div className="menuItemsContainer">
              <div className="menuItems">
                <div className="menuItem">
                  <span className="menuItem__name">Spaghetti Carbonara</span>
                  <p className="menuItem__description">Spaghetti with pancetta, egg and parmiggiano</p>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Penne Arrabiata</span>
                  <p className="menuItem__description">Penne served with a tomato and chilli sauce</p>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Pizza Parmigiana</span>
                  <p className="menuItem__description">Extra thin pizza with chopped tomatoes, garlic and a generous sprinkling of parmiggiano</p>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Insalata Della Casa</span>
                  <p className="menuItem__description">Mixed salad with fresh mozzarella, sundried tomatoes, green olives and roasted peppers tossed in our house dressing</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  )
}

export default LunchMenu