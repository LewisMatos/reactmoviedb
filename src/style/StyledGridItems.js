import styled from 'styled-components'
export const StyledGridItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 40px;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
`
