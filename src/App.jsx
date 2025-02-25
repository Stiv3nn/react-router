//import { useState } from 'react'

//import './App.css'



// importo degli elementi della libreria di gestione delle rotte
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

// importo homePage
import homePage from './pages/homePage';

// importo Chi siamo
import chiSiamo from './pages/chiSiamo';

// importo Lista posts
import listaPost from './pages/listaPost';




function App() {
  
  return (
    
    <>
      <BrowserRouter>
        <Router>
          <Routes>

            <Route path="/" element={<homePage />} /> 

            <Route path="/chiSiamo" element={<chiSiamo/>} />
                
            <Route path="/posts" element={<listaPost />} />

          </Routes>
        </Router>
      </BrowserRouter>
    </>
    
  );

}

export default App
