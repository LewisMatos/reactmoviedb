import React, { Component } from "react"

import { StaticQuery } from "gatsby"
import MovieDetail from "../components/MovieDetail"
import Header from "../components/header"
import ModalVideo from "react-modal-video"
import { StyledModal } from "../style/StyledModal"
class Movie extends React.Component {
  constructor() {
    super()
    this.state = {
      movie_details: {},
      videos: [],
      youtubeKey: "",
      isOpen: false,
    }
    this.openModal = this.openModal.bind(this)
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
      console.log(MovieVideoData.results[0].key)
      this.setState(prev => ({
        ...prev,
        movie_details: { ...MovieDetailData },
        videos: [...MovieVideoData.results],
        youtubeKey: MovieVideoData.results[0].key,
      }))
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount() {
    this.getMovieDetails()
  }

  openModal() {
    this.setState({ isOpen: true })
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
      backdrop_path,
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
          <MovieDetail backdrop={`${image_url}original${backdrop_path}`}>
          <div className="container">
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
                    <span className="runtime__red">{runtime} min</span>
                  </li>
                  <li className="overview">
                    <p>{overview}</p>
                  </li>
                  <li className="play">
                    <button onClick={this.openModal}>PLAY TRAILER</button>
                  </li>
                </ul>
              </section>
            </div>
            </div>
          </MovieDetail>
        </div>
        <StyledModal>
          <ModalVideo
            channel="youtube"
            allowFullScreen={true}
            autplay={true}
            isOpen={this.state.isOpen}
            videoId={this.state.youtubeKey}
            onClose={() => this.setState({ isOpen: false })}
          />
        </StyledModal>
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
