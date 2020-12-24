import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import { particlesOptions, app } from './constants';
import { calculateFaceLocation } from './CalculateFaceLocation';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: {},
    }
  }

  displayFaceBox = box => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = (e) => {
    e.preventDefault();
    this.setState({imageUrl: this.state.input})
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(response => this.displayFaceBox(calculateFaceLocation(response)))
  }

  render() {
    return (
      <div className="App">
        <Particles 
          className="particles"
          params={particlesOptions}
        />
        <Logo />
        <ImageLinkForm 
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
          inputValue={this.state.input} 
        />
        <FaceRecognition 
          imageUrl={this.state.imageUrl}
          box={this.state.box}
        />
      </div>
    );
  }
}

export default App;
