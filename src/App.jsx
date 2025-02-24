import { useState } from 'react'
//import './App.css'

// importo degli elementi della libreria di gestione delle rotte
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// importo delle pagine
import homePage from './Pages/homepage';
import chiSiamo from './Pages/chisiamo';
import listaPost from './Pages/listaPost';



function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<homePage />} /> 
        <Route path="/chisiamo" element={<chiSiamo/>} />
        <Route path="/listaposts" element={<listaPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
