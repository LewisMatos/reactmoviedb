import styled from "styled-components"

export const StyledMovieDetail = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display:flex
  position: absolute;
  color:white;
  z-index: -1;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-image: linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9) ),url(${props =>
    props.backdrop});

  .container{
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:center;
   align-items:center;
   text-align:center;
   padding-top:5rem;
    z-index:1;
  }
  .images {
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

  .details {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: center;
    width:50vw;
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

    li{
      * + *{
      margin:10px;
      }
    }
    .vote,.runtime{
    text-transform: uppercase;
      margin-bottom:20px;
    }

    .vote__green{
      color:green;
    }
    .runtime__red{
      color:red;
    }
    .overview{
      font-family: Droid Serif;
    }
  }


`
