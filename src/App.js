import React, { Component } from 'react'; 

class RegularClass {};
class ComponentClass extends Component {};

const regClassInstance = new RegularClass();
const componentClassInstance = new ComponentClass();

console.log('regClassInstance', regClassInstance);
console.log('ComponentClassInstance', componentClassInstance);

class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello!</h1>
                <p>I'm AlFredo Valle</p>
                <p>Looking forward to work on new and exciting projects!</p>
            </div>
        )
    }
}

export default App;
