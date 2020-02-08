import React from 'react';
import ScrollMagic from 'scrollmagic';
import Anime, { anime } from 'react-anime';
import viral from './viral.png'
import hogwartsExpress from './hogwartsExpress.png'
import magicWardPoint from './magicWardPoint.png'
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
          <div id="aboutDiv" className="contentDivs">
            <div id="hogwartsExpress">
              <img src={hogwartsExpress}></img>
            </div>
            <div id="aboutHeading">
              Part 1: <br />About me
            </div>
          </div>
          <div id="aboutDetails" className="contentDivs">
            <div>
              <p>
                <img src={magicWardPoint}></img> I am a conscious programmer!<br />
              </p>
              <p>
                <img src={magicWardPoint}></img> I think learning a new language is not just learning new syntax!<br />
              </p>
              <p>
                <img src={magicWardPoint}></img> Prefer tabs over spaces and cricket over football!
            </p>
              <p>
                <img src={magicWardPoint}></img> Strong believer of self awareness!
            </p>
              <p>
                <img src={magicWardPoint}></img> Pet lover!
            </p>
              <p>
                <img src={magicWardPoint}></img> Advocate of constructive criticism!
            </p>
            </div>
          </div>
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