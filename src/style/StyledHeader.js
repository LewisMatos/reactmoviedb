import styled from "styled-components"
import { Link } from "gatsby"
export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;

  background: black;
  padding: 1rem;
  margin-bottom: 1.45rem;
  width: 100%;

  div {
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
  }
  h1 {
    margin: 0;
    color: white;
    text-decoration: none;
  }
  li {
    margin: 0 2rem;
  }
  ul {
    margin: 0;
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`
