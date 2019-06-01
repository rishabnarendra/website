import React, { Component } from 'react'; 

class contact extends Component{
    test(){
        alert('Message Sent');
    }

    render(){
        return(
            <div class="Summary">
                <h1 class="Contact">Contact Me</h1>
                <br></br>
                <form class="ContactForm">
                    <label class="Label">NAME</label>
                    <input type="text" class="ContactInput" size="100"></input>
                    <br></br><br></br>
                    <label class="Label">EMAIL</label>
                    <input type="text" class="ContactInput" size="100"></input>
                    <br></br><br></br>
                    <label class="Label">PHONE</label>
                    <input type="text" class="ContactInput" size="100"></input>
                    <br></br><br></br>
                    <label class="Label">MESSAGE</label>
                    <textarea class="ContactInput" name="message" spellcheck="false"></textarea>
                    <br></br><br></br>
                    <button class="Submit" onClick={() => this.test()}>Send Message</button>
                    <br></br><br></br>
                    <footer>
                        {'\u00A9'} 2019 by Rishab Narendra. Proudly created with React.  
                        <br></br><br></br>
                    </footer>
                </form>
            </div>
        );
    }
}

export default contact; 