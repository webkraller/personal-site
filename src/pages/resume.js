import React from "react"
import { graphql } from "gatsby"
import { PageLayout, PageTitle, WorkHistory } from "../components"
import { SEO, Utils } from "../utils"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Container from "react-bootstrap/Container"

export default ({ data }) => {
  const history = data.allMarkdownRemark.edges || []
  const images = data.allFile.edges || []
  const imageMap = Utils.getImageMap(images, /\/[work].*\/|$/)
  return (
    <PageLayout>
      <SEO title="Resume" />
      <PageTitle title="Resume">
        &nbsp;
        <a href="../../alex-krall-resume.pdf" target="_blank" download>
          <FontAwesomeIcon
            style={{ fontSize: "2rem" }}
            icon={["fas", "file-download"]}
            className="icons file"
            title="Download Resume as PDF"
          />
        </a>
      </PageTitle>
      <Container className="pt-3" fluid>
        <h2 className="m-4">Experience</h2>
        <hr className="w-75" />
        {history.map(({ node }) => (
          <div key={node.id}>
            <WorkHistory
              frontmatter={node.frontmatter}
              image={imageMap[node.fields.slug]}
              html={node.html}
            />
            <hr className="w-75" />
          </div>
        ))}
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/work/" } }
      sort: { fields: [frontmatter___endDate], order: DESC }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            company
            location
            position
            tags
            startDate(formatString: "MMM, YYYY")
            endDate(formatString: "MMM, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
    allFile(
      filter: {
        extension: { eq: "png" }
        relativePath: { regex: "/company/" }
        relativeDirectory: { regex: "/content/work/" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
          relativePath
        }
      }
    }
  }
`
