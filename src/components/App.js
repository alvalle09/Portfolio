import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import profile from "../assets/profile.png";
import Title from './Title';


class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <div>
        <img src={profile} alt="Profile pic" className="profile" />
        <h1>Alfredo Valle</h1>

        <Title/>
    
        <p>Software Developer</p>
        {this.state.displayBio ? (
          <div>
            <p>
              Full Stack web developer hailing from San Benito, Texas. 
            </p>
            <button onClick={this.toggleDisplayBio}>Show less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read more</button>
          </div>
        )}
        <hr />
        {/* Projects Component */}
        <Projects />
        <hr />
        {/* Social Profiles Component */}
        <SocialProfiles />
      </div>
    );
  }
}

export default App;

