import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router";
import './css/index.css';
import App from './App';
import {ToastContainer} from "react-toastify";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
      <ToastContainer />
  </BrowserRouter>
); 


