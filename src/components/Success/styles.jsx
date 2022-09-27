import styled from "styled-components";

export const SuccessContainer = styled.div`
    width: calc(373px - 2rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon-complete{
        width: 4rem;
        height: 4rem;
        margin-bottom: 40px;
    }
    .title-success{
        font-size: 24px;
        margin-bottom: 1rem;
    }
    .info-success{
        color: #6d6d6d;
        margin-bottom: 40px;
        letter-spacing: 0;
    }
`;