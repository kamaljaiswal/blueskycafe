import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import LeafletMap from "../components/leafletmap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Modal from "react-modal"

Modal.setAppElement(`#___gatsby`)

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.90)",
    zIndex: "100",
  },
  content: {
    position: "relative",
    top: "50px",
    left: "auto",
    right: "auto",
    bottom: "auto",
    width: "90%",
    maxWidth: "960px",
    margin: "32px auto",
    padding: "10px",
    border: "20px solid #292B3B",
  },
}

const IndexPage = ({ data }) => {
  // Modal stuff.
  const [modalOpen, setModalOpen] = useState(true)
  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <Layout>
      <SEO title="Home" />
      <section className="hero">
        <div className="hero-image">
          <Img fluid={data.pork.childImageSharp.fluid} />
        </div>
      </section>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Modal"
      >
        <div>
          <Link
            to="/"
            onClick={e => {
              e.preventDefault()
              closeModal()
            }}
            className="modal-button"
          >
            Close
          </Link>
          <div className="modal-body">
            <h4>RESUMING SOON </h4>
            {/* <p>
              Until we can welcome you all back into the restaurant, please
              enjoy Dantes at home! Takeaways are available Tuesday - Sunday
              from 5pm. Please check our takeaway menu to see all available
              dishes with takeaway prices. Wine is also available at a 30%
              discount, and we're now offering takeaway cocktails, too.{" "}
            </p>

            <p>
              To order, please call the restaurant on 0131 441 7427 from 2.30pm
              onwards, Tues-Sun. Please note, we are currently unable to take
              orders over email/Facebook.
            </p>

            <p>
              We're so grateful for all the support we've had in this difficult
              time, and so glad we can continue keeping Colinton well fed. 23
              years and counting!{" "}
            </p> */}

            <span>Take care, and keep safe.</span>
            <span>The BlueSkyCafe team</span>
          </div>
        </div>
      </Modal>
      <div className="intro">
        <div className="container">
          <aside className="content">
            <h2>
              Modern Fusion
              <br />
              Cooking
            </h2>
            <p className="content__body">
              With appetising meals at budget-friendly prices, Blue Sky Cafe on
              Sudder Street is one of the go-to cafes for city folks and
              travellers alike. It's a regular cafe with colourful interiors and
              basic, comfortable seating arrangement but serves a scrumptious
              affair.
            </p>
            {/* <Link to="/menus/takeaway" className="content__button">
              View Menus
            </Link> */}
          </aside>
          <div className="gallery">
            <Img
              fluid={data.pastaPortrait.childImageSharp.fluid}
              className="img1"
            />
            <Img fluid={data.pork.childImageSharp.fluid} className="img2" />
            <Img fluid={data.scallops.childImageSharp.fluid} className="img3" />
          </div>
        </div>
      </div>
      <section className="indexMenu">
        <div className="container">
          <aside className="content">
            <h2>
              Family Run Since <br />
              1980
            </h2>
            <p className="content__body">
              From sandwiches and burgers to aloo parathas and Chinese food,
              Blue Sky Cafe serves all you need to satiate those crazy hunger
              pangs. And located in the heart of Kolkata.
            </p>
            <Link to="/about" className="content__button">
              More About Us
            </Link>
          </aside>
        </div>
      </section>
      <section className="reservation">
        <Img fluid={data.wall1.childImageSharp.fluid} className="img4" />
        <div className="overlay">
          <h2>Reservations</h2>
          <p>
            Please call the restaurant for <br />
            reservations
          </p>
          <span>+91-3322522958</span>
        </div>
      </section>
      <section className="findUs container">
        <aside className="content">
          <h2>
            Where To Find <br /> Us
          </h2>
          <span className="content__address">
            Sudder St,New Market Area, Dharmatala, Kolkata
          </span>
          {/* <p className="content__body">Free parking available</p> */}
          <a
            href="https://goo.gl/maps/GgnACaFmKK51wTVZ9"
            rel="noreferrer"
            className="content__button"
          >
            Get Directions
          </a>
        </aside>
      </section>
      <section className="homeMap">
        {typeof window !== "undefined" && <LeafletMap />}
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
`

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
    wall2: file(relativePath: { eq: "wall2.jpg" }) {
      ...fluidImage
    }
  }
`

export default IndexPage
