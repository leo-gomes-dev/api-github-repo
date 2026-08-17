import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
        outline: 0;
    }

    html, body, #root {
        min-height: 100%;
    }

    body {
        background-color: #0D2636;
        font-size: 14px;
        -webkit-font-smoothing: antialiased !important;
    }

    body, input, button {
        color: #222;
        font-size: 14px;
        font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    }

    button {
        cursor: pointer;
    }
`;
