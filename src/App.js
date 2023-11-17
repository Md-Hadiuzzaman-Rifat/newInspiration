import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home"
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import VideoPlayer from './pages/VideoPlayer/VideoPlayer';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={ <Home/> }></Route>
        <Route path="/video/:videoId" element={ <VideoPlayer/> }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
