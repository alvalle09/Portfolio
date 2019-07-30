import React, { Component } from "react";
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';


class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <p>My name is AlFredo Valle. I'm a software developer.</p>
        <p>I'm looking forward to work on new and exciting projects!</p>
        {this.state.displayBio ? (
          <div>
            <p>
              I live in San Benito in the Rio Grande Valley area of beautiful
              south Texas, and am passionate about coding.
            </p>
            <p>
              My favorit language is Javascript, and I enjoy React and Angular
              as well.
            </p>
            <p>
              When I am not coding, I like to spend time in the outdoors fishing
              and camping, or playing drums!
            </p>
            <button onClick={this.toggleDisplayBio}>Show less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read more</button>
          </div>
        )}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;
