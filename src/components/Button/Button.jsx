import React from 'react'
import { ButtonStyled } from './styles'

const Button = ({ text, onClick, isLoading }) => {
  return (
    <ButtonStyled onClick={!isLoading ? onClick : (() => { })} isLoading={isLoading}>
      {
        !isLoading ? text : (
          <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        )
      }
    </ButtonStyled>
  )
}

export default Button