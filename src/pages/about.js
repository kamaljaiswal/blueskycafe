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
      <Img fluid={data.hero.childImageSharp.fluid} className="aboutHero__image"/>
      <div className="overlayContainer">
        <div className="overlay">
          <h1 className="overlay__title">A family run restaurant since 1997</h1>
        </div>
      </div>
    </section>
    <div className="aboutMain">
      <div className="container">
        <h2>We go way back.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, laudantium. Vel ut, beatae ab est, officiis minima nemo nihil debitis iusto, facere nisi. Porro sit distinctio magnam ipsam rem natus.</p>
      </div>
      <figure className="shops">
        <Img fluid={data.shops.childImageSharp.fluid} />
        <figcaption>Bridge Road, Colinton provided by Colinton Magazine</figcaption>
      </figure>
      <div className="container">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, laudantium. Vel ut, beatae ab est, officiis minima nemo nihil debitis iusto, facere nisi. Porro sit distinctio magnam ipsam rem natus.</p>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </p>
      </div>
      <div className="aboutGrid">
        <div className="row">            
          <div className="block">
            <h2>Three musketeers</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium repudiandae, natus asperiores maiores optio fuga. Saepe eveniet qui officia et? Impedit illum esse laudantium assumenda omnis adipisci doloribus.</p>
          </div>
          <figure>
            <Img fluid={data.brothers.childImageSharp.fluid}  className="gridImg"/>
            <figcaption>Left to right: Remo, Fabio and Sanrdo. Photo: Ian Boyter</figcaption>
          </figure>
        </div>
        <div className="row">
          <div className="block">
            <h2>Our food</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium repudiandae, natus asperiores maiores optio fuga. Saepe eveniet qui officia et? Impedit illum esse laudantium assumenda omnis adipisci doloribus.</p>
          </div>
          <figure>
            <Img fluid={data.scallops.childImageSharp.fluid} className="gridImg"/>
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
`;

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