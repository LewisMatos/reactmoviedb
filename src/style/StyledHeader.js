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
  }
  ul {
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
  color: #BE194B;
  font-size:.5em;
  text-decoration: none;
  line-height: 100px;
  text-align: center;
`
