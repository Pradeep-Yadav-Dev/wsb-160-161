import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './About.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './NotFound.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

   <BrowserRouter>

   <Routes>
    <Route path="/" element={<App/>}/>
     <Route path="/about" element={<About/>}/>

     <Route path="*" element={<NotFound/>} />
   </Routes>

   </BrowserRouter>

  </StrictMode>,
)
