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
      <div className="flex flex-col h-screen bg-background-light">

        {/* Navbar */}
        <Navbar />

        {/* Flex container for sidebar and main content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <Sidebar />

          {/* Main content area */}
          <main className="flex-1 flex justify-center p-4 overflow-auto">
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
