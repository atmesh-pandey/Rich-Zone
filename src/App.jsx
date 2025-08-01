import React from 'react';
import './App.css'; // Assuming you have a CSS file for global style
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Advantages from './components/Advantages';
import Contact from './components/Contact';
import Heart from './components/Heart';
import Explanation from './components/Explanation';
import Country from './components/Country';
import Blog from './components/Blog';
import Footer from './components/Footer';
import About from './components/About';
import Products from './components/Products';

function App() {

  const Home = () => (
    <>
      <Hero />
      <Heart />
      <Explanation />
      <Country />
      <Advantages />
      <Blog />
      <Contact />
      <Footer />
    </>
  );

  return (
    <>
      <div className='w-full overflow-x-hidden'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
