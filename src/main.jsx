import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
  <BrowserRouter basename='/react-1'>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </BrowserRouter>
  
  </StrictMode>,
)
