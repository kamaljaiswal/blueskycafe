import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="About" />
      <section className="aboutHero">
        <Img
          fluid={data.hero.childImageSharp.fluid}
          className="aboutHero__image"
        />
        <div className="overlayContainer">
          <div className="overlay">
            <h1 className="overlay__title">
              A family run restaurant since 1980
            </h1>
          </div>
        </div>
      </section>
      <div className="aboutMain">
        <div className="container">
          <h2>We go way back.</h2>
          <p>
            Our restaurant has not always been as it seems with its history
            going far back.
          </p>
        </div>
        <figure className="shops">
          <Img fluid={data.shops.childImageSharp.fluid} />
          <figcaption>
            Esplanade Mansion, Kolkata , India by Wikipedia
          </figcaption>
        </figure>
        <div className="container">
          <p>
            With appetising meals at budget-friendly prices, Blue Sky Cafe on
            Sudder Street is one of the go-to cafes for city folks and
            travellers alike. It's a regular cafe with colourful interiors and
            basic, comfortable seating arrangement but serves a scrumptious
            affair.
          </p>
          {/* <p>
            It wasn’t until 1997 until the next major change would occur in The
            Snuff Box being transformed into the business most people know it as
            today, Dantes. In 2019 Dante and Nancy still play a major role in
            the restaurant with Nancy still making her infamous sticky toffee
            pudding and other sweet treats and Dante still cooking in the
            kitchen.
          </p> */}
        </div>
        <div className="aboutGrid">
          <div className="row">
            <div className="block">
              <h2>It Runs in the Family</h2>
              <p>
                During this time their three sons, Remo, Fabio and Sandro have
                gotten involved in the family business, with Fabio succeeding
                his father as role of Head Chef and Remo and Sandro taking
                control of the dining room upstairs.
              </p>
            </div>
            <figure>
              <Img
                fluid={data.brothers.childImageSharp.fluid}
                className="gridImg"
              />
              <figcaption>
                Left to right: Remo, Fabio and Sanrdo. Photo: Ian Boyter
              </figcaption>
            </figure>
          </div>
          <div className="row">
            <div className="block">
              <h2>Our food</h2>
              <p>
                You'll be spoilt for choice with pizzas, pastas, salads, soups,
                Thai dishes and steaks. We'd suggest you try the Farm House
                Steak and the Baked Fish. The pastas are really good too - Alla
                Busera (pasta cooked with tiger prawns in a spicy sauce) and
                Green Garlic Spaghetti (spaghetti with broccoli, mushroom,
                spinach, fresh basil and herbs) are must-haves. Love Thai food?
                Go for the Jai Thai Flat Noodles available in both veg and
                non-veg options. Pair it up with any of the green or red curries
                and you're all set. With seasonal daily specials and a fantastic
                à la carte menu there is something for everyone.
              </p>
            </div>
            <figure>
              <Img
                fluid={data.scallops.childImageSharp.fluid}
                className="gridImg"
              />
            </figure>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    hero: file(relativePath: { eq: "exterior.jpg" }) {
      ...fluidImage
    }
    shops: file(relativePath: { eq: "shops.jpg" }) {
      ...fluidImage
    }
    brothers: file(relativePath: { eq: "brothers.jpg" }) {
      ...fluidImage
    }
    scallops: file(relativePath: { eq: "scallops-dark.jpg" }) {
      ...fluidImage
    }
  }
`
export default AboutPage
