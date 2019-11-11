import React, { Component } from "react"

import { StaticQuery } from "gatsby"
import MovieDetail from "../components/MovieDetail"
import Header from "../components/header"

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
    const {
      image_url,
      image_size,
      title: siteTitle,
    } = this.props.site.siteMetadata
    const {
      poster_path,
      title,
      overview,
      runtime,
      vote_average,
    } = this.state.movie_details
    const image = `${image_url}${image_size}${this.state.movie_details.poster_path}`
    return (
      <>
        <div>
          <Header siteTitle={siteTitle} />
          <MovieDetail>
            <div className="single_column">
              <section className="images inner">
                <div className="poster">
                  <img src={image} alt="Poster" />
                </div>
                <div className="poster_wrapper">
                  <section className="header">
                    <ul className="info">
                      <li className="title">
                        <h1>{title}</h1>
                      </li>
                      <li className="vote">
                        <span>userscore: </span>
                        <span className="vote__green">{vote_average}</span>
                      </li>
                      <li className="runtime">
                        <span>runtime: </span>
                        <span className="runtime__red">{runtime}</span>
                      </li>
                      <li className="overview">
                        <p>{overview}</p>
                      </li>
                      <li className="play">
                      <button>PLAY TRAILER</button>
                      </li>
                    </ul>
                  </section>
                </div>
              </section>
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
              title
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
