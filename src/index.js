import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import App1 from './App1';
import App from './App';
import './home.css'
import Movie  from './Movie';
import Cards from './Cards';
import reportWebVitals from './reportWebVitals';
import Down from './Down';
import Movieintro from './Movieintro';
import Hooks from './Hooks';
import Exp1  from './hooks/Exp1';
import UseEffectExp2 from './hooks/UseEffectExp2';
import Exp3 from './hooks/Exp3';
import Moviescroll from './hooks/Moviescroll';
import Navbar from './Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <>
   
<App1/>

   </> 
  
   
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
