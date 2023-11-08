import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './About.tsx'
import App from './App.tsx';
import Register from './Register.tsx';
import Default from './Default.tsx';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Default />
    </BrowserRouter>
  </React.StrictMode>,
)
