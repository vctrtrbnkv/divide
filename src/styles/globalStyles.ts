import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        background-color: #f1f1f1;
    }

    body {
        font-family: serif, sans-serif;
    }
`;

export default GlobalStyle;
