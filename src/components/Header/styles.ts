import styled from "styled-components";

export const ContainerHeader = styled.div`
    background-color: blue;
    height: 4rem;
    .headerPc {
        ul{
            display: flex;
            justify-content: center;

            li {
                margin-top: 15px;
                margin-right: 2rem;

                list-style: none;

                font-weight: bold;
                font-size: 1.5rem;
            }
        }
    }
    
`

export const Container = styled.div`
    display: flex;
    width: 100%;
    background-color: blue;
    
    
    >svg {
        margin: 15px;
        color: #fff;
        font-size: 24px;
        z-index: 10;

    }
    
    
`