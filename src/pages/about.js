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
              A family run restaurant since 1997
            </h1>
          </div>
        </div>
      </section>
      <div className="aboutMain">
        <div className="container">
          <h2>We go way back.</h2>
          <p>
            Our restaurant has not always been as it seems with its history
            going far back. In 1973 Dante and Nancy Margiotta’s first venture
            into Colinton came in the form of The Snuff Box, a sweetie shop
            which occupied half of the space of the current restaurant today.
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
            The shop was later expanded into the ironmongers next door when its
            owner decided to retire and insisted the Margiotta’s enlarge their
            business onto his premise. They could not afford the upfront costs
            however came to the agreement to pay £17 a week until the debt was
            collected. Without this act of kindness, Dantes as it is today may
            never have come into existence.
          </p>
          <p>
            It wasn’t until 1997 until the next major change would occur in The
            Snuff Box being transformed into the business most people know it as
            today, Dantes. In 2019 Dante and Nancy still play a major role in
            the restaurant with Nancy still making her infamous sticky toffee
            pudding and other sweet treats and Dante still cooking in the
            kitchen.
          </p>
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
                Our diners can expect fresh traditional Italian cuisine with a
                modern twist, all served in a warm, welcoming environment. With
                seasonal daily specials and a fantastic à la carte menu there is
                something for everyone.
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
