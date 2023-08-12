import React from 'react';
import Header from './components/Header';
import Meme from './components/Meme';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="wrapper">
          <Meme />
        </div>
      </main>
    </>
  )
}

export default App;
