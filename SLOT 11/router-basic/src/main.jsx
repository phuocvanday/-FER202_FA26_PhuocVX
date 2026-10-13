import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Bai3App from './bai3/Bai3App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Bai3App />
    </BrowserRouter>
  </StrictMode>,
)
