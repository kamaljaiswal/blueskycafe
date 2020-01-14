import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MenuNav from '../components/menuNav'

const MidWeekMenu = () => {

  return (
    <Layout>
      <SEO title="Mid-Week Menu" />
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
                <div className="menuItem">
                  <span className="menuItem__name">Zuppa Del Giorno</span>
                  <p className="menuItem__description">Chef’s homemade soup of the day</p>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Calamari</span>
                  <p className="menuItem__description">Fresh calamari rings dusted with paprika and served with a zesty citrus mayonnaise</p>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Ricotta Fritta</span>
                  <p className="menuItem__description">Handmade ricotta cakes served with parmiggiano and sundried tomatoes served on a bed of rocket, with a red pepper coulis</p>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Anatra e Pistachio</span>
                  <p className="menuItem__description">Duck and pistachio terrine wrapped in prosciutto served with a parsley cream</p>
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
                  <span className="menuItem__name">Branzino Acqua Pazza</span>
                  <p className="menuItem__description">Pan fried sea bass in white wine, cherry tomatoes, olives, green beans, shallots and peppers</p>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Pollo al Bosco</span>
                  <p className="menuItem__description">Roast chicken breast with sautéed spinach and wild mushroom cream</p>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Pappardelle Pomodorini</span>
                  <p className="menuItem__description">Pappardelle with tomato ragu, roasted peppers and cherry tomatoes</p>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Maialetto Piacenza</span>
                  <p className="menuItem__description">Pork medallions, served with tomatoes, roasted peppers and olives</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  )
}

export default MidWeekMenu