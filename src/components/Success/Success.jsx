import React from 'react'
import IconComplete from '../../assets/icon-complete.svg'
import Button from '../Button/Button'
import { SuccessContainer } from './styles'

const Success = ({ onContinue }) => {
    return (
        <SuccessContainer>
            <img src={IconComplete} alt="Icon Complete" className='icon-complete' />
            <div className='title-success'>THANK YOU!</div>
            <div className='info-success'>We've added your card details</div>
            <Button text="Continue" isLoading={false} onClick={onContinue} />
        </SuccessContainer>
    )
}

export default Success