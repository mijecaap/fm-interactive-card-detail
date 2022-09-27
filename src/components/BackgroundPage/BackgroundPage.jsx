import React from 'react'
import { BackgroundPageStyled } from './styles'
import CardLogo from '../../assets/card-logo.svg';

const BackgroundPage = ({ children, cardDetail }) => {
    return (
        <BackgroundPageStyled>
            <div className='background-card'>
                <div className='cards'>
                    <div className="back-card">
                        <p className="cvv">{`${cardDetail.cvv[2] ? cardDetail.cvv[0] : '0'}${cardDetail.cvv[2] ? cardDetail.cvv[1] : (cardDetail.cvv[1] ? cardDetail.cvv[0] : '0')}${cardDetail.cvv[2] ? cardDetail.cvv[2] : (cardDetail.cvv[1] ? cardDetail.cvv[1] : (cardDetail.cvv[0] ? cardDetail.cvv[0] : '0'))}`}</p>
                    </div>
                    <div className="front-card">
                        <img src={CardLogo} alt="Card Logo" />
                        <div className="card-number">
                            <p className="first">{`${cardDetail.cardNumber[0] ? cardDetail.cardNumber[0] : '0'}${cardDetail.cardNumber[1] ? cardDetail.cardNumber[1] : '0'}${cardDetail.cardNumber[2] ? cardDetail.cardNumber[2] : '0'}${cardDetail.cardNumber[3] ? cardDetail.cardNumber[3] : '0'}`}</p>
                            <p className="second">{`${cardDetail.cardNumber[4] ? cardDetail.cardNumber[4] : '0'}${cardDetail.cardNumber[5] ? cardDetail.cardNumber[5] : '0'}${cardDetail.cardNumber[6] ? cardDetail.cardNumber[6] : '0'}${cardDetail.cardNumber[7] ? cardDetail.cardNumber[7] : '0'}`}</p>
                            <p className="third">{`${cardDetail.cardNumber[8] ? cardDetail.cardNumber[8] : '0'}${cardDetail.cardNumber[9] ? cardDetail.cardNumber[9] : '0'}${cardDetail.cardNumber[10] ? cardDetail.cardNumber[10] : '0'}${cardDetail.cardNumber[11] ? cardDetail.cardNumber[11] : '0'}`}</p>
                            <p className="fourth">{`${cardDetail.cardNumber[12] ? cardDetail.cardNumber[12] : '0'}${cardDetail.cardNumber[13] ? cardDetail.cardNumber[13] : '0'}${cardDetail.cardNumber[14] ? cardDetail.cardNumber[14] : '0'}${cardDetail.cardNumber[15] ? cardDetail.cardNumber[15] : '0'}`}</p>
                        </div>
                        <p className="name">{cardDetail.name || "MIGUEL CASTRO"}</p>
                        <p className="date">{`${cardDetail.month[1] ? cardDetail.month[0] : '0'}${cardDetail.month[1] ? cardDetail.month[1] : (cardDetail.month[0] ? cardDetail.month[0] : '0')}`}/{`${cardDetail.year[1] ? cardDetail.year[0] : '0'}${cardDetail.year[1] ? cardDetail.year[1] : (cardDetail.year[0] ? cardDetail.year[0] : '0')}`}</p>
                    </div>
                </div>
            </div>
            <div className='form'>
                {children}
            </div>
        </BackgroundPageStyled>
    )
}

export default BackgroundPage