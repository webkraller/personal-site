import React from "react"
import { PageTitle, PageLayout } from "../components"
import { Container } from "react-bootstrap"

export default () => {
  return (
    <PageLayout>
      <PageTitle>Graph</PageTitle>
      <Container className="px-5 mb-5 embed-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/sIlNIVXpIns"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Container>
    </PageLayout>
  )
}
