import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 250px;

    position: fixed;
    background-color: black;
    animation: showSideBar 0.5s;

    @keyframes showSideBar {
        
        from {
            transform: translateX(-100%);
        }
    }
`