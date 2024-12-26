import './App.css';
import Alerts from './Components/Alerts';
import Navbar from './Components/Navbar';
import About from './Components/About';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
import TextForm from './Components/TextForm';
// import * as React from "react";
import Contact from './Components/Contact';
import Action from './Components/Action';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.background = "white";
    } else {
      setMode("dark");
      document.body.style.background = "grey";
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="Ishant" about="me" mode={mode} toggleMode={toggleMode} />
        <Alerts alert="This is alert" />
        <div className="container">
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/textform' element={<TextForm heading="Here you can write" />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/action' element={<Action />} />

          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
