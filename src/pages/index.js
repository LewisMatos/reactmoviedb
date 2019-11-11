import React from "react"
import "normalize.css"

import { Router, Link } from "@reach/router"

import Home from "../components/Home"
import Movie from './Movie';
import { GlobalStyle } from '../style/GlobalStyle';

const IndexPage = () => {
  return (
    <>
      <Router>
        <Home path="/" />
        <Movie path="/movies/:movieId" />
      </Router>
      <GlobalStyle />
    </>
  )
}

export default IndexPage
