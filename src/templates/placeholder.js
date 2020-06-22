import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'


const TemplatePage = ({ data }) => {
  
  return (
    <Layout>
      <h1>Placeholder</h1>
    </Layout>
  )
}

export const templateQuery = graphql`
  {
    markdownRemark(frontmatter: {templateKey: {eq: "template"}}) {
      id
      frontmatter {
        templateKey
      }
    }
  }
`

export default TemplatePage