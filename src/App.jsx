import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import MoviePage from './components/Pages/MoviePage';
import SignIn from './components/Pages/signIn/SignIn';
import SignUp from './components/Pages/signUp/SignUp';

function App() {
  return (
    <>
      <BrowserRouter >
        <Navbar />
        <div className=' mt-28 mb-64'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<MoviePage />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
          </Routes>

        </div>
      </BrowserRouter>
    </>
  );
}

export default App

