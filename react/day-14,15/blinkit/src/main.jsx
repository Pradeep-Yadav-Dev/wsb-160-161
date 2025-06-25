import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Buymenu from './Buymenu.jsx'
import Checkout from './Checkout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/buymenu' element={<Buymenu />} />
        <Route path='/checkout/:id' element={<Checkout />} />
      </Routes>
    </BrowserRouter>

  </StrictMode>,
)
