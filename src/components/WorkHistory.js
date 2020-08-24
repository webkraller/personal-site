import React from "react"
import Img from "gatsby-image"
import { Container, Row, Col, Badge } from "react-bootstrap"

const CompanyCard = ({ frontmatter, image }) => {
  const { company, position, startDate, endDate, location } = frontmatter
  return (
    <Container fluid className="m-auto work-history">
      <Img
        fluid={image}
        style={{
          maxHeight: "15vmax",
          maxWidth: "15vmax",
        }}
        className="m-auto web-only"
      />
      <div className="md-font">
        <h3 className="m-auto pt-2">{company}</h3>
        <h5 className="text-muted">{location}</h5>
        <h3 className="mt-2 mb-0">{position}</h3>
        <h5 className="text-muted">
          {startDate}-{endDate}
        </h5>
      </div>
    </Container>
  )
}

export default ({ html, frontmatter, image }) => {
  return (
    <Container className="p-1 project-link text-center">
      <Row>
        <Col className="col-md-4 col-12">
          <CompanyCard frontmatter={frontmatter} image={image} />
        </Col>
        <Col className="col-md-8 col-12">
          <p
            className="text-justify mt-2"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Col>
      </Row>
      <Row>
        <Col className="col-md-4 col-12"></Col>
        <Col className="col-md-8 col-12" style={{ flexWrap: "wrap" }}>
          {frontmatter.tags.map(tag => (
            <Badge key={tag} pill className="mr-2 resume-tags">
              {tag}
            </Badge>
          ))}
        </Col>
      </Row>
    </Container>
  )
}
