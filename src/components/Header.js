import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { StyledHeader, StyledLink } from '../style/StyledHeader'
import { useSiteMetadata } from '../hooks/useSiteMetaData'
import { StyledButton } from '../style/StyledButton'

const Header = ({ siteTitle, getMovies }) => {
  const { popular_endpoint, top_rated_endpoint } = useSiteMetadata()

  const getName = event => {
    let currentSelection = event.target.dataset.endpoint === 'top_rated' ? top_rated_endpoint : popular_endpoint
    getMovies(currentSelection)
  }

  return (
    <StyledHeader>
      <h1>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </h1>
      <nav>
        {getMovies && (
          <ul>
            <li>
              <StyledButton>
                <button onClick={getName} data-endpoint="popular">
                  Popular Movies
                </button>
              </StyledButton>
            </li>
            <li>
              <StyledButton>
                <button onClick={getName} data-endpoint="top_rated">
                  Top Rated Movies
                </button>
              </StyledButton>
            </li>
          </ul>
        )}
      </nav>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  getMovies: PropTypes.func.isRequired
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
