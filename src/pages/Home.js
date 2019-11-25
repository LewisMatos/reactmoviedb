import React, { Component, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import 'normalize.css'

import MovieGrid from '../components/MovieGrid'
import Header from '../components/Header'
// import { StaticQuery } from 'gatsby'
import MovieCard from '../components/MovieCard'
import { useSiteMetadata } from '../hooks/useSiteMetaData'

const Home = () => {
  const [movies, setMovie] = useState([])
  const [endpoint, setEndpoing] = useState('')

  const { title, top_rated_endpoint, popular_endpoint, image_url, image_size } = useSiteMetadata()

  const getMovies = async endpoint => {
    try {
      const res = await fetch(endpoint)
      const data = await res.json()
      console.log('getmovie')
      setMovie(prev => [...data.results] )
    } catch (error) {
      console.log(error)
    }
  }



  useEffect(() => {
    if (sessionStorage.movies) {
      setMovie(JSON.parse(sessionStorage.movies))
      return
    }
    getMovies(popular_endpoint)
  }, [])


  useEffect(() => {
    sessionStorage.setItem('movies', JSON.stringify(movies))
  }, [movies])

  // componentDidMount() {
  // if (sessionStorage.movies) {
  //   this.setState(JSON.parse(sessionStorage.movies))
  //   return
  // }
  // console.log("here");
  // const { popular_endpoint, top_rated_endpoint } = this.props.site.siteMetadata
  // this.getMovies(popular_endpoint)
  // }
  return (
    <>
      <Header siteTitle={title} getMovies={getMovies} />
      <MovieGrid>
        {movies.map(movie => {
          return <MovieCard key={movie.id} movieId={movie.id} image={`${image_url}${image_size}${movie.poster_path}`} />
        })}
      </MovieGrid>
    </>
  )
}

Home.propTypes = {
  siteMetaData: PropTypes.object,
}

// export default () => (
//   <StaticQuery
//     query={graphql`
//       query {
//         site {
//           siteMetadata {
//             title
//             top_rated_endpoint
//             popular_endpoint
//             image_url
//             image_size
//           }
//         }
//       }
//     `}
//     render={data => <Home site={data.site} />}
//   />
// )

export default Home
