import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;

    }

    body{
        background: #e3d0a8;
    }

    body, input, button{
        font: 16px Roboyo, sans-serif;
    }

    #root{
        max-width: 960px;
        margin: 0 auto;
        padding: 40px 20px;
    }

    button{
        cursos: pointer;
    }
`;
