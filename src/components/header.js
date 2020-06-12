import React from "react"
import { Link, useStaticQuery } from "gatsby"
import { rhythm } from "../utils/typography"

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
          twitter
          github
        }
      }
    }
  }
`

const Header = ({ location }) => {
  const {
    site: {
      siteMetadata: { title, social },
    },
  } = useStaticQuery(query)
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1>
        <Link
          style={{
            boxShadow: `none`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {header}
      <nav>
        <a
          href={`https://github.com/${social.github}`}
          style={{ marginRight: rhythm(1 / 2) }}
        >
          Github
        </a>
        <a href={`https://twitter.com/${social.twitter}`}>Twitter</a>
      </nav>
    </header>
  )
}

export default Header
