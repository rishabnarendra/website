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
    top: 0, 
    left: 0, 
    behavior: 'smooth'
    });
  }

  getWorkRef = el => {
    this.sectionRef = el;
  }

  ScrollToWork(){
    if (this.sectionRef) {
      window.scrollTo({
        top: this.sectionRef.offsetTop,
        behavior: 'smooth',
      });
    }
  }

  getProjectsRef = el => {
    this.sectionRef = el;
  }

  ScrollToProjects = e => {
    if (this.sectionRef) {
      window.scrollTo({
        top: this.Work.offsetTop,
        behavior: 'smooth',
      });
    }
  }

  ScrollToLanguages(){
    window.scroll({
    top: 3160, 
    left: 0, 
    behavior: 'smooth'
    });
  }

  ScrollToContact(){
    window.scroll({
    top: 4000, 
    left: 0, 
    behavior: 'smooth'
    });
  }

  openLinkedIn(){
    window.open("https://www.linkedin.com/in/rishab-narendra/");
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
          </div>

          {/* <div class="RightSide">
            <Image />
          </div> */}

        <div class="Sidenav">
          <SocialIcon network="linkedin" onClick={() => this.openLinkedIn()} fgColor="#000" bgColor="rgba(247, 220, 79, 1)"/>
          <SocialIcon network="github" onClick={() => this.openGitHub()} fgColor="#000" bgColor="rgba(247, 220, 79, 1)"/>
          <SocialIcon network="instagram" onClick={() => this.openInstagram()} fgColor="#000" bgColor="rgba(247, 220, 79, 1)"/>
          <SocialIcon network="facebook" onClick={() => this.openFacebook()} fgColor="#000" bgColor="rgba(247, 220, 79, 1)"/>
        </div> 

        <About />
        <hr></hr>
        <section ref={this.getWorkRef}></section>
        <Work />
        <hr></hr>
        <section ref={this.getProjectsRef}></section>
        <Projects />
        <hr></hr>
        <Languages />
        <hr></hr>
        <Contact />
      </div>
    );
  }
}

export default App;
