import React, { useState } from 'react'
import { StyledSearch } from '../style/StyledSearch'

const Search = ({searchMovies}) => {
  const [inputValue, setInputValue] = useState('')

  const searchMovie = event => {
    const { value } = event.target
    setInputValue(value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    searchMovies(inputValue)
    setInputValue('')
  }

  return (
    <>
      <StyledSearch>
        <form onSubmit={handleSubmit}>
          <div className="search">
            <input
              type="text"
              onChange={searchMovie}
              value={inputValue}
              className="searchTerm"
              placeholder="Movie title?"
            />
            <button type="submit" className="searchButton">
              <span role="img" aria-label="search">🔍</span>
            </button>
          </div>
        </form>
      </StyledSearch>
    </>
  )
}

export default Search
