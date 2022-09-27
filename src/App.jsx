import React from 'react'
import CardRouter from './router/CardRouter'
import { Routes, Route, Navigate } from 'react-router-dom'

const App = () => {
    return (
        <Routes>
            <Route path='card-details/*' element={<CardRouter />} />
            <Route path='/*' element={<Navigate to='card-details' replace />} />
        </Routes>
    )
}

export default App