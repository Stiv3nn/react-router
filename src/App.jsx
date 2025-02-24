//import { useState } from 'react'

//import './App.css'

// importo degli elementi della libreria di gestione delle rotte
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// importo homePage
import homePage from './Pages/homePage';

// importo Chi siamo
import chiSiamo from './Pages/chiSiamo';

// importo Lista posts
import listaPost from './Pages/listaPost';




function App() {
  
  return (

    <>
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<homePage />} /> 

          <Route path='/chi' element={<chiSiamo/>} />
          
          <Route path='/posts' element={<listaPost />} />

        </Routes>

      </BrowserRouter>

    </>

  );

}

export default App
