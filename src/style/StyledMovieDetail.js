import styled from "styled-components"

export const StyledMovieDetail = styled.div`
  width: 1000px;
  padding-top: 40px;
  padding-bottom: 40px;
  z-index: 0;

  section.images {
    display: flex;
    align-items: flex-start;
    flex-wrap: nowrap;
  }

  img {
    min-width: 100%;
    min-height: 100%;
    border-width: 0px;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  }

  .poster_wrapper {
    display: flex;
    min-height: 450px;
  }

  .header {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: center;
    width: 700px;
    box-sizing: border-box;
    padding-left: 40px;
  }
  .title {
    width: 100%;
    font-size: 1.2rem;
  }
  ul{
    display:flex;
    flex-direction:column;
    font-size: 2rem;
    text-decoration:none;
    list-style-type:none;
    padding:0;
    text-transform: uppercase;

    li{
      * + *{
      margin:10px;
      }
    }
    .vote{
      margin-bottom:20px;
    }
    .vote__green{
      color:green;
    }
    .runtime__red{
      color:red;
    }
  }
`
