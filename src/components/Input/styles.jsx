import styled from "styled-components";

export const InputContainerStyled = styled.div`
    max-width: 100%;
    padding: 0 1rem 1rem 1rem;
    letter-spacing: .125rem;
    .label-error{
        font-size: 10px;
        letter-spacing: 0;
        margin-top: .5rem;
        color: red;
    }
`;

export const LabelInput = styled.div`
    font-size: .625rem;
    font-weight: bold;
    margin-bottom: .5rem;
`;

export const InputType = styled.input`
    width: 100%;
    height: 32px;
    box-sizing: border-box;
    border: 1px solid #6d6d6d;
    outline: none;
    padding: 1rem 0.5rem;
    border-radius: 5px;
    &:focus {
        border: 1px solid #000000
    }
    ${props => props.error && `
        border: 1px solid red;
        &:focus {
            border: 1px solid red;
        }
    `}
`;