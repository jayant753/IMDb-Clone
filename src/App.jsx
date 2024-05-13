import { useState } from 'react'
import './App.css'
import WatchTrailer from './components/WatchTrailer/WatchTrailer';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div >
      <Navbar />
      <div className="pt-28">
        <WatchTrailer />
      </div>

    </div>
  );
}

export default App

