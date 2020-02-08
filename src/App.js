import React from 'react';
import ScrollMagic from 'scrollmagic';
import Anime, { anime } from 'react-anime';
import viral from './viral.png'
import './App.css';

function App() {
  return (
    <div>
      <div id="scrollParent">
        <div className="App horizontal-scroll-wrapper squares">
          <div id="landingPage" className="contentDivs">
            <Anime opacity={[0, 1]} delay={(e, i) => i * 1000} scale={[.5, .9]}>
              <div>
                <img className="image" src={viral}></img>
              </div>
              <div>
                <div className="titleDiv">
                  <span className="viralRuparel">Viral Ruparel</span>
                  <span className="andHis">and his</span>
                  <span className="andHis">connected dots</span>
                </div>
              </div>
            </Anime>
          </div>
          <div className="contentDivs">About</div>
        </div >
      </div >
      <div id="path"><span id="char"></span></div>
    </div >

  );
}

export default App;

{/* 
<div className="contentDivs">Skills</div>
<div className="contentDivs">Work</div>
<div className="contentDivs">Experience</div>
<div className="contentDivs">Contact</div> */}