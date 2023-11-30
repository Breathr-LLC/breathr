import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Poems from './components/Poems';
import ColoringBook from './components/ColoringBook';
import Journal from './components/Journal';
import JournalEntry from './components/JournalEntry';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen bg-background-light">

        {/* Navbar */}
        <div className="z-20">
          <Navbar />
        </div>

        {/* Content below Navbar */}
        <div className="grid grid-cols-[auto] grid-rows-[auto]">
          {/* Sidebar */}
          <div className="z-10">
            <Sidebar className="col-start-1 col-span-full row-start-1 row-span-full h-screen"/>
          </div>

          {/* Main content area */}
          <main className="overflow-auto p-4 flex-1 col-start-2 row-start-2">
            <Routes>
              <Route path='/poems' element={<Poems/>} />
              <Route path='/coloring-book' element={<ColoringBook/>} />
              <Route path='/journal' element={<Journal/>} />
              <Route path='/journalentry' element={<JournalEntry/>} />
        <Route path='/login' element={<Login/>} />
              <Route path='/signup' element={<Signup/>} />
              <Route path='/' element={<Home/>} />
            </Routes>
          </main>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
