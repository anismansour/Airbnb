import React from 'react';
import './Css/App.css';
import Home from './Home.js';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
