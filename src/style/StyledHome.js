import styled from 'styled-components'
export const StyledHome = styled.div`
  h1 {
    font-size: 0.9em;
    color: #be194b;
  }


  li {
    margin: 0 2rem;
    @media only screen and (max-width: 600px) {
      margin: 0;
    }
  }
  ul {
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`
