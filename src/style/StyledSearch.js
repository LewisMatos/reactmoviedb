import styled from 'styled-components'

export const StyledSearch = styled.div`
  .search {
    display: flex;
    width: 80vw;
    margin: 20px auto;
  }

  .searchTerm {
    width: 100%;
    border: 3px solid #be194b;
    border-right: none;
    padding: 5px;
    height: 2rem;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: #9dbfaf;

    :focus {
      color: #be194b;
    }
  }

  .searchButton {
    width: 40px;
    height: 3rem;
    border: 1px solid #be194b;
    background: #be194b;
    text-align: center;
    color: #fff;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-size: 20px;
  }
`
