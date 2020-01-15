import React, { Component } from "react"
import history from '../history';
import Navigation from '../../layouts/navigation';

export default class Home extends Component {
  componentDidMount() {
    history.push('/home');
  }
  
  showLoginBox() {
    this.setState({isLoginOpen: true, isRegisterOpen: false});
  }

  showRegisterBox() {
    this.setState({isRegisterOpen: true, isLoginOpen: false});
  }

  render() {
    return (
      <div id="home">
          <Navigation showRegisterBox={this.showRegisterBox.bind(this)} showLoginBox={this.showLoginBox.bind(this)}/>
      </div>
    );
  }
}



