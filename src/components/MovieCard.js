import React from 'react'
import { Link } from 'gatsby'
import { StyledMovieCard } from '../style/StyledMovieCard'

const MovieCard = ({ image, movieId }) => {
  return (
    <StyledMovieCard>
      <Link to={`/movies/${movieId}`}>
        <div>
          <img src={image} alt="moviethumb" />
        </div>
        {/* <div className="overview">{overview}</div> */}
      </Link>
    </StyledMovieCard>
  )
}

export default MovieCard
