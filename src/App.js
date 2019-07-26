import React, { Component } from 'react'; 

// class RegularClass {};
// class ComponentClass extends Component {};

// const regClassInstance = new RegularClass();
// const componentClassInstance = new ComponentClass();

// console.log('regClassInstance', regClassInstance);
// console.log('ComponentClassInstance', componentClassInstance);


class App extends Component {
    constructor() {
        super(); // need this line otherwise "this" is not available
        this.state = {
            displayBio: false 
        };
    }

    render() {
        let bio = (
          <div>
            <p>
              I live in the Rio Grande Valley in beautiful South Texas,
              and am passionate about coding.
            </p>
            <p>
              My favorit language is Javascript, and I enjoy React and
              Angular as well.
            </p>
            <p>
              When I am not coding, I spend time in the outdoors fishing
              or camping, or playing drums!
            </p>
          </div>
        );

        if (!this.state.displayBio) {
            bio = null;
        }

        return (
            <div>
                <h1>Hello!</h1>
                <p>I'm AlFredo Valle</p>
                <p>Looking forward to work on new and exciting projects!</p>
                {bio}
            </div>
        )
    }
}

export default App;
