import React from 'react'
import { Link } from 'gatsby'
import { StyledMovieDetail } from '../style/StyledMovieDetail'

const MovieDetail = ({ children, backdrop }) => {
  console.log(backdrop)
  return <StyledMovieDetail backdrop={backdrop}>{children}</StyledMovieDetail>
}

export default MovieDetail
