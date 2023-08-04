import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App,{Dennys,Albertos,ChicFilA} from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<App />} />
        <Route path="/dennys" element={<Dennys />} />
        <Route path="/alberto" element={<Albertos />} />
        <Route path="/chic-fil-a" element={<ChicFilA />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
