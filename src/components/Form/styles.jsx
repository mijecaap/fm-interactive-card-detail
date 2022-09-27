import styled from "styled-components";

export const FormStyled = styled.div`
    width: calc(373px - 2rem);
    display: flex;
    flex-direction: column;
    .details-container {
        display: flex;
        width: 100%;
        .date-container {
            display: flex;
            width: 50%;
            div:nth-child(1){
                padding-right: .25rem;
            }
            div:nth-child(2){
                padding-left: .25rem;
                padding-right: 0.5rem;
            }
        }
        .cvv-container {
            width: 50%;
            div {
                padding-left: 0;
            }
        }
    }
    .confirm-button{
        padding: 0 1rem;
    }
`;