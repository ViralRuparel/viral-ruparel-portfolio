import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App horizontal-scroll-wrapper squares">
      <div className="contentDivs">Landing Page</div>
      <div className="contentDivs">About</div>
      <div className="contentDivs">Skills</div>
      <div className="contentDivs">Work</div>
      <div className="contentDivs">Experience</div>
      <div className="contentDivs">Contact</div>
      <div id="path">PATHWAY</div>
    </div >
  );
}

export default App;
