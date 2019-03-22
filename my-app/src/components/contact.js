import React, { Component } from 'react'; 

class contact extends Component{
    render(){
        return(
            <div class="Summary">
                <h1 class="Contact">Contact Me</h1>
                <form class="ContactForm">
                    <p class="Question">Hi, Wave emoji What's your name</p>
                    <label for="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>

                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
                </form>
            </div>
        );
    }
}

export default contact; 