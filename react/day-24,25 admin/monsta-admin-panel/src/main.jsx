import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Pages/Home.jsx'
import AddColor from './Pages/color/AddColor.jsx'
import ViewColor from './Pages/color/ViewColor.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<App />} />

        <Route path="/dashboard" element={<Layout />} >
          <Route index element={<Home />} />

          <Route path='color' >
            <Route path='add' element={<AddColor />} />
            <Route path='view' element={<ViewColor />} />
          </Route>

          

        </Route>

      </Routes>
    </BrowserRouter>

  </StrictMode>,
)
