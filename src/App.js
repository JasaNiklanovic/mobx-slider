import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools'

import logo from './logo.svg';
import './App.css';
import ImageSlider from './components/ImageSlider';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <ImageSlider />
      <DevTools />      
      </div>
    );
  }
}

export default App;
