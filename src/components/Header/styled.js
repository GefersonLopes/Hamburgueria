import styled from "styled-components";

export const HeaderStyled = styled.header`

    img {

        width: 8rem;
        height: 1.5rem;

        margin: 0.5rem 0;

    }

    @media (min-width:768px) {

        img {

            margin: 0 2rem;

        }

    }

    div {

        width: 80%;
        height: 2.5rem;
        
        
        border: 2px solid #E0E0E0;
        border-radius: 8px;
        
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        background: #FFFFFF;

    }

    @media (min-width:768px) {

        div {

            width: 365px;
            height: 60px;

            margin: 0 2rem;
        }

    }

    input {

        border: none;
        height: 90%;
        border-radius: 20px;
        width: 100%;
        flex: 1;
        margin: 1rem;

    }

    input::placeholder {

        width: 100%;

    }

    button {

        width: 6.7rem;
        height: 2rem;
        margin-right: 1rem;

        display: flex;
        align-items: center;
        justify-content: center;
        
        font-family: "Inter";
        font-weight: 500;
        font-size: 0.88rem;

        border: 2px solid #27AE60;
        border-radius: 8px;
        
        background: #27AE60;
        color: #FFFFFF;

    }

    button:hover {

        background: #FFFFFF;
        color: #27AE60;

    }

    button:active {

        background: #27AE60;
        color: #ffff;

    }
    
    

`