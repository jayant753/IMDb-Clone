import { useState } from 'react'
import './App.css'
import Trailer from './components/Trailer/Trailer';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div >
      <Navbar />
      <div className="pt-28">
        <Trailer />
      </div>

    </div>
  );
}

export default App

