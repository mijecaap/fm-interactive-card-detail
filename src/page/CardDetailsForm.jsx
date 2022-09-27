import React from 'react'
import { useState } from 'react'
import BackgroundPage from '../components/BackgroundPage/BackgroundPage'
import Form from '../components/Form/Form'

const CardDetailsForm = () => {

  // const [name, setName] = useState('');
  // const [cardNumber, setCardNumber] = useState('');
  // const [month, setMonth] = useState('');
  // const [year, setYear] = useState('');
  // const [cvv, setCvv] = useState('');

  const [cardDetail, setCardDetail] = useState({
    name: '',
    cardNumber: '',
    month: '',
    year: '',
    cvv: ''
  });

  return (
    // <BackgroundPage name={name} cardNumber={cardNumber} month={month} year={year} cvv={cvv} >
    //   <Form setName={setName} setCardNumber={setCardNumber} setMonth={setMonth} setYear={setYear} setCvv={setCvv} />
    // </BackgroundPage>
    <BackgroundPage cardDetail={cardDetail} >
      <Form cardDetail={cardDetail} setCardDetail={setCardDetail} />
    </BackgroundPage>
  )
}

export default CardDetailsForm