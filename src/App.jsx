import react, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import Trailers from './components/Pages/Trailers';


function App() {
  return (
    <>
      <Navbar />
      <div className=' mt-28 mb-64'>
        <BrowserRouter >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trailers" element={<Trailers />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App

