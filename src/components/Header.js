import PropTypes from 'prop-types'
import React from 'react'
import { StyledHeader, StyledLink } from '../style/StyledHeader'

const Header = ({ siteTitle }) => {

  return (
    <StyledHeader>
      <h1>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </h1>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  getMovies: PropTypes.func,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
