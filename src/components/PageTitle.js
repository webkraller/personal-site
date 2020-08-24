import React from "react"
import { Jumbotron } from "react-bootstrap"

export default ({ title, children }) => (
  <Jumbotron className="bg-none p-0 web-only">
    <h1>
      {title}&nbsp;<span>{children}</span>&nbsp;
    </h1>
  </Jumbotron>
)
