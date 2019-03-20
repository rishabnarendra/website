import React, { Component } from 'react';
import './App.css';
import Image from './components/image'; 
import About from './components/about'; 

class App extends Component {
  ScrollToBio(){
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
                <p class="TabLinks">Contact</p>
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

<div class="sidenav">
<a href="#about"></a>
<a href="#services"></a>
<a href="#clients"></a>
<a href="#contact"></a>
</div> 
        <About />
      </div>
    );
  }
}

export default App;
