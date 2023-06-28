import { createGlobalStyle } from "styled-components";

interface GlobalStyleProps {
    theme: object;
}

const GlobalStyles = createGlobalStyle<GlobalStyleProps>`
    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: ${({ theme }) => theme.light};
        font-family: 'Roboto', Arial, sans-serif,;
        font-size: 62.5%;
        max-width: 100%;
        position: fixed;
    }
`

export default GlobalStyles;