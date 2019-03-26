import React, { Component } from 'react';
import './App.css';
import Image from './components/image'; 
import About from './components/about';
import Work from './components/work';
import Projects from './components/projects';
import Languages from './components/languages';
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

  ScrollToWork(){
    window.scroll({
    top: 2500, 
    left: 0, 
    behavior: 'smooth'
    });
  }

  ScrollToProjects(){
    window.scroll({
    top: 2500, 
    left: 0, 
    behavior: 'smooth'
    });
  }

  ScrollToLanguages(){
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

  openLinkedIn(){
    window.open("https://www.linkedin.com/in/rishab-narendra-965b04168");
  }

  openGitHub(){
    window.open("https://github.com/rishabnarendra");
  }

  openInstagram(){
    window.open("https://www.instagram.com/rishabnarendra/?hl=en");
  }

  openFacebook(){
    window.open("https://www.facebook.com/rishab.narendra.7");
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
                <p class="TabLinks" onClick={() => this.ScrollToWork()}>Work</p>
                <p class="TabLinks" onClick={() => this.ScrollToProjects()}>Projects</p>
                <p class="TabLinks" onClick={() => this.ScrollToLanguages()}>Languages</p>
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
        <SocialIcon network="linkedin" onClick={() => this.openLinkedIn()} fgColor="#000" bgColor="rgba(247, 220, 79, 1)"/>
        <SocialIcon network="github" onClick={() => this.openGitHub()} fgColor="#000" bgColor="rgba(247, 220, 79, 1)"/>
        <SocialIcon network="instagram" onClick={() => this.openInstagram()} fgColor="#000" bgColor="rgba(247, 220, 79, 1)"/>
        <SocialIcon network="facebook" onClick={() => this.openFacebook()} fgColor="#000" bgColor="rgba(247, 220, 79, 1)"/>
      </div> 

      <About />
      <hr></hr>
      <Work />
      <hr></hr>
      <Projects />
      <hr></hr>
      <Languages />
      <hr></hr>
      <Contact />
      <footer>
        {'\u00A9'} 2019 by Rishab Narendra. Proudly created with React.  
        <br></br><br></br>
      </footer>
      </div>
    );
  }
}

export default App;
