import React, { Component } from "react"
import "normalize.css"

import MovieGrid from "../components/MovieGrid"
import Header from "../components/header"
import { StaticQuery } from "gatsby"

class IndexPage extends React.Component {
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
    const { title } = this.props.site.siteMetadata
    return (
      <>
        <Header siteTitle={title} getMovies={this.getMovies} />
        <MovieGrid>
          {this.state.movies.map(movie => {
            return <h1 key={movie.id}>{movie.title}</h1>
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
    render={data => <IndexPage site={data.site} />}
  />
)
