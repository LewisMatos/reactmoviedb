import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color:black;
        font-family: 'Roboto', 'Droid Serif', Sans-Serif;
        font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));

    }
`
