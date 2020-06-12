import React from "react"

import { rhythm } from "../utils/typography"
import "./layout.css"
import Header from "./header"

const Layout = ({ children, location }) => {
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
      <Header location={location} />
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
