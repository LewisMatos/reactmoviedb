import styled from 'styled-components'

export const StyledMovieCard = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
  img {
    width: 100%;
  }
  .overview {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
