import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import MoviePage from './components/Pages/MoviePage';


function App() {
  return (
    <>
      <Navbar />
      <div className=' mt-28 mb-64'>
        <BrowserRouter >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<MoviePage />} />
          </Routes>
        </BrowserRouter>

      </div>
    </>
  );
}

export default App

