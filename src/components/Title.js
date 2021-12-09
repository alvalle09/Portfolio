import React, {Component } from 'react';

const TITLES = [ 
    'Passions include:',
    'reading.',
    'learning.',
    'implementing.',
    'repeat...'
];

class Title extends Component {
    state = { titleIndex: 0,
              fadeIn: true              
            };
    
    componentDidMount() {

        this.timeout = setTimeout(() => { this.setState({ fadeIn: false }) }, 3000);

        this.animateTitles();
    }
    
    componentWillUnmount() {
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    }

    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            // using modulus operator % to reset back 0 index
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

            this.setState({ titleIndex, fadeIn: true });

            this.timeout = setTimeout(() => { this.setState({ fadeIn: false }) }, 2000);
        }, 4000);
        
    }

    render() {
        const { fadeIn, titleIndex } = this.state;

        const title = TITLES[titleIndex];

        return (
            <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>{title}</p>
        )
    }
}

export default Title;