import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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