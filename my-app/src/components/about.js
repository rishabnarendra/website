import React, { Component } from 'react'; 
import MyResume from './Rishab_Narendra.Resume.pdf';

class about extends Component{

    openResume(){
        window.open(MyResume);
    }

    render(){
        return(
            <div class="Summary">
                <h1 class="About">About Me</h1>
                <p class="Description">
                    My name is Rishab Narendra. Currently I am a Software Development Engineer Intern at Farm Bureau Financial 
                    Services. I am a junior studying Computer Science at Iowa State University and have a deep passion for machine 
                    learning and algorithms along with web development and design. These can be illustrated through my projects 
                    and work experience which required me to learn multiple concepts outside of class. 
                    <br></br><br></br>
                    I am an engaged, creative student seeking to leverage exemplary leadership skills, analytical
                    skills, and coding skills through a full-time job starting in December 2019. 
                </p>

                <br></br>
                <button class="Resume" onClick={() => this.openResume()}>View Full Resume</button>
            </div>
        );
    }
}

export default about; 