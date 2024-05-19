import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import ExploreMoviePage from './components/Pages/ExploreMoviePage';
import SignIn from './components/Pages/signIn/SignIn';
import SignUp from './components/Pages/signUp/SignUp';
import MovieDetails from './components/Pages/MovieDetails';
import Footer from "./components/Pages/Footer";

function App() {
  return (
    <>
      <BrowserRouter >
        <Navbar />
        <div className=' mt-28 mb-64'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<ExploreMoviePage />} />
            <Route path="/details/:id" element={<MovieDetails />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App

