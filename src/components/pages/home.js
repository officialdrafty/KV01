import React, { Component } from "react"
import history from '../history';
import MainScreen from '../Forms/MainScreen';
import Hero from '../layouts/hero';
import About from '../layouts/aboutHome';
import Carosuels from '../Carosuels/Activities/Carosuel1/carosuel.js';

export default class Home extends Component {
  componentDidMount() {
    history.push('/home');
  }
  
  render() {
    return (
      <div id="home">
          <MainScreen />
          <Hero/>
          <About />
          <Carosuels />
      </div> 
    );
  }
}



