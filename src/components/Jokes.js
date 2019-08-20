import React, { Component } from 'react';

const Joke = props => {
    const { setup, punchline } = props.joke;

    return <p>{setup} <em>{punchline}</em></p>
}


class Jokes extends Component {
    state = { joke: {}, jokes: []  }; // add jokes array for fetching 10 jokes

    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        //.then(json => console.log('json', json))
        .then(json => this.setState({ joke: json}));

    }

    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
        .then(response => response.json())
        .then(json => this.setState({ jokes: json}));

    }

    render() {        
        const { setup, punchline } = this.state.joke;

        return (
            <div>
                <h2>Highlighted Joke</h2>
                <p>{setup} <em>{punchline}</em></p>
                <hr />
                <h3>10 more jokes???</h3>
                <button onClick={this.fetchJokes} >Click me!</button>
                {
                    this.state.jokes.map(joke => {
                        const { id, setup, punchline } = joke;

                        return <p key={id}>{setup} <em>{punchline} </em></p>
                    })
                }
            </div>
        )
    }
}

export default Jokes;

