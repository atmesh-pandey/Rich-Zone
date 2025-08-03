import React from 'react';
import './App.css'; // Assuming you have a CSS file for global style
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Advantages from './components/Advantages';
import Contact from './components/Contact';
import Heart from './components/Heart';
import Explanation from './components/Explanation';
import Blog from './components/Blog';
import Footer from './components/Footer';
import About from './components/About';
import Products from './components/Products';
import Kadai from './components/products/Kadai';
import BiryaniPot from './components/products/BiryaniPot';
import FryPan from './components/products/FryPan';
import SaucePan from './components/products/SaucePan';
import Top from './components/products/Top';
import Tasra from './components/products/Tasra';
import SearchResults from './components/SearchResults';
import PECalciumFiller from './components/products/PECalciumFiller';
import PPCalciumFiller from './components/products/PPCalciumFiller';
import HDCalciumFiller from './components/products/HDCalciumFiller';
import SodiumTransparentFiller from './components/products/SodiumTransparentFiller';
import BlackWhiteMasterbatchFiller from './components/products/BlackWhiteMasterbatchFiller';
import DesiccantMasterbatch from './components/products/DesiccantMasterbatch';
import OBMasterbatch from './components/products/OBMasterbatch';
import Catagory from './components/Catagory';
import Items from './components/Items';

function App() {

  const Home = () => (
    <>
      <Hero />
      <Items/> 
      <Heart />
      <Explanation />
      {/* <Country /> */}
      <Advantages />
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
        <Route path="/category" element={<Catagory />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/products/kadai" element={<Kadai />} />
        <Route path="/products/biryani-pot" element={<BiryaniPot />} />
        <Route path="/products/fry-pan" element={<FryPan />} />
        <Route path="/products/sauce-pan" element={<SaucePan />} />
        <Route path="/products/top" element={<Top />} />
        <Route path="/products/tasra" element={<Tasra />} />
        <Route path="/products/pecalciumfiller" element={<PECalciumFiller />} />
        <Route path="/products/ppcalciumfiller" element={<PPCalciumFiller />} />
        <Route path="/products/hdcalciumfiller" element={<HDCalciumFiller />} />
        <Route path="/products/sodiumtransparentfiller" element={<SodiumTransparentFiller />} />
        <Route path="/products/blackwhitemasterbatchfiller" element={<BlackWhiteMasterbatchFiller />} />
        <Route path="/products/desiccantmasterbatch" element={<DesiccantMasterbatch />} />
        <Route path="/products/obmasterbatch" element={<OBMasterbatch />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
