import styled from "styled-components";

export const Container = styled.main`

    margin: 0 auto;
    padding: 0 2rem;

    display: flex;
    flex-direction: column;
    background-color: whitesmoke;
    
    .slider {
        margin: 0 auto;
    }
    .contentProduct {
        
        @media screen and (min-width: 550px) {
        display: flex;
        flex-wrap: wrap;
    }
    }
`