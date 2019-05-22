import React, { Component } from 'react'; 

class projects extends Component{
    render(){
        return(
            <div class="Summary">
                <h1 class="Projects">Projects</h1>  
                <p>
                    <h3>NextGen911</h3>
                    <p class="Description">
                    An Android app that uses publicly available emergency services in close proximity to a caller’s location to 
                    allow faster response time during 911 emergencies. Desktop operator receives caller’s health details for 
                    faster aid.
                    </p>
                    <br></br>
                    <h3>SALT ANALYSIS SIMULATOR</h3>
                    <p class="Description">
                    An algorithmic C++ program that simulates the lab salt analysis process by performing preliminary, dilute acid, 
                    concentrated acid, and reagent tests.
                    </p>
                </p>               
            </div>
        );
    }
}

export default projects; 