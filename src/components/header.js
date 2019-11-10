import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { StyledHeader, StyledLink } from "../style/StyledHeader"

const Header = ({ siteTitle }) => (
  <StyledHeader>
      <h1>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </h1>
      <nav>
        <ul>
          <li>
            <StyledLink to="/">Popular Movies</StyledLink>
          </li>
          <li>
            <StyledLink to="/page-2/">Top Rated Movies</StyledLink>
          </li>
        </ul>
      </nav>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
