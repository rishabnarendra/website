import React, { Component } from 'react';
import './App.css';
import Image from './components/image'; 
import About from './components/about';
import Contact from './components/contact';  
import { SocialIcon } from 'react-social-icons';

class App extends Component {
  ScrollToBio(){
    window.scroll({
    top: 2500, 
    left: 0, 
    behavior: 'smooth'
    });
  }

  ScrollToContact(){
    window.scroll({
    top: 2500, 
    left: 0, 
    behavior: 'smooth'
    });
  }

  render() {
    return (
      <div class="WebsiteTopics">
        <div class="Grid">
          <div class="LeftSide">
              <div class="MyName">
                Rishab Narendra
              </div>

              <div class="Tabs">
                <p class="TabLinks" onClick={() => this.ScrollToBio()}>Bio</p>
                <p class="TabLinks">Work</p>
                <p class="TabLinks">Projects</p>
                <p class="TabLinks">Languages</p>
                <p class="TabLinks" onClick={() => this.ScrollToContact()}>Contact</p>
              </div>

              <div class="Introduction">
                <span class="Intro">Hey, I'm <br></br></span>
                <span class="BiggerMyName">Rishab <br></br></span>
                <span class="BiggerMyName"> Narendra <br></br></span>
                <span class="SmallerMyName">Iowa State University / Computer Science</span>
              </div>
          </div>

          <div class="RightSide">
            <Image />
          </div>
        </div>  

      <div class="Sidenav">
        <SocialIcon url="https://www.linkedin.com/in/rishab-narendra-965b04168/" fgColor="#000" bgColor="rgba(247, 220, 79, 1)"/>
        <SocialIcon url="https://github.com/rishabnarendra" fgColor="#000" bgColor="rgba(247, 220, 79, 1)"/>
        <SocialIcon url="https://www.instagram.com/rishabnarendra/?hl=en" fgColor="#000" bgColor="rgba(247, 220, 79, 1)"/>
        <SocialIcon url="https://www.facebook.com/rishab.narendra.7" fgColor="#000" bgColor="rgba(247, 220, 79, 1)"/>
      </div> 

      <About />
      <Contact />
      </div>
    );
  }
}

export default App;
