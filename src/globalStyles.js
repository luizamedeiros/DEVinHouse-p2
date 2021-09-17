import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    h1, h2, h3, h4, h5, h6, a, p, button, li, ul, nav, th, td, tr{
        font-family: 'Raleway', sans-serif;
    }
    nav{
        display: flex;
        width: 100%;
        background-color: #181F75;
        margin-bottom: 5%;
    }
    ul{
        display: flex;
        list-style: none;
        margin: 0;
        padding: 1%;
        width: 100%;
    }
`
export default GlobalStyle;