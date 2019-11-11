import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import "normalize.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { useSiteMetadata } from "../hooks/useSiteMetaData"
import MovieGrid from "../components/MovieGrid"

const IndexPage = () => {
  const [state, setState] = useState({ movies: [] })

  // console.log(state)
  const {
    popular_endpoint,
    top_rated_endpoint,
    image_url,
    image_size,
  } = useSiteMetadata()

  const getMovies = async endpoint => {
    const res = await fetch(endpoint)
    const data = await res.json()
    setState(prev => ({
      ...prev,
      movies: [...data.results],
    }))
  }

  useEffect(() => {
    getMovies(popular_endpoint)
  }, [popular_endpoint])

  return (
    <Layout>
      <SEO title="Home" />
      <MovieGrid>
        {state.movies.map(movie => {
          return <h1 key={movie.id}>{movie.title}</h1>
        })}
      </MovieGrid>
    </Layout>
  )
}

export default IndexPage
