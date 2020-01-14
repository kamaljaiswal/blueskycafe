import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GalleryPage = () => {
  const [index, setIndex] = useState(0)
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "slides" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 1024) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `
  )
  //Minus 1 for array offset from 0
  const length = allFile.edges.length - 1
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)
  const { node } = allFile.edges[index]
  // console.log(index)
  // console.log(length)

  return (
    <Layout>
      <div className="galleryContainer">
        <div className="text-row">
          <h2>Private Functions and Parties</h2>
          <p>We can accommodate parties of any size and have a private dining area which can seat up to 8 people.</p>
        </div>
        <div className="gallery-row">
          <Img
            fluid={node.childImageSharp.fluid}
            key={node.id}
            alt={node.name.replace(/-/g, " ").substring(2)}
          />
          <img src={require('../images/chevron.png')} alt="chevron" onClick={() => handlePrevious()} className="chevron-left chevron" />
          <img src={require('../images/chevron.png')} alt="chevron" onClick={() => handleNext()} className="chevron-right chevron" />
          
        </div>
      </div>
    </Layout>
  )
}

export default GalleryPage