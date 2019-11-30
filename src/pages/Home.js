import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import 'normalize.css'
import InfiniteScroll from 'react-infinite-scroll-component'


import MovieGrid from '../components/MovieGrid'
import Header from '../components/Header'
import MovieCard from '../components/MovieCard'
import { useSiteMetadata } from '../hooks/useSiteMetaData'
import { StyledHome } from '../style/StyledHome'
import { StyledButton } from '../style/StyledButton'
import Search from '../components/Search'

const Home = () => {
  const { title, search_url, top_rated_endpoint, popular_endpoint, image_url, image_size } = useSiteMetadata()
  const selectionTypes = [
    { dataPoint: 'popular', content: 'Popular Movies' },
    { dataPoint: 'top_rated', content: 'Top Rated Movies' },
  ]
  const [movies, setMovie] = useState([])
  // const [currentSelection, setCurrentSelection] = useState('Popular')
  const [currentButton, setCurrentButton] = useState(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [currentEndpoint, setCurrentEndpoint] = useState('')

  const getMovies = async endpoint => {
    try {
      const res = await fetch(endpoint)
      const data = await res.json()
      setCurrentPage(data.page)
      setCurrentEndpoint(endpoint)
      setMovie(prev => getUnique([...prev, ...data.results], 'id'))
    } catch (error) {
      console.log(error)
    }
  }

  const getName = event => {
    let currentEndpoint = event.target.dataset.endpoint === 'top_rated' ? top_rated_endpoint : popular_endpoint
    // setCurrentSelection(currentEndpoint.includes('top_rated') ? 'TOP RATED' : 'POPULAR')
    setCurrentButton(event.target.id);
    setMovie([])
    getMovies(currentEndpoint)
  }

  const getMoreMovies = () => {
    getMovies(`${currentEndpoint}&page=${currentPage + 1}`)
    return null;
  }

  const searchMovies = query => {
    setMovie([])
    getMovies(`${search_url}${query}`)
  }

  const getUnique = (arr, comp) => {
    const unique = arr
      .map(e => e[comp])

      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the dead keys & store unique objects
      .filter(e => arr[e])
      .map(e => arr[e])

    return unique
  }

  useEffect(() => {
    const getMovies = async endpoint => {
      try {
        const res = await fetch(endpoint)
        const data = await res.json()
        setCurrentPage(data.page)
        setCurrentEndpoint(endpoint)
        setMovie(prev => getUnique([...prev, ...data.results], 'id'))
      } catch (error) {
        // console.log(error)
      }
    }

    if (sessionStorage.movies) {
      setMovie(JSON.parse(sessionStorage.movies))
      return;
    }
    getMovies(popular_endpoint)
  }, [popular_endpoint])

  useEffect(() => {
    sessionStorage.setItem('movies', JSON.stringify(movies))
  }, [movies])

  return (
    <>
      <Header siteTitle={title} />
      <Search searchMovies={searchMovies} />
      <StyledHome>
        <nav>
          <ul>
            {selectionTypes.map(selection => {
              return (
                <li key={selection.dataPoint}>
                  <StyledButton>
                    <button onClick={getName} id={selection.dataPoint} className={currentButton === selection.dataPoint ? 'active': ''} data-endpoint={selection.dataPoint}>
                      {selection.content}
                    </button>
                  </StyledButton>
                </li>
              )
            })}
          </ul>
        </nav>

        <InfiniteScroll
          dataLength={movies.length}
          next={getMoreMovies}
          hasMore={currentPage >= 20 ? false : true}
          loader={<h1>Loading...</h1>}
          endMessage={<h1> Reached the end</h1>}
        >
          <MovieGrid>
            {movies.map(movie => {
              if (movie.poster_path) {
                return (
                  <MovieCard
                    key={movie.id}
                    movieId={movie.id}
                    image={`${image_url}${image_size}${movie.poster_path}`}
                  />
                )
              }else{
                return (<></>)
              }
            })}
          </MovieGrid>
        </InfiniteScroll>
      </StyledHome>
    </>
  )
}

Home.propTypes = {
  siteMetaData: PropTypes.object,
}

export default Home
