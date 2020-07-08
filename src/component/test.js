import React from "react"
import Layout from "../component/layout"

import { graphql, Link } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import PrimarySearchAppBar from '../component/newlayout'


export default function Home({ data }) {
  return (

    <PrimarySearchAppBar>

    </PrimarySearchAppBar>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`


//npm install gatsby-remark-code-buttons --save-dev