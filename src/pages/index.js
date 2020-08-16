import React, { useContext } from "react"
import { graphql, Link } from "gatsby"
import ThemeContext from "../utils/theme"
import { PageLayout } from "../components"
import { SEO } from "../utils"
import { Container, Image } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ({ data }) => {
  const MediaLink = ({ title, author, link }) => (
    <li key={title} style={{ color: "gray" }}>
      <a rel="noopener noreferrer" href={link}>
        {title}
      </a>
      &nbsp;-<i>{author}</i>
    </li>
  )
  //const { unemployed, firstName, lastName, tagline } = data.graphcms.metadata
  const {
    unemployed,
    firstName,
    lastName,
    tagline,
    author,
    occupation,
    contactEmail,
    readingList,
  } = data.site.siteMetadata
  const { dark } = useContext(ThemeContext)
  const bookLinks = readingList.map(book => MediaLink(book))
  return (
    <PageLayout>
      <SEO title="Home" />
      <Container className="text-center pt-1 mt-2">
        <Image
          rounded
          width="140"
          height="140"
          fluid
          src="../../images/alex.jpg"
          alt="Alex Krall"
        />
        <h1
          style={{
            fontSize: "4rem",
            color: "black",
          }}
        >
          <span className="first-name">{firstName}</span>&nbsp;
          <span className="last-name">{lastName}</span>
        </h1>
        <article className="w-75 m-auto pt-2 text-justify">
          <h4 className="text-center">
            {tagline.map((attr, i) => (
              <div key={attr}>
                &nbsp;<b>{attr}</b>&nbsp;
                {i < tagline.length - 1}
              </div>
            ))}
          </h4>
          <p className="i-5 mt-4 pt-2">
            Alex is an <mark>MVP engineering veteran</mark> that prioritizes{" "}
            <mark>data-driven decisions</mark>, with over 10 years leading
            software product teams to learn, adapt, and grow. Trained in equal
            parts computer science/software development and the{" "}
            <a target="_BLANK" href="https://twitter.com/billaulet">
              Bill Aulet
            </a>{" "}
            entrepraneur method, Alex leverages his
          </p>
          <p className="i-5">
            <mark>
              Security considerations are a fundamental aspect of software
              products
            </mark>{" "}
            but just because something is done fast doesn't mean it can't be
            done right from the get-go.
          </p>
          <p className="i-5">
            Alex believes in a <mark>healthy work/life balance</mark> and that
            people can truly build amazing things when they are supported to{" "}
            <mark>live a holistic life</mark>. He is excited that surrealist
            humor is back in vogue, and is constantly fascinated at how memes
            ripple and morph throughout society.
          </p>
          <p className="i-5">
            Check out my <Link to="/projects">projects</Link> to see what I've
            been up to! Or check out my <Link to="/resume">resume</Link> to see
            my work experience!
          </p>
        </article>
        <article className="w-75 m-auto">
          {unemployed && (
            <>
              <hr />
              <p className="unemployed">
                <small>
                  I am <b>currently looking for new opportunities</b>! If you
                  like what you <Link to="/resume">see</Link>, let's get
                  in&nbsp;
                  <a
                    href={"mailto:" + contactEmail}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    touch
                  </a>
                  !
                </small>
              </p>
            </>
          )}
          <hr />
          <h5 className="watch-list-title pt-4">Exciting current reads:</h5>
          <ul style={{ fontSize: "0.9rem", listStyle: "none" }}>{bookLinks}</ul>
        </article>
        <hr className="my-3 w-25" />
        <div className="d-md-inline-flex icons-container">
          <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "github"]}
              className="icons github"
              title="Github"
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className="icons linkedin"
              title="LinkedIn"
            />
          </a>
          <a
            href="https://www.hackerrank.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "hackerrank"]}
              className="icons hr"
              title="Hackerrank"
            />
          </a>
          <a
            href="mailto:johndoe@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fas", "envelope"]}
              className="icons mail"
              title="e-mail"
            />
          </a>
          <a href="../../resume.pdf" target="_blank" download>
            <FontAwesomeIcon
              icon={["fas", "file-alt"]}
              className="icons file"
              title="Resume"
            />
          </a>
        </div>
      </Container>
    </PageLayout>
  )
}
/*
export const query = graphql`
  {
    graphcms {
      metadata(where: { id: "ckdxg9ers19jn0171nbspwyha" }) {
        unemployed
        firstName
        lastName
        tagline
      }
    }
  }
`
*/

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        firstName
        lastName
        occupation
        tagline
        author
        readingList {
          title
          author
          link
        }
      }
    }
  }
`
