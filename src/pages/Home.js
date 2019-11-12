import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'normalize.css'

import MovieGrid from '../components/MovieGrid'
import Header from '../components/Header'
import { StaticQuery } from 'gatsby'
import MovieCard from '../components/MovieCard'

class Home extends React.Component {
  state = {
    movies: [],
    endpoint: '',
  }

  getMovies = async endpoint => {
    try {
      const res = await fetch(endpoint)
      const data = await res.json()
      this.setState(prev => ({ ...prev, movies: [...data.results] }))

      sessionStorage.setItem('movies', JSON.stringify(this.state))
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount() {
    if (sessionStorage.movies) {
      this.setState(JSON.parse(sessionStorage.movies))
      return
    }
    // console.log("here");
    const { popular_endpoint, top_rated_endpoint } = this.props.site.siteMetadata
    this.getMovies(popular_endpoint)
  }

  render() {
    const { title, image_url, image_size } = this.props.site.siteMetadata
    return (
      <>
        <Header siteTitle={title} getMovies={this.getMovies} />
        <MovieGrid>
          {this.state.movies.map(movie => {
            return (
              <MovieCard key={movie.id} movieId={movie.id} image={`${image_url}${image_size}${movie.poster_path}`} />
            )
          })}
        </MovieGrid>
      </>
    )
  }
}

Home.propTypes = {
  siteMetaData: PropTypes.object,
}


export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            top_rated_endpoint
            popular_endpoint
            image_url
            image_size
          }
        }
      }
    `}
    render={data => <Home site={data.site} />}
  />
)


