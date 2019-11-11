import React from "react"
import "normalize.css"

import { Router, Link } from "@reach/router"

import Home from "../components/Home"
import Movie from './Movie';

const IndexPage = () => {
  return (
    <>
      <Router>
        <Home path="/" />
        <Movie path="/movies/:movieId" />
      </Router>
    </>
  )
}

export default IndexPage
