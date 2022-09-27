import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CardDetailsForm from '../page/CardDetailsForm'

const CardRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<CardDetailsForm />} />
        </Routes>
    )
}

export default CardRouter