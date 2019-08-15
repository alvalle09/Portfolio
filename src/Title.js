import React, {Component } from 'react';

const TITLES = [
    'a software developer.', 
    'a lifelong learner.',
    'an avid reader.',
    'a nature admirer.',
    'a drums enthusiast.'
];

class Title extends Component {
    state = { titleIndex: 0 };
    
    // component is inserted into DOM
    componentDidMount() {
        console.log('Title component mounted.');

        this.animateTitles();
    }
    
    componentWillUnmount() {
        console.log('Title Component will unmount.')
        clearInterval(this.titleInterval);

    }

    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            // using modulus operator % to reset back 0 index
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

            this.setState({ titleIndex });
        }, 3000);

        console.log('this.titleInterval', this.titleInterval);
        
    }

    render() {
        const title = TITLES[this.state.titleIndex];

        return (
            <p>I am {title}</p>
        )
    }
}

export default Title;