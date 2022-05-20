import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
} 
    .headerMobile {
        display: none;
    }
    @media screen and (max-width: 768px) {
        #headerPcResposivity{
            display: none;
        }
        .headerMobile {
            display: flex;
            position: fixed;
        }
    }
`;
