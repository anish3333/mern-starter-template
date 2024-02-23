import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Mainnav from './components/Navbar/Mainnav';
import Home from './page/Home.jsx';
import Navbar from './page/Navbar.jsx';
import Card from './page/Card.jsx';
import Hero from './page/Hero.jsx';
import Form from './page/Form.jsx';
import Extra from './page/Extra.jsx';
import Carousel from './page/Carousel.jsx';
import Footer from './page/Footer.jsx';
import Button from './page/Button.jsx';
import Layout from './page/Layout.jsx';


function App() {
  return (
    <>
      <div className=''>

        <Mainnav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/card" element={<Card />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/form" element={<Form />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/extra" element={<Extra />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/button" element={<Button />} />
          <Route path="/layout" element={<Layout />} />
        </Routes>
      </div>

    </>
  );
}

export default App;
