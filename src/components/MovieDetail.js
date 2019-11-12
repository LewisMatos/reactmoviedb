import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { StyledMovieDetail } from '../style/StyledMovieDetail'

const MovieDetail = ({ children, backdrop }) => {
  console.log(backdrop)
  return <StyledMovieDetail backdrop={backdrop}>{children}</StyledMovieDetail>
}

MovieDetail.propTypes = {
  children: PropTypes.node.isRequired,
  backdrop: PropTypes.string,
}
export default MovieDetail
