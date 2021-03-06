import React, { useEffect, useState } from 'react';
import Anime from 'react-anime';
import viral from './viralruparel.png';
import hogwartsExpress from './hogwartsExpress.png';
import magicWardPoint from './magicWardPoint.png';
import flyingCar from './flyingCar.png';
import watson from './watson.png';
import university from './university.png';
import envelope from './envelope.png';
import cso from './cso.png';
import ce from './ce_black.png';
import ibm from './ibm.png';
import ac from './ac.png';
import cp from './cp.png';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1);
    return () => {
      const scrollHorizontal = document.getElementById('scrollHorizontal');
      scrollHorizontal.classList.add('blinking');
      setTimeout(() => {
        scrollHorizontal.classList.add('none');
      }, 7000);
    };
  }, [isLoading]);
  return (
    <div>
      {isLoading ? (
        <div className="blinking centerLoading">LOADING</div>
      ) : (
        <div>
          <i id="resumeLink" class="fas fa-file">
            {' '}
            <a
              href="https://drive.google.com/file/d/1LO6olTmHKs_awdde1YBdGKrAP1HuQ5sv/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </i>
          <div id="scrollParent">
            <div className="App horizontal-scroll-wrapper squares">
              <div id="landingPage" className="contentDivs">
                <Anime
                  opacity={[0, 1]}
                  delay={(e, i) => i * 1000}
                  scale={[0.5, 0.9]}
                >
                  <div>
                    <img className="image" alt="viral" src={viral}></img>
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
                  <img src={hogwartsExpress} alt="hogwartsExpress"></img>
                </div>
                <div id="aboutHeading">
                  Part 1: <br />
                  About me
                </div>
              </div>
              <div id="aboutDetails" className="contentDivs">
                <div>
                  <p>
                    <img src={magicWardPoint} alt="magicWardPoint"></img> I am a
                    conscious programmer!
                    <br />
                  </p>
                  <p>
                    <img src={magicWardPoint} alt="magicWardPoint"></img> I
                    think learning a new language is not just learning new
                    syntax!
                    <br />
                  </p>
                  <p>
                    <img src={magicWardPoint} alt="magicWardPoint"></img> Prefer
                    tabs over spaces and cricket over football!
                  </p>
                  <p>
                    <img src={magicWardPoint} alt="magicWardPoint"></img> Strong
                    believer of self awareness!
                  </p>
                  <p>
                    <img src={magicWardPoint} alt="magicWardPoint"></img> Pet
                    lover!
                  </p>
                  <p>
                    <img src={magicWardPoint} alt="magicWardPoint"></img>{' '}
                    Advocate of constructive criticism!
                  </p>
                </div>
              </div>
              <div id="skillsDiv" className="contentDiv">
                <div id="flyingCar">
                  <img src={flyingCar} alt="flyingCar"></img>
                </div>
                <div id="skillsHeading">
                  Part 2: <br />
                  Skills
                </div>
              </div>
              <div id="skillsDetails" className="contentDiv">
                <div>
                  <div>
                    <p>
                      <i className="devicon-javascript-plain colored" />
                      <span>Javascript</span>
                    </p>
                    <p>
                      <i className="devicon-react-original colored" />
                      <span>React</span>
                    </p>
                    <p>
                      <i className="devicon-nodejs-plain colored" />
                      <span>NodeJS</span>
                    </p>
                    <p>
                      <i className="devicon-mongodb-plain colored" />
                      <span>MongoDB</span>
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <p>
                      <i className="devicon-swift-plain colored" />
                      <span>Swift</span>
                    </p>
                    <p>
                      <i className="devicon-css3-plain colored" />
                      <span>CSS3</span>
                    </p>
                    <p>
                      <i className="devicon-html5-plain colored" />
                      <span>HTML5</span>
                    </p>
                    <p>
                      <img src={watson} className="watsonImage" alt="watson" />
                      <span>IBM Watson Assistant</span>
                    </p>
                  </div>
                </div>
              </div>
              <div id="experienceDiv" className="contentDivs">
                <div id="flyingCar">
                  <img src={university} alt="university"></img>
                </div>
                <div id="skillsHeading">
                  Part 3: <br />
                  Experience
                </div>
              </div>
              <div id="experienceDetails" className="contentDivs">
                <div>
                  <div>
                    <img src={cso} alt="cso"></img>
                    <p className="position">
                      Full Stack Chatbot Developer - Remote, ClientSupportOps
                    </p>
                    <p className="duration">October 2019 - December 2019</p>
                    <ul>
                      <li>
                        Design, Build and Deploy chatbots for various client
                        websites.{' '}
                      </li>
                      <li>
                        Build and Deploy analytics dashboard built on MERN.
                        Build Conversation and train NLP Models with high
                        accuracy.
                      </li>
                      <li>
                        Design Conversation, build and deploy various voice bots
                        for the utility clients.
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div>
                    <img src={ce} alt="ce"></img>
                    <p className="position">
                      Full Stack Chatbot Developer - Remote, ColorElephant
                    </p>
                    <p className="duration">January 2019 - September 2019</p>
                    <ul>
                      <li>
                        Design, Build and Deploy chatbots for various channels
                        like Facebook, Web etc.
                      </li>
                      <li>
                        Build Conversation and train NLP Models with high
                        accuracy.
                      </li>
                      <li>
                        Increase the accuracy of pre-built model, to help
                        business get more engagement.
                      </li>
                      <li>
                        Build highly interactive chatbots frameworks, which not
                        only relies on NLP, but also some engaging modules using
                        modern day technologies.
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div>
                    <img src={ibm} alt="ibm"></img>
                    <p className="position">Application Developer, IBM</p>
                    <p className="duration">January 2018 - December 2018</p>
                    <ul>
                      <li>
                        Build and Improve cognitive chat bots continuously with
                        sustainable and competitive solution model using Watson
                        and Node.js.{' '}
                      </li>
                      <li>
                        Technical expertise in Watson Assistant(formerly
                        Conversation) , Discovery and Cloudant services.
                      </li>
                      <li>
                        Implementation and delivery of Cloud(Bluemix) based
                        Automation tools using various Java and Node.js based
                        runtimes and Services, available in the platform.
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div>
                    <img src={ac} alt="ibm"></img>
                    <p className="position">Intern - iOS, Amazecodes</p>
                    <p className="duration">September 2017 - December 2017</p>
                    <ul>
                      <li>
                        Worked as an Intern iOS Developer(Swift) on a
                        Car-pooling app.
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div>
                    <img src={cp} alt="cp"></img>
                    <p className="position">Trainee - iOS, Complitech</p>
                    <p className="duration">May 2016 - April 2017</p>
                    <ul>
                      <li>
                        Developed an app called Yummy Zayka, where house wives
                        can put their menu and people living away from their
                        home can get food like home.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="contactDiv" className="contentDivs">
                <div id="envelope">
                  <img src={envelope} alt="envelope"></img>
                </div>
                <div id="contactHeading">
                  Part 4: <br />
                  Contact
                </div>
              </div>
              <div id="contactDetails" className="contentDivs">
                <div>
                  <a
                    href="https://www.linkedin.com/in/viral-ruparel-3b194297/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://github.com/ViralRuparel"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-github"></i>
                  </a>
                  <a
                    href="https://medium.com/@viralruparel"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-medium-m"></i>
                  </a>
                  <a
                    href="https://twitter.com/ViralRuparel"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/viral.ruparel"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/thatponderingmind/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a
                    href="mailto:viralruparel@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fas fa-at"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="path">
            <div id="scrollHorizontal">Scroll Horizontally</div>
            <span id="char"></span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
