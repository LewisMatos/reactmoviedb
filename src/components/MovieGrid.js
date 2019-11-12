import React from 'react'
import PropTypes from 'prop-types'
import { StyledGridContainer } from '../style/StyledGridContainer'
import { StyledGridItems } from '../style/StyledGridItems'

const MovieGrid = ({ children }) => (
  <StyledGridContainer>
    <StyledGridItems>{children}</StyledGridItems>
  </StyledGridContainer>
)

MovieGrid.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MovieGrid
