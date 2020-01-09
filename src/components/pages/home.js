import React, { Component } from "react"
import history from '../history';
import NavbarComponent from '../../layouts/navigation';
import LoginModal from '../pages/SignupModal/signupmodal.js'
export default class Home extends Component {
  componentDidMount() {
    history.push('/home');
  }

  render() {
    return (
      <div id="home">
          <NavbarComponent/>
          <LoginModal />
      </div>
    );
  }
}



