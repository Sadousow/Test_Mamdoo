import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/guest/s/default" />} />
        <Route path="/guest/s/default" element={<div>App</div>} />
      </Routes>
    </BrowserRouter>
  )
}

