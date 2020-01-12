import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MenuNav from '../components/menuNav'

const MenuPage = () => (
  <Layout>
    <SEO title="Main Menu" />
    <div className="menuContainer">
      <MenuNav/>
      <div className="menu">
        <h2>A LA CARTE MENU</h2>
        <div className="menuList">
          <h3>STUZZICHINI</h3>
          <div className="lineBreak"></div>
          <div className="menuItemsContainer">
            <div className="menuItems">
              <div className="menuItem">
                <span className="menuItem__name">Pane</span>
                <p className="menuItem__description">Basket of homemade bread with olive oil and balsamic vingegar</p>
                <span className="menuItem__price">3.00</span>
              </div>
              <div className="menuItem">
                <span className="menuItem__name">Olive Verde</span>
                <p className="menuItem__description">Marinated green olives</p>
                <span className="menuItem__price">3.95</span>
              </div>
              <div className="menuItem">
                <span className="menuItem__name">Focaccia Rosemarino</span>
                <p className="menuItem__description">Pizza bread with garlic butter, rosemary and rock salt</p>
                <span className="menuItem__price">5.00</span>
              </div>
              <div className="menuItem">
                <span className="menuItem__name">Bruschetta</span>
                <p className="menuItem__description">Hand Stretched flat bread with cherry tomatoes, red onion, olive oil and garlic</p>
                <span className="menuItem__price">3.90</span>
              </div>
            </div>
            <div className="dottedLine"></div>
            <div className="menuItems">
              <div className="menuItem">
                <span className="menuItem__name">Focaccia Mozzarella</span>
                <p className="menuItem__description">Pizza bread topped with fresh mozzarella cheese</p>
                <span className="menuItem__price">5.50</span>
              </div>
            </div>
          </div>
        </div>

        <div className="menuList">
          <h3>ANTIPASTI</h3>
          <div className="lineBreak"></div>
          <div className="menuItemsContainer">
            <div className="menuItems">
              <div className="menuItem">
                <span className="menuItem__name">Prosciutto e Parmiggiano Reggiano</span>
                <p className="menuItem__description">Sliced Parma ham with aged parmesan shavings on a bed of rocket</p>
                <span className="menuItem__price">5.95</span>
              </div>
              <div className="menuItem">
                <span className="menuItem__name">Zuppa Del Giorno</span>
                <p className="menuItem__description">Homemade soup of the day</p>
                <span className="menuItem__price">5.50</span>
              </div>
              <div className="menuItem">
                <span className="menuItem__name">Anatra e Pistachio</span>
                <p className="menuItem__description">Duck and pistachio terrine wrapped in prosciutto served with parsley and cream</p>
                <span className="menuItem__price">8.00</span>
              </div>
              <div className="menuItem">
                <span className="menuItem__name">Carpaccio Di Manzo</span>
                <p className="menuItem__description">Thinly sliced Scotch fillet topped with rocket, paremsan and ock salt with a lemon infused oil</p>
                <span className="menuItem__price">8.00</span>
              </div>
            </div>
            <div className="dottedLine"></div>
              <div className="menuItems">
                <div className="menuItem">
                <span className="menuItem__name">Gamberoni Mediterraneo</span>
                <p className="menuItem__description">King prawns sauteed in olive oil, roasted peppers, sundried tomatoes and chilli</p>
                <span className="menuItem__price">8.50</span>
              </div>
              <div className="menuItem">
                <span className="menuItem__name">Calamari Fritti</span>
                <p className="menuItem__description">Fresh calamari rings dusted with paprika and served with a zesty citrus mayonnaise</p>
                <span className="menuItem__price">7.00</span>
              </div>
              <div className="menuItem">
                <span className="menuItem__name">Ricotta Fritta</span>
                <p className="menuItem__description">Homemade ricotta cakes with parmiggiano and sundried tomatoes served on a bed of rocket, with a red pepper coulis</p>
                <span className="menuItem__price">6.50</span>
              </div>
              <div className="menuItem">
                <span className="menuItem__name">Insalata Pera Formaggio</span>
                <p className="menuItem__description">Pear and goats cheese salad</p>
                <span className="menuItem__price">6.50</span>
              </div>
            </div>
            <div className="dottedLine"></div>
            <div className="menuItems">
              <div className="menuItem">
                <span className="menuItem__name">Antipasto Misto</span>
                <p className="menuItem__description">Italian charcuturie selection (minimum for 2)</p>
                <span className="menuItem__price">16.00</span>
              </div>
              <div className="menuItem">
                <span className="menuItem__name">Capesante Calabrese</span>
                <p className="menuItem__description">Seared scallops with sauteed chickpeas and n'duja sausage</p>
                <span className="menuItem__price">9.00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="menuList">
          <h3>PRIMI</h3>
          <span className="menuListInfo">Gluten free pasta availableon request. Half portions of certain pastas available on request</span>
          <div className="lineBreak"></div>
          <div className="menuItemsContainer">
            <div className="menuItems">
              <div className="menuItem">
                  <span className="menuItem__name">Linguini Frutta de Mare</span>
                  <p className="menuItem__description">Linguini in a cherry tomato and white wine sauce tossed with queen scallops, prawns and calamari</p>
                  <span className="menuItem__price">14.50</span>
              </div>
              <div className="menuItem">
                  <span className="menuItem__name">Pappardelle Pomodorini</span>
                  <p className="menuItem__description">Pappardelle with tomato ragu, roasted peppers and cherry tomatoes</p>
                  <span className="menuItem__price">11.50</span>
              </div>
              <div className="menuItem">
                  <span className="menuItem__name">Penne Aglio, Olio e Salsiccia</span>
                  <p className="menuItem__description">Penne with olive oil, chilli, roasted peppers, green olives and handmade Tuscan sausage></p>
                  <span className="menuItem__price">11.50</span>
              </div>
              <div className="menuItem">
                  <span className="menuItem__name">Penne Arrabiata</span>
                  <p className="menuItem__description">Penne served with tomato ragu and fresh chilli</p>
                  <span className="menuItem__price">10.50</span>
              </div>
            </div>
            <div className="dottedLine"></div>
            <div className="menuItems">
              <div className="menuItem">
                  <span className="menuItem__name">Spaghetti Carbonara a la Romana</span>
                  <p className="menuItem__description">Spaghetti with pancetta, egg and parmiggiano</p>
                  <span className="menuItem__price">11.00</span>
              </div>
              <div className="menuItem">
                  <span className="menuItem__name">Ravioli Con Capestante e Gamberi</span>
                  <p className="menuItem__description">Ravioli stuffed with king prawns and scallops, doused in sage butter</p>
                  <span className="menuItem__price">15.00</span>
              </div>
              <div className="menuItem">
                  <span className="menuItem__name">Spaghetti Toscana</span>
                  <p className="menuItem__description">Spaghetti tossed with a Tuscan sausage, chilli, and ricotta ragu</p>
                  <span className="menuItem__price">12.00</span>
              </div>
              <div className="menuItem">
                  <span className="menuItem__name">Pappardelle al Cinghiale</span>
                  <p className="menuItem__description">Fresh pappardelle with a wild boar ragu</p>
                  <span className="menuItem__price">13.00</span>
              </div>
            </div>
            <div className="dottedLine"></div>
            <div className="menuItems">
              <div className="menuItem">
                  <span className="menuItem__name">Mezzelune Porcini</span>
                  <p className="menuItem__description">Half moon ravioli filled with porcini mushrooms and served in a truffle butter
                  </p>
                  <span className="menuItem__price">£13.00</span>
              </div>            
            </div>
          </div>
        </div>

        <div className="menuList">
          <h3>SECONDI</h3>
          <span className="menuListInfo">All main courses served with your choice of garlic and rosemary sauteed potatoes, sea salt fries or salad</span>
          <div className="lineBreak"></div>
          <div className="menuItemsContainer">
            <div className="menuItems">
              <div className="menuItem">
                  <span className="menuItem__name">Agnello al Funghi</span>
                  <p className="menuItem__description">Lamb rump with Jerusalem artichoke puree, chestnut mushrooms and red wine reduction</p>
                  <span className="menuItem__price">18.00</span>
              </div>
              <div className="menuItem">
                  <span className="menuItem__name">Anatra a la Prugna</span>
                  <p className="menuItem__description">Seared duck breast served on wilted spinach with a thyme and plum reduction</p>
                  <span className="menuItem__price">18.50</span>
              </div>
              <div className="menuItem">
                  <span className="menuItem__name">Filetto di Maiale al Oporto</span>
                  <p className="menuItem__description">Tender pork loin stuffed with dates and pistachios, wrapped in prosciutto with a port reduction</p>
                  <span className="menuItem__price">18.50</span>
              </div>
              <div className="menuItem">
                  <span className="menuItem__name">Pollo Parmigiano</span>
                  <p className="menuItem__description">Chicken breast with parmesan stuffing, tenderstem broccoli and anchovy cream</p>
                  <span className="menuItem__price">16.50</span>
              </div>
            </div>
            <div className="dottedLine"></div>
            <div className="menuItems">
              <div className="menuItem">
                  <span className="menuItem__name">Saltimbocca a la Romana</span>
                  <p className="menuItem__description">Veal escalopes wrapped in Parma ham and sage with a rich Marsala reduction</p>
                  <span className="menuItem__price">16.50</span>
              </div>
              <div className="menuItem">
                  <span className="menuItem__name">Filetto Di Manzo a la Aglio</span>
                  <p className="menuItem__description">Prime Scotch fillet, chargrilled and served with garlic butter</p>
                  <span className="menuItem__price">28.50</span>
              </div>
              <div className="menuItem">
                  <span className="menuItem__name">Bistecca Tagliata</span>
                  <p className="menuItem__description">10oz Scottish beef rib eye, chargrilled and set on rocket and Parmesan with balsamic glaze</p>
                  <span className="menuItem__price">26.50</span>
              </div>
              <div className="menuItem">
                  <span className="menuItem__name">Braciola di Vitello</span>
                  <p className="menuItem__description">12oz veal chop, pan fried in rosemary butter, simply served with lemon</p>
                  <span className="menuItem__price">25.50</span>
              </div>
            </div>
            <div className="dottedLine"></div>
            <div className="menuItems">
              <div className="menuItem">
                  <span className="menuItem__name">Secondi di pesce</span>
                  <p className="menuItem__description">To ensure the freshness and highest quality of our produce here at Dantes the selection of fish and seafood will vary from day to day. One of our team will be happy to inform you of the daily specials.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="menuList">
          <h3>PIZZA</h3>
          <span className="menuListInfo">Other toppings available upon request along with childrens pizzas</span>
          <div className="lineBreak"></div>
          <div className="menuItemsContainer">
            <div className="menuItems">
              <div className="menuItem">
                  <span className="menuItem__name">Margherita</span>
                  <p className="menuItem__description">Simply topped with tomato and fresh mozzarella</p>
                  <span className="menuItem__price">9.00</span>
              </div>
              <div className="menuItem">
                  <span className="menuItem__name">Inferno</span>
                  <p className="menuItem__description">Tomato and mozzarella with fresh chilli and pepperoni sausage</p>
                  <span className="menuItem__price">10.50</span>
              </div>
              <div className="menuItem">
                  <span className="menuItem__name">Parmiggiana</span>
                  <p className="menuItem__description">Extra thin pizza with chopped tomatoes, garlic and a generous sprinkling of parmiggiano</p>
                  <span className="menuItem__price">10.50</span>
              </div>
              <div className="menuItem">
                  <span className="menuItem__name">Rusticana</span>
                  <p className="menuItem__description">Tomato and mozzarella topped with aged Parma ham, rocket and parmesan</p>
                  <span className="menuItem__price">12.50</span>
              </div>
            </div>
            <div className="dottedLine"></div>
            <div className="menuItems">
              <div className="menuItem">
                  <span className="menuItem__name">Pollo Pepperoncino</span>
                  <p className="menuItem__description">Tomato and fresh mozzarella with dried chilli, marinated spicy chicken, green olives and red onion</p>
                  <span className="menuItem__price">11.00</span>
              </div>
              <div className="menuItem">
                  <span className="menuItem__name">Acciuga</span>
                  <p className="menuItem__description">Tomato and mozzarella topped with anchovies, fennel seed salami and green olives</p>
                  <span className="menuItem__price">12.00</span>
              </div>
              <div className="menuItem">
                  <span className="menuItem__name">Sfizziosa</span>
                  <p className="menuItem__description">Tomato and mozzarella with handmade Tuscan sausage, red onion and chilli</p>
                  <span className="menuItem__price">12.00</span>
              </div>
              <div className="menuItem">
                  <span className="menuItem__name">La Bianca</span>
                  <p className="menuItem__description">White pizza topped with creamy gorgonzola cheese, Scottish pears and walnuts</p>
                  <span className="menuItem__price">11.50</span>
              </div>
            </div>
            <div className="dottedLine"></div>
            <div className="menuItems">
              <div className="menuItem">
                  <span className="menuItem__name">Pollo Capretta</span>
                  <p className="menuItem__description">Tomato and goats cheese topped with chargrilled chicken and finished with rocket and balsamic glaze</p>
                  <span className="menuItem__price">12.00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="menuList">
          <h3>CONTORNI</h3>
          <div className="lineBreak"></div>
          <div className="menuItemsContainer">
            <div className="menuItems">
                <div className="menuItem menuItem--noDescription">
                    <span className="menuItem__name">Sautéed spinach in garlic butter</span>
                    <span className="menuItem__price">3.70</span>
                </div>
                <div className="menuItem menuItem--noDescription">
                    <span className="menuItem__name">Green beans with a hint of chilli</span>
                    <span className="menuItem__price">3.70</span>
                </div>
                <div className="menuItem menuItem--noDescription">
                    <span className="menuItem__name">Marinated peppers in olive oil and garlic</span>
                    <span className="menuItem__price">3.70</span>
                </div>
                <div className="menuItem menuItem--noDescription">
                    <span className="menuItem__name">Tenderstem broccoli with garlic and chilli</span>
                    <span className="menuItem__price">4.00</span>
                </div>
              </div>
              <div className="dottedLine"></div>
              <div className="menuItems">
                <div className="menuItem menuItem--noDescription">
                    <span className="menuItem__name">Green Salad</span>
                    <span className="menuItem__price">3.85</span>
                </div>
                <div className="menuItem menuItem--noDescription">
                    <span className="menuItem__name">Mixed Salad</span>
                    <span className="menuItem__price">3.85</span>
                </div>
                <div className="menuItem menuItem--noDescription">
                    <span className="menuItem__name">Rocket and Parmesan Salad</span>
                    <span className="menuItem__price">4.25</span>
                </div>
                <div className="menuItem menuItem--noDescription">
                    <span className="menuItem__name">French Fries</span>
                    <span className="menuItem__price">3.00</span>
                </div>
              </div>
          </div>
        </div>

      </div>
    </div>
  </Layout>
)

export default MenuPage