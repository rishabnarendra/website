import React, { Component } from 'react'; 
import Me from './Me.jpg';

class image extends Component{
    render(){
        return(
            <div class="MyImage">
                <img src={Me} alt={"logo"}></img>
            </div>
        );
    }
}

export default image; 