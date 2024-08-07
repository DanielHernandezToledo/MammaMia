import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { VentasProvider } from './context/VentasProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <VentasProvider>
      <App />
    </VentasProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
