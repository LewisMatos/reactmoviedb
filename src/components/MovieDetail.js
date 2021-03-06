import React from 'react'
import PropTypes from 'prop-types'
import { StyledMovieDetail } from '../style/StyledMovieDetail'

const MovieDetail = ({ children, backdrop }) => {
  console.log(backdrop)
  return <StyledMovieDetail backdrop={backdrop}>{children}</StyledMovieDetail>
}

MovieDetail.propTypes = {
  children: PropTypes.node,
  backdrop: PropTypes.string,
}
export default MovieDetail
