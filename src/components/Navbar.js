import React, { useContext } from "react"
import ThemeContext from "../utils/theme"
import { Navbar, Nav, Form, Image } from "react-bootstrap"
import { Link } from "gatsby"
import "./Fontawesome.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default () => {
  const { dark, toggleDark, toString } = useContext(ThemeContext)
  return (
    <Navbar variant={toString()} fixed="top" collapseOnSelect expand="md">
      <Navbar.Brand as={Link} to="/">
        <Image
          fluid
          src="../../images/alex-cropped.png"
          alt="Alex Krall"
          className="brand-icon rounded"
        />
        Alex Krall
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav className="pr-3 mr-4 nav-links">
          <Nav.Link className="ml-2" as={Link} to="/projects" title="Projects">
            Projects
          </Nav.Link>
          <Nav.Link className="ml-2" as={Link} to="/resume" title="Resume">
            Resume
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
