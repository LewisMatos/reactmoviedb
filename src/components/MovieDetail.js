import React from "react"
import { Link } from "gatsby"
import { StyledMovieDetail } from '../style/StyledMovieDetail';

const MovieDetail = ({children}) => {
  return(
  <StyledMovieDetail>
     {children}
  </StyledMovieDetail>
  )
}

export default MovieDetail
