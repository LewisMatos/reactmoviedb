import styled from 'styled-components'
export const StyledGridItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  grid-gap: 40px;

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`
