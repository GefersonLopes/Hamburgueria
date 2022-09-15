import styled from "styled-components";

export const LiStyled = styled.li`

    width: 14rem;
    height: 17.2rem;

    background: #FFFFFF;

    border: 2px solid #E0E0E0;
    border-radius: 5px;

    list-style: none;

    .containerImg {

        height: 8rem;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background: #F5F5F5;

    }

    img {

        height: 100%;

    }

    .containerInfoCards {

        width: 100%;
        margin-left: 1rem;

        display: flex;
        flex-direction: column;
        
    }

    label {

        margin: 0 0 1rem 0;

    }

    h3 {

        margin: 0.5rem 0;

        font-family: 'Inter';
        font-weight: 700;
        font-size: 1.1rem;

        color: #333333;

    }

    p {

        margin: 0.5rem 0 0.5rem 0;

        font-family: 'Inter';
        font-weight: 400;
        font-size: 12px;
        
        color: #828282;

    }

    span {

        height: 10px;
        width: 100%;

        font-family: 'Inter';
        font-weight: 600;
        font-size: 14px;

        color: #27AE60;


    }

    button {

        width: 6.6rem;
        height: 2.5rem;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 20px;

        background: #27AE60;

        border: 2px solid #27AE60;
        border-radius: 8px;

        font-family: 'Inter';
        font-weight: 600;
        font-size: 14px;

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