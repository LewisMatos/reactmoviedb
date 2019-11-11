import React, { Component } from "react"
import "normalize.css"

import MovieGrid from "../components/MovieGrid"
import Header from "../components/header"
import { StaticQuery } from "gatsby"
import MovieCard from '../components/MovieCard';

class Home extends React.Component {
  state = {
    movies: [],
    endpoint: "",
  }

  getMovies = async endpoint => {
    try {
      const res = await fetch(endpoint)
      const data = await res.json()
      this.setState(prev => ({ ...prev, movies: [...data.results] }))
    } catch (error) {
      console.log(error)
    }
    console.log(this.state)
  }

  componentDidMount() {
    const {
      popular_endpoint,
      top_rated_endpoint,
    } = this.props.site.siteMetadata
    this.getMovies(popular_endpoint)
  }


  render() {
    const { title,image_url,image_size } = this.props.site.siteMetadata
    return (
      <>
        <Header siteTitle={title} getMovies={this.getMovies} />
        <MovieGrid>
          {this.state.movies.map(movie => {
            return <MovieCard key={movie.id} image={`${image_url}${image_size}${movie.poster_path}`}/>
          })}
        </MovieGrid>
      </>
    )
  }
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
