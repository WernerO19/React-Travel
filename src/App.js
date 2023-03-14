import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';

export default function App() {
  return (
    <>
    <Navbar />
    <Home />
    <Main />
    <Footer />
    </>
  )
}
