import { useState } from 'react'
import './App.css'
import WatchTrailer from './components/WatchTrailer/WatchTrailer';
import Navbar from './components/Navbar/Navbar';
import Featured from './components/Featured/Featured';


function App() {
  return (
    <>
      <Navbar />
      <div className='w-[85%] gap-4 mx-auto mb-64'>
        <WatchTrailer />
        <Featured />
      </div>
    </>
  );
}

export default App

