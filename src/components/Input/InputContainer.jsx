import React from 'react'
import { InputContainerStyled, InputType, LabelInput } from './styles'

const InputContainer = ({ label, placeholder, setValue, value, type, error }) => {

  const onChange = (e) => {
    const valueTarget = e.target.value;
    if (type === 'number') {
      if (!isNaN(valueTarget)) {
        setValue(valueTarget);
      }
    } else {
      setValue(valueTarget);
    }
  }

  return (
    <InputContainerStyled>
      <LabelInput>
        {label}
      </LabelInput>
      <InputType placeholder={placeholder} onChange={onChange} value={value} error={error} />
      <div className="label-error">{error}</div>
    </InputContainerStyled>

  )
}

export default InputContainer