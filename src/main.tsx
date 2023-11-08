import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './About.tsx'
import App from './App.tsx';
import Register from './Register.tsx'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Register />
  </React.StrictMode>,
)
