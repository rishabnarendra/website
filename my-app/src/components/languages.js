import React, { Component } from 'react'; 

class languages extends Component{
    render(){
        return(
            <div class="Summary">
                <h1 class="Languages">Languages</h1> 
                <p>Java</p>
                <div class="Progress">
                    <div class="Bar"></div>
                </div> 

                <p>C/C++</p>
                <div class="Progress">
                    <div class="Bar1"></div>
                </div> 

                <p>Python</p>
                <div class="Progress">
                    <div class="Bar2"></div>
                </div>

                <p>C#</p>
                <div class="Progress">
                    <div class="Bar3"></div>
                </div>

                <p>HTML</p>
                <div class="Progress">
                    <div class="Bar4"></div>
                </div> 

                <p>CSS</p>
                <div class="Progress">
                    <div class="Bar5"></div>
                </div> 

                <p>JavaScript/TypeScript</p>
                <div class="Progress">
                    <div class="Bar6"></div>
                </div>   

                <p>SQL</p>
                <div class="Progress">
                    <div class="Bar7"></div>
                </div>          
            </div>
        );
    }
}

export default languages; 