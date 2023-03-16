import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: ${({ theme }) => theme.typography.fontFamily};
    }

    html {
        font-size: ${({ theme }) => theme.typography.htmlFontSize};
    }
`;
