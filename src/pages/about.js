import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data }) => {

  return (
  <Layout>
    <SEO title="About" />
    <section className="aboutHero">
      
    </section>
  </Layout>
  )
}

export const pageQuery = graphql`
  query {
    hero: file(relativePath: { eq: "table.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default AboutPage