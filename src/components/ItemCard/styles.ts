import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin-right: 10px;
    margin-left: 10px;
    margin-top: 4rem;
    @media screen and (min-width: 768px) {
        width: calc(50% - 20px);
        
    }
    @media screen and (min-width: 1024px) {
        width: calc(33.3% - 20px);
    }
    img {
        object-fit: scale-down;
    }
    

`