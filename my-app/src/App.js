import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="WebsiteTopics">
        <div class="MyName">
          Rishab Narendra
        </div>

        <div class="Tabs">
          <p class="TabLinks">Bio</p>
          <p class="TabLinks">Work</p>
          <p class="TabLinks">Projects</p>
          <p class="TabLinks">Contact</p>
        </div>

        <div class="Introduction">
          <span class="Intro">Hey, I'm <br></br></span>
          <span class="BiggerMyName">Rishab <br></br></span>
          <span class="BiggerMyName"> Narendra <br></br></span>
          <span class="SmallerMyName">Iowa State University / Computer Science</span>
        </div>
      </div>
    );
  }
}

export default App;
