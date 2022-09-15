import styled from "styled-components";

export const DivStyled = styled.div`

    width: 18rem;
    margin: 1rem auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    .containerGreen {

        width: 100%;
        height: 3.5rem;
        
        background: #27AE60;
        border-radius: 5px 5px 0px 0px;
        
    }

    .h3ContainerGreen {

        margin-left: 1rem;

        font-family: 'Inter';
        font-weight: 700;
        font-size: 1.1rem;

        color: #FFFFFF;

    }

    .CartList_UL {

        overflow-y: auto;

        width: 100%;
        height: 18rem;
        padding: 0;
        padding-top: 0.5rem;
        margin: 0;

        display: flex;
        flex-direction: column;
        gap: 0;

        background: #F5F5F5;
        border-radius: 0px 0px 5px 5px;

    }

    li {

        width: 90%;
        height: 4.5rem;
        margin: 0.5rem auto;

        display: flex;

        list-style-type: none;

    }

    .imgCart {

        width: 5rem;
        height: 100%;
        margin: auto 0;

        background: #E0E0E0;
        border-radius: 5px;

    }

    img {

        width: 4.4rem;
        height: 4.4rem;

    }

    .containerInfoCart {

        width: 100%;

    }

    header {

        width: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;

    }

    .nameItemCart {

        margin-left: 1rem;

        font-family: 'Inter';
        font-weight: 700;
        font-size: 14px;

        color: #333333;


    }

    .btnRemoveIten {

        height: 0.9rem;
        width: 3rem;
        margin-right: 0.5rem;

        font-family: 'Inter';
        font-weight: 500;
        font-size: 12px;

        color: #BDBDBD;

        border: none;
        background: transparent;

    }

    p {

        margin: 0 1rem;

        font-family: 'Inter';
        font-weight: 400;
        font-size: 12px;

        color: #828282;

    }

    .line {

        height: 2px;
        width: 85%;
        margin: 0 auto;
        margin-top: 1rem;

        background: #E0E0E0;

    }

    .label {

        width: 85%;

        display: flex;
        justify-content: space-between;

    }

    .price {

        width: 100%;
        height: 100px;
        
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        
        background: #F5F5F5;

    }

    .btnShop {

        width: 90%;
        height: 60px;
        margin: 0 auto;

        font-family: 'Inter';
        font-weight: 600;
        font-size: 0.8rem;

        background: #E0E0E0;
        color: #828282;

        border: 2px solid #E0E0E0;
        border-radius: 8px;

    }

    .btnShop:hover {

        background: #828282;
        color: #E0E0E0;

    }

    
    .btnShop:active {

        background: #E0E0E0;
        color: #828282;

    }

    label {

        margin: 0 2rem;

        display: flex;
        justify-content: space-between;

    }

    .textTotal {

        margin: 0;
        padding: 0;

        font-family: 'Inter';
        font-weight: 600;
        font-size: 14px;

        color: #333333;

    }

    .valuePrice {

        font-family: 'Inter';
        font-weight: 600;
        font-size: 14px;

        color: #828282;

    }

    .CartList_Vazio {

        width: 18rem;
        height: 7rem;
        margin: 0;
        padding: 0;

        display: flex;
        flex-direction: column;
        align-items: center;

        background: #F5F5F5;
        border-radius: 0px 0px 5px 5px;

    }

`