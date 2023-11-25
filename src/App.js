import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Poems from './components/Poems';
import ColoringBook from './components/ColoringBook';
import Journal from './components/Journal';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/poems' element={<Poems />} />
        <Route path='/coloring-book' element={<ColoringBook />} />
        <Route path='/journal' element={<Journal />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
