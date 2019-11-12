import styled from 'styled-components'

export const StyledMovieDetail = styled.div`
  min-width: 100vw;
  min-height: 92vh;
  display:flex
  position: absolute;
  color:white;
  z-index: -1;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-image: linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9) ),url(${props => props.backdrop});

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
    width:20vw;
    border-width: 0px;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    @media only screen and (max-width: 600px) {
      width:100vw;
    }
  }

  .details {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: center;
    width:50vw;
    box-sizing: border-box;
    padding-left: 40px;

 @media only screen and (max-width: 600px) {
   width:100%;
}
  }
  .title {
    width: 100%;
  }
  ul{
    display:flex;
    flex-direction:column;
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
      border-radius: 20px;
    border: 2px solid white;
    background-color: black;
    color: #03f603;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    }
    .runtime__red{
    color: red;
    }
    .overview{
      font-family: Droid Serif;
    }
  }


`
