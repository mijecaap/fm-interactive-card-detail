import styled from "styled-components";
import BackgroundMobile from "../../assets/bg-main-mobile.png"
import BackgroundDesktop from "../../assets/bg-main-mobile.png"
import CardBack from "../../assets/bg-card-back.png"
import CardFront from "../../assets/bg-card-front.png"

export const BackgroundPageStyled = styled.div`
    width: 100vw;
    height: 100vh;
    @media (max-width: 768px) {
        .background-card {
            width: 100%;
            height: 320px;
            display: flex;
            justify-content: center;
            background-image: url("${BackgroundMobile}");
            background-position: center top;
            background-repeat: no-repeat;
            background-size: 100% 75%;
            .cards {
                min-width: calc(375px - 2rem);
                height: 100%;
                position: relative;
                .back-card {
                    width: 240px;
                    height: 150px;
                    background-image: url("${CardBack}");
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    margin: 40px 1rem auto auto;
                    p {
                        position: absolute;
                        right: 2rem;
                        top: 4.25rem;
                        font-size: .5rem;
                        color: white;
                    }
                }
                .front-card {
                    width: 240px;
                    height: 150px;
                    background-image: url("${CardFront}");
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    margin: auto auto 40px 1rem;
                    img {
                        width: 50px;
                        margin: 1rem;
                    }
                    .card-number {
                        display: flex;
                        position: absolute;
                        left: 1rem;
                        bottom: 3rem;
                        p {
                            margin: 0 .5rem 0 0;
                            color: white;
                            font-size: .865rem;
                        }
                    }
                    .name {
                        position: absolute;
                        bottom: 1rem;
                        left: 1rem;
                        color: white;
                        font-size: .5rem;
                    }
                    .date {
                        position: absolute;
                        bottom: 1rem;
                        right: 1rem;
                        color: white;
                        font-size: .5rem;
                    }
                }
            }
        }
        .form {
            width: 100%;
            display: flex;
            justify-content: center;
        }
    }
    @media (min-width: 769px) {
        display: flex;
        .background-card {
            width: 40%;
            height: 100%;
            background-image: url("${BackgroundDesktop}");
            background-position: left center;
            background-repeat: no-repeat;
            background-size: 80% 100%;
            display: flex;
            align-items: center;
            justify-content: end;
            .cards {
                transform: scale(1.2,1.2);
                width: 350px;
                height: 320px;
                position: relative;
                .back-card {
                    width: 240px;
                    height: 150px;
                    background-image: url("${CardBack}");
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    p {
                        position: absolute;
                        right: 2rem;
                        top: 4.25rem;
                        font-size: .5rem;
                        color: white;
                    }
                }
                .front-card {
                    width: 240px;
                    height: 150px;
                    background-image: url("${CardFront}");
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    margin: auto auto;
                    img {
                        width: 50px;
                        margin: 1rem;
                    }
                    .card-number {
                        display: flex;
                        position: absolute;
                        left: 1rem;
                        bottom: 3rem;
                        p {
                            margin: 0 .5rem 0 0;
                            color: white;
                            font-size: .865rem;
                        }
                    }
                    .name {
                        position: absolute;
                        bottom: 1rem;
                        left: 1rem;
                        color: white;
                        font-size: .5rem;
                    }
                    .date {
                        position: absolute;
                        bottom: 1rem;
                        right: 1rem;
                        color: white;
                        font-size: .5rem;
                    }
                }
            }
        }
        .form {
            width: 60%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`;