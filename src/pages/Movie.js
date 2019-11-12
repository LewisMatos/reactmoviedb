import React, { Component } from "react"

import { StaticQuery } from "gatsby"
import MovieDetail from "../components/MovieDetail"
import Header from "../components/Header"
import MovieModal from "../components/MovieModal"
import { StyledButton } from "../style/StyledButton"

class Movie extends React.Component {
  constructor() {
    super()
    this.state = {
      movie_details: {},
      videos: [],
      youtubeKey: "",
      isOpen: false,
    }
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
        youtubeKey: MovieVideoData.results[0].key,
      }))

      localStorage.setItem(movieId, JSON.stringify(this.state));

    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount() {
    const {movieId} = this.props;
    if(localStorage.getItem(movieId)){
      this.setState(JSON.parse(localStorage.getItem(movieId)))
      return;
    }
    console.log('here');
    this.getMovieDetails()
  }

  openModal = () => {
    this.setState({ isOpen: true })
  }

  closeModal = event => {
    this.setState({ isOpen: false })
  }

  render() {
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
      release_date,
    } = this.state.movie_details
    const { isOpen, youtubeKey } = this.state
    const image = `${image_url}${image_size}${this.state.movie_details.poster_path}`
    return (
      <>
          <Header siteTitle={siteTitle} />
          <MovieDetail backdrop={ backdrop_path ? `${image_url}original${backdrop_path}` : ''}>
            <div className="container">
              <div className="poster">
                <img src={image} alt="Poster" />
              </div>
                <section className="details">
                  <ul className="info">
                    <li className="title">
                      {release_date && (
                        <h1>
                          {title} ({release_date.split("-")[0]})
                        </h1>
                      )}
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
                      <StyledButton>
                        <button onClick={this.openModal}>PLAY TRAILER</button>
                      </StyledButton>
                    </li>
                  </ul>
                </section>
            </div>
          </MovieDetail>
        <MovieModal
          isOpen={isOpen}
          youtubeKey={youtubeKey}
          closeModal={this.closeModal}
        />
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
