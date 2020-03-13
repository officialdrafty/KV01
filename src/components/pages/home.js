import React, { Component } from "react"
import history from '../history';
import Navigation from '../layouts/navigation';
import Hero from '../layouts/hero';
import About from '../layouts/aboutHome';
import Carosuels from '../Carosuels/Activities/index';
import SpecialEvents from '../layouts/setConent';
import ContentWrapper from '../layouts/contentWrapper';
import Footer from '../layouts/footer';

export default class Home extends Component {
  componentDidMount() {
    history.push('/home');
  }
  
  render() {
    return (
      <div id="home">
          <Navigation />
          <Hero />
          <About />
          <Carosuels />
          <SpecialEvents />
          <ContentWrapper />3
          <Footer />
      </div> 
    );
  }
}



