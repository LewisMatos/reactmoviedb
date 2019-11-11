import React, { Component } from "react"

import { StaticQuery } from "gatsby"
import MovieDetail from "../components/MovieDetail"

class Movie extends React.Component {
  state = {
    movie_details: {},
    videos: [],
  }

  getMovieDetails = async endpoint => {
    const { tmdb_url, tmdb_api_key } = this.props.site.siteMetadata
    const { movieId } = this.props
    const movieDetailEndpoint = `${tmdb_url}movie/${movieId}?api_key=${tmdb_api_key}`
    const movieVideoEndpoint = `${tmdb_url}movie/${movieId}/videos?api_key=${tmdb_api_key}`

    try {
      const MovieDetailResponse = await fetch(movieDetailEndpoint)
      const MovieDetailData = await MovieDetailResponse.json()

      const MovieVideoResponse = await fetch(movieVideoEndpoint)
      const MovieVideoData = await MovieVideoResponse.json()

      this.setState(prev => ({
        ...prev,
        movie_details: { ...MovieDetailData },
        videos: [...MovieVideoData.results],
      }))
    } catch (error) {
      console.log(error)
    }

  }

  componentDidMount() {
    this.getMovieDetails()
  }

  render() {
    console.log(this.state)
    const { image_url, image_size } = this.props.site.siteMetadata
    const {poster_path, title, overview, runtime, vote_average} = this.state.movie_details
    const image = `${image_url}${image_size}${this.state.movie_details.poster_path}`;
    return (
      <>
        <div>
          <MovieDetail>
              <img
                src={image}
                alt="Poster"
              />
              <div className="details">
              <h1 className="title">{title}</h1>
              <h1 className="vote">{vote_average}</h1>
              <h1 className="runtime">{runtime}</h1>
              <p className="overview">{overview}</p>
              </div>
          </MovieDetail>
        </div>
      </>
    )
  }
}

export default ({ movieId }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              tmdb_url
              tmdb_api_key
              image_url
              image_size
            }
          }
        }
      `}
      render={data => <Movie site={data.site} movieId={movieId} />}
    />
  )
}
