import React from "react"
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import LeafletMap from '../components/leafletmap'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => {

  return (
  <Layout>
    <SEO title="Home" />
    <section className="hero">
      <div className="hero-image">
        <Img fluid={data.hero.childImageSharp.fluid}/>
      </div>
    </section>
    <div className="intro">
      <div className="container">
        <span className="chevron">
          <Img fluid={data.chevron.childImageSharp.fluid}/>
        </span>
        <aside className="content">
          <h2>Family Run Since 1997</h2>
          <p className="content__body">Dantes is a modern, warm and friendly family-run Italian restaurant in the heart of Colinton, Edinburgh. Our fully-licensed restaurant offers a great range of traditional Italian cuisine, a fantastic à la carte menu, and seasonal daily specials. We offer al fresco dining and can cater for any size of party, with a private dining area for parties up to eight people</p>
          <Link to="/about" className="content__button" >More about us</Link>
        </aside>
        <div className="gallery">
          <Img fluid={data.pastaPortrait.childImageSharp.fluid} className="img1"/>
          <Img fluid={data.pork.childImageSharp.fluid} className="img2"/>
          <Img fluid={data.scallops.childImageSharp.fluid} className="img3"/>
        </div>
      </div>
    </div>
    <section className="indexMenu">
      <div className="container">
        <aside className="content">
          <h2>Modern Italian<br/>Cooking</h2>
          <p className="content__body">Dantes is a modern, warm and friendly family-run Italian restaurant in the heart of Colinton, Edinburgh. Our fully-licensed restaurant offers a great range of traditional Italian cuisine, a fantastic à la carte menu, and seasonal daily specials. We offer al fresco dining and can cater for any size of party, with a private dining area for parties up to eight people</p>
          <Link to="/menu" className="content__button" >View Menus</Link>
        </aside> 
      </div>
    </section>
    <section className="reservation">
      <Img fluid={data.wall1.childImageSharp.fluid} className="img4"/>
      <div className="overlay">
        <h2>Reservations</h2>
        <p>Please call the restaurant for <br/>reservations</p>
        <span>0131 441 7427</span>
      </div>
    </section>
    <section className="findUs container">
      <aside className="content">
        <h2>Where To Find <br/> Us</h2>
        <span className="content__address">48-50 Bridge Road
        Colinton, EH13 0LQ</span>
        <p className="content__body">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
        <a href="https://goo.gl/maps/FGipk86ehdi1Rmj47" rel="noreferrer" className="content__button" >Get Directions</a>
      </aside>
    </section>
    <section className="homeMap">
      <LeafletMap />
    </section>
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
    hero: file(relativePath: { eq: "table.jpg" }) {
      ...fluidImage
    }
    chevron: file(relativePath: { eq: "chevron.png" }) {
      ...fluidImage
    }
    pastaPortrait: file(relativePath: { eq: "ling-dark.jpg" }) {
      ...fluidImage
    }
    pork: file(relativePath: { eq: "pork.jpg" }) {
      ...fluidImage
    }
    scallops: file(relativePath: { eq: "scallops.jpg" }) {
      ...fluidImage
    }
    wall1: file(relativePath: { eq: "wall1.jpg" }) {
      ...fluidImage
    }
  }
`;

export default IndexPage
