import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PaginaInicial from './pages/PaginaInicial';
import Errou from './pages/Errou';
import Ganhou from './pages/Ganhou';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path= "/" element={<PaginaInicial />}/>
        <Route path='/jogo' element={<App />} />
        <Route path='/vitoria' element={<Ganhou />} />
        <Route path='/derrota' element={<Errou />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
