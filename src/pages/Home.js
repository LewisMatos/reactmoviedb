import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import 'normalize.css'
import InfiniteScroll from 'react-infinite-scroll-component'

import MovieGrid from '../components/MovieGrid'
import Header from '../components/Header'
import MovieCard from '../components/MovieCard'

import { useSiteMetadata } from '../hooks/useSiteMetaData'
import { StyledHome } from '../style/StyledHome'

const Home = () => {
  const { title, top_rated_endpoint, popular_endpoint, image_url, image_size } = useSiteMetadata()

  const [movies, setMovie] = useState([])
  const [currentSelection, setCurrentSelection] = useState('Popular')
  const [currentPage, setCurrentPage] = useState(0)

  const getMovies = async endpoint => {
    try {
      const res = await fetch(endpoint)
      const data = await res.json()
      setCurrentPage(data.page)
      setMovie(prev => [...prev, ...data.results])
    } catch (error) {
      console.log(error)
    }
  }

  const getMoreMovies = () => {
    const endpoint = currentSelection === 'Popular' ? popular_endpoint : top_rated_endpoint
    getMovies(`${endpoint}&page=${currentPage + 1}`)
  }

  useEffect(() => {
    if (sessionStorage.movies) {
      setMovie(JSON.parse(sessionStorage.movies))
      return
    }
    getMovies(popular_endpoint)
  }, [popular_endpoint])

  useEffect(() => {
    sessionStorage.setItem('movies', JSON.stringify(movies))
  }, [movies])

  return (
    <div>
      <Header siteTitle={title} getMovies={getMovies} setSelection={setCurrentSelection} setMovie={setMovie} />
      <StyledHome>
        <h1>{currentSelection}</h1>

        <InfiniteScroll
          dataLength={movies.length}
          next={getMoreMovies}
          hasMore={currentPage >= 20 ? false : true}
          loader={<h1>Loading...</h1>}
          endMessage={<h1> Reached the end</h1>}
        >
          <MovieGrid>
            {movies.map(movie => {
              return (
                <MovieCard key={movie.id} movieId={movie.id} image={`${image_url}${image_size}${movie.poster_path}`} />
              )
            })}
          </MovieGrid>
        </InfiniteScroll>
      </StyledHome>
    </div>
  )
}

Home.propTypes = {
  siteMetaData: PropTypes.object,
}

export default Home
