import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"
import "./layout.css"

const Layout = ({ location, title, children }) => {
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
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        minHeight: "100vh",
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header>{header}</header>
      <main style={{ flex: 1 }}>{children}</main>
      <footer>
        Built with
        {` `}
        <a
          href="https://www.gatsbyjs.org"
          style={{ color: "#542c85", fontWeight: "bold" }}
        >
          Gatsby
        </a>{" "}
        and deployed via{" "}
        <span style={{ color: "#00ad9f", fontWeight: "bold" }}>Netlify</span>
      </footer>
    </div>
  )
}

export default Layout
