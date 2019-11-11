import styled from "styled-components"

export const StyledMovieDetail = styled.div`
  width: 100vw;
  height: 100vh;
  display:flex
    position: absolute;
    z-index: -1;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-image: linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9) ),url(${props => props.backdrop});
    will-change: opacity;
    transition: filter 1s;
    color:white;


  .container{
    display:flex;
    justify-content:center;
   align-items:center;
   text-align:center;
    z-index:1;
  }
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
