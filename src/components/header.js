import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { StyledHeader, StyledLink } from "../style/StyledHeader"
import { useSiteMetadata } from '../hooks/useSiteMetaData';


const Header = ({ siteTitle, getMovies}) => {

const {popular_endpoint, top_rated_endpoint} = useSiteMetadata();

const getName = (event) =>{
  let currentSelection = event.target.dataset.endpoint === 'top_rated' ? top_rated_endpoint : popular_endpoint;
  getMovies(currentSelection);
}

  return (
    <StyledHeader>
      <h1>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </h1>
      <nav>
        <ul>
          <li>
            <button onClick={getName} data-endpoint="popular">Popular Movies</button>
          </li>
          <li>
            <button onClick={getName} data-endpoint="top_rated">Top Rated Movies</button>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
