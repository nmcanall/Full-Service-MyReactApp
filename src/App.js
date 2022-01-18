import React from "react"
import './styles/App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header/>
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;