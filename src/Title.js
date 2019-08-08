import React, {Component } from 'react';

const TITLES = [
    'a software developer', 
    'a drumming enthusiast',
    'a lifelong learner',
    'an avid reader',
    'a nature admirer'
];

class Title extends Component {
    state = { titleIndex: 0 };

    render() {
        const title = TITLES[this.state.titleIndex];

        return (
            <p>I am {title}</p>
        )
    }
}


export default Title;