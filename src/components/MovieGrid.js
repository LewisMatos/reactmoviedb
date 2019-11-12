import React from 'react'
import { StyledGridContainer } from '../style/StyledGridContainer'
import { StyledGridItems } from '../style/StyledGridItems'

const MovieGrid = ({ children }) => (
  <StyledGridContainer>
    <StyledGridItems>{children}</StyledGridItems>
  </StyledGridContainer>
)

export default MovieGrid
