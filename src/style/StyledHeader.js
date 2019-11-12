import styled from 'styled-components'
import { Link } from 'gatsby'
export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  background: black;
  color: white;
  padding: 0;
   @media only screen and (max-width: 600px) {
      flex-direction: column;
    }
  div {
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
  }
  h1 {
    margin: 0;
    padding: 1rem;

    color: black;
    text-decoration: none;
  }
  li {
    margin: 0 2rem;
    @media only screen and (max-width: 600px) {
      margin:0;
    }
  }
  ul {
    padding:0;
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

export const StyledLink = styled(Link)`
  color: #be194b;
  font-size: 0.5em;
  text-decoration: none;
  line-height: 3;
  text-align: center;
  @media only screen and (max-width: 600px) {
    padding:0;
    line-height:1.5;
    font-size: 1em;
  }
`
