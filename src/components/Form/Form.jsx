import React from 'react'
import { useState } from 'react'
import Button from '../Button/Button'
import InputContainer from '../Input/InputContainer'
import Success from '../Success/Success'
import { FormStyled } from './styles'

const date = new Date().getFullYear().toString().slice(2);

const Form = ({ cardDetail, setCardDetail }) => {

  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    name: "",
    cardNumber: "",
    month: "",
    year: "",
    cvv: "",
  })

  const setName = (value) => {
    setError({ ...error, name: "" });
    setCardDetail(cardDetail => ({ ...cardDetail, name: value }));
  }

  const setCardNumber = (value) => {
    if (value.length > 16) return;
    setError({ ...error, cardNumber: "" });
    setCardDetail(cardDetail => ({ ...cardDetail, cardNumber: value }));
  }

  const setMonth = (value) => {

    if (value.length > 2) return;
    if (Number(value) > 12 || Number(value) < 0) return;
    setError({ ...error, month: "" });
    setCardDetail(cardDetail => ({ ...cardDetail, month: value }));
  }

  const setYear = (value) => {
    if (value.length > 2) return;
    setError({ ...error, year: "" });
    setCardDetail(cardDetail => ({ ...cardDetail, year: value }));
  }

  const setCVV = (value) => {
    if (value.length > 3) return;
    setError({ ...error, cvv: "" });
    setCardDetail(cardDetail => ({ ...cardDetail, cvv: value }));
  }

  const onClick = () => {
    setIsLoading(true);
    let haveError = false;
    setTimeout(() => {
      setIsLoading(false);
      if (!cardDetail.name) {
        setError(error => ({ ...error, name: "Can't be blank" }))
        haveError = true;
      }
      if (!cardDetail.cardNumber) {
        setError(error => ({ ...error, cardNumber: "Can't be blank" }))
        haveError = true;
      } else if (cardDetail.cardNumber.length != 16) {
        setError(error => ({ ...error, cardNumber: "They are 12-digit" }))
        haveError = true;
      }
      if (!cardDetail.month) {
        setError(error => ({ ...error, month: "Can't be blank" }))
        haveError = true;
      } else if (Number(cardDetail.month) == 0) {
        setError(error => ({ ...error, month: "Invalid month" }))
        haveError = true;
      }
      if (!cardDetail.year) {
        setError(error => ({ ...error, year: "Can't be blank" }))
        haveError = true;
      } else if (Number(cardDetail.year) == 0 || Number(cardDetail.year) < Number(date)) {
        setError(error => ({ ...error, year: "Invalid year" }))
        haveError = true;
      }
      if (!cardDetail.cvv) {
        setError(error => ({ ...error, cvv: "Can't be blank" }))
        haveError = true;
      } else if (Number(cardDetail.cvv) == 0 || cardDetail.cvv.length != 3) {
        setError(error => ({ ...error, cvv: "Invalid cvv" }))
        haveError = true;
      }
      if (!haveError) setIsConfirmed(true);
    }, 1000);
  }

  const onContinue = () => {
    setCardDetail({
      name: "",
      cardNumber: "",
      month: "",
      year: "",
      cvv: ""
    })
    setIsConfirmed(false);
  }

  return (
    <>
      {
        !isConfirmed ? (
          <FormStyled>
            <InputContainer
              label="CARDHOLDER NAME"
              placeholder="e.g. Miguel Castro"
              setValue={setName}
              value={cardDetail.name}
              type="text"
              error={error.name}
            />
            <InputContainer
              label="CARD NUMBER"
              placeholder="e.g. 1234 5678 9123 0000"
              setValue={setCardNumber}
              value={cardDetail.cardNumber}
              type="number"
              error={error.cardNumber}
            />
            <div className="details-container">
              <div className="date-container">
                <InputContainer
                  label="EXP.DATE"
                  placeholder="MM"
                  setValue={setMonth}
                  value={cardDetail.month}
                  type="number"
                  error={error.month}
                />
                <InputContainer
                  label="(MM/YY)"
                  placeholder="YY"
                  setValue={setYear}
                  value={cardDetail.year}
                  type="number"
                  error={error.year}
                />
              </div>
              <div className="cvv-container">
                <InputContainer
                  label="CVV"
                  placeholder="e.g. 123"
                  setValue={setCVV}
                  value={cardDetail.cvv}
                  type="number"
                  error={error.cvv}
                />
              </div>
            </div>
            <div className="confirm-button">
              <Button text="Confirm" onClick={onClick} isLoading={isLoading} />
            </div>
          </FormStyled>
        ) : (
          <Success onContinue={onContinue} />
        )

      }
    </>
  )
}

export default Form