import React, { Component } from 'react'; 

class projects extends Component{
    render(){
        return(
            <div class="Summary">
                <h1 class="Projects">Projects</h1>  
                <p>
                    <h3>911 NEXT GENERATION</h3>
                    <p class="Description">
                        Android and Windows application to assist 911 callers by providing operators with important information
                        such as caller location, blood type, and other relevant information. When an operator receives caller 
                        information they may view nearby law enforcement, fire, and emergency medical services to deploy based
                        on callers location and condition. 
                    </p>
                    <br></br>
                    <h3>RUBIK'S CUBE SOLVER</h3>
                    <p class="Description">
                        Java program to solve a 3*3 Rubik's Cube in under a second.  
                    </p>
                    <br></br>
                    <h3>SALT ANALYSIS SIMULATOR</h3>
                    <p class="Description">
                        C++ project that simulates salt analysis using preliminary, dilute acid, concentrated acid, and reagent 
                        tests.
                    </p>
                </p>               
            </div>
        );
    }
}

export default projects; 