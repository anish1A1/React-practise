import { StrictMode } from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from "./ReactRouter/About.jsx";
import Contact from './ReactRouter/Contact.jsx';
import Home from './ReactRouter/Home.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Router>
      <Routes >
        <Route path="/" element = {<App />} />
        <Route path="/about" element ={<About />} />
        <Route path='/contact' element = {<Contact />} />
        <Route path='/home' element = {<Home />} />
      </Routes>
    </Router>



  </StrictMode>
)
