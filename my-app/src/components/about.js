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
                    My name is Rishab Narendra. I am a junior studying Computer Science at Iowa State University. I have a deep 
                    passion for machine learning and algorithms along with web development and design. These can be illustrated
                    through my projects and work experience which required me to learn multiple concepts outside of class. 
                    <br></br><br></br>
                    Vocent probatus ea usu. Mel albucius oporteat deterruisset cu. Ei vel iudicabit instructior, te atqui solet 
                    propriae cum. Mei prompta commune dissentiet cu, eum ex alterum pericula dissentiet. No falli gubergren 
                    assentior mel.
                </p>

                <br></br>
                <button class="Resume" onClick={() => this.openResume()}>View Full Resume</button>
            </div>
        );
    }
}

export default about; 