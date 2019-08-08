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

    componentDidMount() {
        console.log('Title component mounted');

        this.animateTitles();
    }

    animateTitles = () => {
        setInterval(() => {
            // using modulus to reset back 0 index
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

            this.setState({ titleIndex });
        }, 4000);
    }

    render() {
        const title = TITLES[this.state.titleIndex];

        return (
            <p>I am {title}</p>
        )
    }
}


export default Title;