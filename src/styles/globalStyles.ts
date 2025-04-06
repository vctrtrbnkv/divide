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
        font-family: Inter, sans-serif;
    }

    button {
        border: none;
        cursor: pointer;
    }

    h2 {
        font-size: 24px;
        font-weight: 600;
    }
`;

export default GlobalStyle;
