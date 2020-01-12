import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MenuNav from '../components/menuNav'

const DrinksMenu = () => {

  return (
    <Layout>
      <SEO title="Main Menu" />
      <div className="menuContainer">
        <MenuNav/>
        <div className="menu">
          <h2>DRINKS MENU</h2>
          <section className="menuList">
            <h3>COCKTAILS</h3>
            <div className="lineBreak"></div>
            <div className="menuItemsContainer">
              <div className="menuItems">
                <div className="menuItem">
                  <span className="menuItem__name">French 75</span>
                  <p className="menuItem__description">A cocktail made fron gin, Champagne, lemon juice and sugar</p>
                  <span className="menuItem__price">8.00</span>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Bellini</span>
                  <p className="menuItem__description">A refreshing fusion of Prosecco and peaches</p>
                  <span className="menuItem__price">6.50</span>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Negroni</span>
                  <p className="menuItem__description">Deliciously bitter aperitif with Campari, gin and vermouth rosso served over ice</p>
                  <span className="menuItem__price">7.50</span>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">French Martini
                  </span>
                  <p className="menuItem__description">A fruity mix of Absolut vodka, Chambord raspberry liqueur and pineapple juice</p>
                  <span className="menuItem__price">7.50</span>
                </div>
              </div>
              <div className="dottedLine"></div>
              <div className="menuItems">
                <div className="menuItem">
                  <span className="menuItem__name">Aperol Spritz
                  </span>
                  <p className="menuItem__description">Prosecco, Aperol and soda water garnished with orange slices</p>
                  <span className="menuItem__price">6.50</span>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Lemon Drop Martini
                  </span>
                  <p className="menuItem__description">Think of the lemon drop candies! A delicious mixture of vodka, sugar and lemon juice</p>
                  <span className="menuItem__price">7.50</span>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Cosmopolitan
                  </span>
                  <p className="menuItem__description">A colourful cocktail made with vodka and Cointreau, topped up with cranberry and a squeeze of lime</p>
                  <span className="menuItem__price">7.50</span>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Espresso Martini</span>
                  <p className="menuItem__description">Espresso, Absolut vodka and Parton XO Café</p>
                  <span className="menuItem__price">7.50</span>
                </div>
              </div>
              <div className="dottedLine"></div>
              <div className="menuItems">
                <div className="menuItem">
                  <span className="menuItem__name">Disaronno Sour
                  </span>
                  <p className="menuItem__description">Refreshing sweet and punchy cocktail with lemon and almonds
                  </p>
                  <span className="menuItem__price">7.00</span>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Kir Royale
                  </span>
                  <p className="menuItem__description">A delicious Tattinger based drink infused with a subtle hint of blackcurrant liqueur
                  </p>
                  <span className="menuItem__price">12.00</span>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Champagne Grand Marnier
                  </span>
                  <p className="menuItem__description">Tattinger Champagne, a shot of Grand Marnier, fresh lime juice and sugar syrup.
                  </p>
                  <span className="menuItem__price">12.00</span>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">The Classic
                  </span>
                  <p className="menuItem__description">Sugar cube doused with Angostura bitters, Tattinger Champagne and a shot of Remy VSOP.
                  </p>
                  <span className="menuItem__price">12.00</span>
                </div>
              </div>
            </div>
          </section>

          <section className="menuList">
            <h3>SPARKLERS</h3>
            <div className="lineBreak"></div>
            <div className="menuItemsContainer">
              <div className="menuItems">
                <div className="menuItem">
                  <span className="menuItem__name">Bottega Poeti Prosecco Organic Extra Dry (Italy)
                  </span>
                  <p className="menuItem__description">Organically farmed, delicious ripe apple flavours.</p>
                  <div className="menuItem__price">
                    <span>125ml Glass - 4.30</span>
                    <span>Bottle - 26.50</span>
                  </div>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Bottega Poeti Rosato Spumante Brut (Italy)
                  </span>
                  <p className="menuItem__description">Fruity hints of cherry and wild berries.
                  </p>
                  <span className="menuItem__price">Bottle - 27.00
                  </span>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Taittinger Brut Réserve (Champagne)
                  </span>
                  <p className="menuItem__description">Subtle biscuity complexity and superb elegance.</p>
                  <div className="menuItem__price">
                    <span>125ml Glass - 10.00</span>
                    <span>Bottle - 55.00</span>
                  </div>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Bollinger La Grande Année Brut (Champagne)
                  </span>
                  <p className="menuItem__description">Full-bodied, rich and well-flavoured.
                  </p>
                  <span className="menuItem__price">Bottle - 115.00
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className="menuList">
            <h3>ITALIAN WHITES</h3>
            <div className="lineBreak"></div>
            <div className="menuItemsContainer">
              <div className="menuItems">
                <div className="menuItem">
                  <span className="menuItem__name">Soave Classico, Bolla</span>
                  <p className="menuItem__description">Dry yet with soft acidity and a creamy almond palate.</p>
                  <div className="menuItem__price">
                    <span>175ml Glass - 4.85</span>
                    <span>250ml Glass - 6.30</span>
                    <span>Bottle - 18.50</span>
                  </div>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Frascati Superiore Vigneto Santa Teresa, Fontana Candida</span>
                  <p className="menuItem__description">Fresh almonds and zingy apples.</p>
                  <div className="menuItem__price">
                    <span>Bottle - 21.00</span>
                  </div>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Vinuva Organic Pinot Grigio, Terre Sicilane</span>
                  <p className="menuItem__description">Lemon zest, crisp fruit.</p>
                  <div className="menuItem__price">
                    <span>175ml Glass - 5.25</span>
                    <span>250ml Glass - 7.00</span>
                    <span>Bottle - 21.00</span>
                  </div>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Gavi di Gavi la Toledana, Villa Lanata</span>
                  <p className="menuItem__description">Fresh, green gooseberries, a delicate floral twist, divine.</p>
                  <div className="menuItem__price">
                    <span>175ml Glass - 7.80</span>
                    <span>250ml Glass - 10.50</span>
                    <span>Bottle - 31.00</span>
                  </div>
                </div>
              </div>
              <div className="dottedLine"></div>
              <div className="menuItems">
                <div className="menuItem">
                  <span className="menuItem__name">Roero Arneis, Enrico Serafino</span>
                  <p className="menuItem__description">Dry and refreshing with elegant floral aromas.</p>
                  <div className="menuItem__price">
                    <span>Bottle - 28.50</span>
                  </div>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Pecorino Abruzzo, Giocheremo con I Fiori, Torre dei Beati</span>
                  <p className="menuItem__description">Vibrant citrussy fruit flavours and typical herbal notes.</p>
                  <div className="menuItem__price">
                    <span>Bottle - 31.00</span>
                  </div>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Tenuta del Porconero Falanghina, Campania</span>
                  <p className="menuItem__description">Dried herb, citrus and peach.</p>
                  <div className="menuItem__price">
                    <span>175ml Glass - 6.50</span>
                    <span>250ml Glass - 8.50</span>
                    <span>Bottle - 25.00</span>
                  </div>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">La Cala Vermentino di Sardegna, Sella & Mosca</span>
                  <p className="menuItem__description">Aromatic aromas of herb and lemon zest.</p>
                  <div className="menuItem__price">
                    <span>Bottle - 24.50</span>
                  </div>
                </div>
              </div>
              <div className="dottedLine"></div>
              <div className="menuItems">
                <div className="menuItem">
                  <span className="menuItem__name">Sauvignon Blanc Grave del Friuli, Borgo Tesis, Fantinel</span>
                  <p className="menuItem__description">Lean and mean racy Sauvignon – bright, delicate and very fresh.</p>
                  <div className="menuItem__price">
                    <span>175ml Glass - 5.85</span>
                    <span>250ml Glass - 7.85</span>
                    <span>Bottle - 23.50</span>
                  </div>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Orvieto Classico Amabile, Bigi</span>
                  <p className="menuItem__description">Peach and apricot salad, with a sprinkle of sugar.</p>
                  <div className="menuItem__price">
                    <span>Bottle - 19.00</span>
                  </div>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Greco di Tufo, Rocca Del Dragone, Tre Fiori</span>
                  <p className="menuItem__description">Ripe grapefruit, melon and orange zest, with notes of almond and honeysuckle.</p>
                  <div className="menuItem__price">
                    <span>Botttle - 19.00</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="menuList">
            <h3>ITALIAN ROSES</h3>
            <div className="lineBreak"></div>
            <div className="menuItemsContainer">
              <div className="menuItems">
                <div className="menuItem">
                  <span className="menuItem__name">San Salvatore Vetere Rosato, Paestum</span>
                  <p className="menuItem__description">Ripe red fruits, including raspberry and cherry.</p>
                  <div className="menuItem__price">
                    <span>Bottle - 30.00</span>
                  </div>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Corte Vigna Pinot Grigio Rosé delle Venezie</span>
                  <p className="menuItem__description">Off-dry, light and fresh, morel cherry and ripe strawberry flavours.</p>
                  <div className="menuItem__price">
                    <span>175ml Glass - 4.80</span>
                    <span>250ml Glass - 6.40</span>
                    <span>Bottle - 19.00</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="menuList">
            <h3>ITALIAN REDS</h3>
            <div className="lineBreak"></div>
            <div className="menuItemsContainer">
              <div className="menuItems">
                <div className="menuItem">
                  <span className="menuItem__name">Tentuta Fiorebelli 'Cabaletta', Rosso delle Venezie</span>
                  <p className="menuItem__description">Complex aromas, reminiscent of prune, cherry and redcurrant: full-flavoured with a long finish</p>
                  <div className="menuItem__price">
                    <span>175ml Glass - 4.90</span>
                    <span>250ml Glass - 6.40</span>
                    <span>Bottle - 19.00</span>
                  </div>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Barbera d’Alba Suculé, Villa Lanata</span>
                  <p className="menuItem__description">Sumptuous ripe black cherries, oozing with mellow softness.</p>
                  <div className="menuItem__price">
                    <span>Bottle - 29.00</span>
                  </div>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Fiorebella Rosso Appassimento, Rosso del Veneto</span>
                  <p className="menuItem__description">Intense ruby-red with a bouquet reminiscent of cherry, dried fruit, chocolate and prune; the palate is full-bodied, soft and round, with a spiciness and lingering finish.</p>
                  <div className="menuItem__price">
                    <span>175ml Glass - 6.50</span>
                    <span>250ml Glass - 8.50</span>
                    <span>Bottle - 25.00</span>
                  </div>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Merlot del Lazio Togale, Fontana Candida</span>
                  <p className="menuItem__description">Plush ruby cherries and plums.</p>
                  <div className="menuItem__price">
                    <span>175ml Glass - 5.00</span>
                    <span>250ml Glass - 6.50</span>
                    <span>Bottle - 19.00</span>
                  </div>
                </div>
              </div>
              <div className="dottedLine"></div>
              <div className="menuItems">
                <div className="menuItem">
                  <span className="menuItem__name">Siroe Lazio Fontana Candida</span>
                  <p className="menuItem__description">Fruits of the forest with light spicy notes; the flavour is full, soft and velvety</p>
                  <div className="menuItem__price">
                    <span>Bottle - 22.00</span>
                  </div>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Tenuta del Porconero Aglianico, Paestum</span>
                  <p className="menuItem__description">Organically-farmed Aglianico showing dark fruit aromas with sweet spicy notes.</p>
                  <div className="menuItem__price">
                    <span>175ml Glass - 6.50</span>
                    <span>250ml Glass - 8.60</span>
                    <span>Bottle - 25.00</span>
                  </div>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Chianti Classico, San Jacopo da Vicchiomaggio</span>
                  <p className="menuItem__description">A soft, ripe and fruit-led wine with black cherry flavours and a soft touch of tannins.</p>
                  <div className="menuItem__price">
                    <span>175ml Glass - 7.60</span>
                    <span>250ml Glass - 9.80</span>
                    <span>Bottle - 29.00</span>
                  </div>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Montepulciano d’Abruzzo, Torre dei Beati</span>
                  <p className="menuItem__description">Shows complex fruit, lightly enriched by spicy notes.</p>
                  <div className="menuItem__price">
                    <span>175ml Glass - 7.60</span>
                    <span>250ml Glass - 9.80</span>
                    <span>Bottle - 29.00</span>
                  </div>
                </div>
              </div>
              <div className="dottedLine"></div>
              <div className="menuItems">
                <div className="menuItem">
                  <span className="menuItem__name">Vinuva Organic Nero d'Avola, Terra Siciliane</span>
                  <p className="menuItem__description">Overly fruity with sweet blueberry and bilberry on a soft palate with a touch of spice.</p>
                  <div className="menuItem__price">
                    <span>Bottle - 21.00</span>
                  </div>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Villa Rizzardi Pojega Ripasso</span>
                  <p className="menuItem__description">Black cherry on the nose and palate with hints of warm cinnamon and raisins.</p>
                  <div className="menuItem__price">
                    <span>175ml Glass - 9.25</span>
                    <span>250ml Glass - 12.40</span>
                    <span>Bottle - 37.00</span>
                  </div>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Barolo Lo Zoccolaio, Domini Villa Lanata</span>
                  <p className="menuItem__description">Concentrated violet and bramble berries</p>
                  <div className="menuItem__price">
                    <span>Bottle - 49.00</span>
                  </div>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Vino Nobile di Montepulciano Lodola Nuova Estate, Ruffino</span>
                  <p className="menuItem__description">Cherry and bramble fruit on a velvet cushion.</p>
                  <div className="menuItem__price">
                    <span>Bottle - 36.50</span>
                  </div>
                </div>
              </div>
              <div className="dottedLine"></div>
              <div className="menuItems">
                <div className="menuItem">
                  <span className="menuItem__name">Cannonau di Sardegna Riserva, Sella & Mosca</span>
                  <p className="menuItem__description">Fleshy with plums and dark fruits.</p>
                  <div className="menuItem__price">
                    <span>Bottle - 28.00</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="menuList">
            <h3>PRESTIGE WINE</h3>
            <div className="lineBreak"></div>
            <div className="menuItemsContainer">
              <div className="menuItems">
                <div className="menuItem">
                  <span className="menuItem__name">Brunello di Montalcino, Villa Poggo Salv</span>
                  <p className="menuItem__description">Rich fruit, cinnamon and tabacco aromas mingle with harmonic soft fruit, vanilla oak and spice.</p>
                  <div className="menuItem__price">
                    <span>Bottle - 66.00</span>
                  </div>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Riserva Ducale Oro Chianti Classico Riserva, Gran Selezione, Ruffino</span>
                  <p className="menuItem__description">Top Chianti, Mediterranean herbs and cherries.</p>
                  <div className="menuItem__price">
                    <span>Bottle - 55.00</span>
                  </div>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Amarone della Valpolicella, Bottega</span>
                  <p className="menuItem__description">Intense and full-bodied, it shows cherry, raisin and spicy notes on a rich and weighty palate.</p>
                  <div className="menuItem__price">
                    <span>Bottle - 55.00</span>
                  </div>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Primitivo del Manduria, Gocce, Feudi Salentini</span>
                  <p className="menuItem__description">Bursts with ripe fruit, spice and notes.</p>
                  <div className="menuItem__price">
                    <span>Bottle - 40.00</span>
                  </div>
                </div>
              </div>
              <div className="dottedLine"></div>
              <div className="menuItems">
                <div className="menuItem">
                  <span className="menuItem__name">Amarone Guerrieri Rizzardi</span>
                  <p className="menuItem__description">Full bodied and concentrated maintain freshness and vibrancy.</p>
                  <div className="menuItem__price">
                    <span>Bottle - 75.00</span>
                  </div>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Chardonnay, 'Grand Cru' Terre Siciliane, Rapitalà</span>
                  <p className="menuItem__description">A buttery, tropical-fruit procession</p>
                  <div className="menuItem__price">
                    <span>Bottle - 39.00</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="menuList">
            <h3>REST OF THE WORLD WHITES</h3>
            <div className="lineBreak"></div>
            <div className="menuItemsContainer">
              <div className="menuItems">
                <div className="menuItem">
                  <span className="menuItem__name">Kleine Zalze Vineyard Selection Chenin Blanc, Stellenbosch</span>
                  <p className="menuItem__description">Guava chunks, honey drizzled and deliciously refreshing.</p>
                  <div className="menuItem__price">
                    <span>Bottle - 22.00</span>
                  </div>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Vidal Estate Sauvignon Blanc, Marlborough</span>
                  <p className="menuItem__description">Wild melons and passion fruit entangled with ripe gooseberries.</p>
                  <div className="menuItem__price">
                    <span>Bottle - 27.00</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="menuList">
            <h3>REST OF THE WORLD REDS</h3>
            <div className="lineBreak"></div>
            <div className="menuItemsContainer">
              <div className="menuItems">
                <div className="menuItem">
                  <span className="menuItem__name">The Guv'nor, Spain, Felix Solis</span>
                  <p className="menuItem__description">Shows plenty of rich, ripe, sweet red and dark fruit flavours and a juicy finish.</p>
                  <div className="menuItem__price">
                    <span>Bottle - 20.00</span>
                  </div>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Enemigo Mio Jumilla, Casa Rojo</span>
                  <p className="menuItem__description">Fruity, floral with red fruits, balsamic and rose petals.</p>
                  <div className="menuItem__price">
                    <span>Bottle - 30.00</span>
                  </div>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">Nederburg The Motorcycle Marvel Grenache-Carigan-Shiraz, Western Cape</span>
                  <p className="menuItem__description">Spicy Hedgerow fruit on the nose, the palate is rich and intense with silky tannins.</p>
                  <div className="menuItem__price">
                    <span>Bottle - 29.00</span>
                  </div>
                </div>
                <div className="menuItem">
                  <span className="menuItem__name">The Federalist Bourbon Barrel Adged Red Blend Mendocino</span>
                  <p className="menuItem__description">This uniquely American approach saturates the blend for 6 months in charred Bourbon barrels for a black fruit and caramel spiciness with a finish as smoky as it is smooth.</p>
                  <div className="menuItem__price">
                    <span>Bottle - 45.00</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="menuList">
            <h3>DESSERT WINE</h3>
            <div className="lineBreak"></div>
            <div className="menuItemsContainer">
              <div className="menuItems">
                <div className="menuItem">
                  <span className="menuItem__name">Vin Santo del Chianti Serelle, Ruffino</span>
                  <p className="menuItem__description">Aged and fermented in small oak barrels, concentrated, honeyed, candied fruit.</p>
                  <div className="menuItem__price">
                    <span>75ml Glass 5.60</span>
                    <span>Bottle - 28.00</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </Layout>
  )
}

export default DrinksMenu