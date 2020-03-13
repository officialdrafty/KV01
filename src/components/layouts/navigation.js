import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Dropdown from "../dropdowns/dropdowns"; 
import hamburger from "../images/menu.svg"
// This will display the login and sign up buttons
import ModalContext from "../Forms/ModalContext";
import Modal from "react-modal";
import ModalProvider from "../Forms/ModalProvider";

import Close from '../images/close.svg';

class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false
        };
    }

    handleToggle(e) {
        e.preventDefault();
        this.setState(prevState => ({
          isExpanded: !prevState.isExpanded, // negate the previous expanded state
        }));
      }


    render() {

        const { isExpanded } = this.state;

      return (
        <Router>
        {/* Modal provider provides the context to all the children */}
        <ModalProvider>
          <div className="NavbarContainer main">
            <div className="mobilecontainer LeftNav">
              <h2 className="BrandName LeftNav mobileboxmenu inline FarRight">
                Kommonplaces
              </h2>
              <div className="hamburger inlinev">
                <img
                  onClick={e => this.handleToggle(e)}
                  alt="menubtn"
                  src={hamburger}
                />
              </div>
            </div>

            <div
              className={`NavBar collapsed ${isExpanded ? "is-expanded" : ""}`}
            >
              <div className="col-a">
                <Dropdown />
                <li className="RightNav">
                  <Link to="/">Host Your Space</Link>
                </li>
                <li className="RightNav">
                  <Link to="/">About Us</Link>
                </li>
                <li className="RightNav">
                  <Link to="/">Contact Us</Link>
                </li>
              </div>

              <div className="col-c">
                {/* 4. call the prop functions in `Navigation` component */}

                {/* Consumer has access to context as children as function*/}
                <ModalContext.Consumer>
                  {({openModal, closeModal, loginOpened, signupOpened}) => {
                    return (
                      <React.Fragment>
                        <button onClick={openModal("login")}> Login</button>
                        <button onClick={openModal("signup")}>Sign Up</button>
                        <Modal
                          isOpen={loginOpened}
                          onRequestClose={closeModal("login")}>

                          <div onClick={closeModal("login")}>
                              <img className="closebtn" img src={Close} alt="" />
                          </div>

                          <h1 className="h1Content">Welcome Back Brandon!</h1>

                          <form>
                              <input placeholder="Email Address" type="text" onChange="" />
                              <input placeholder="Password" type="password" onChange="" />
                              <input type="button" value="Log In" />    
                          </form>

                          <p className="formContent">By clicking  <button onClick={openModal("signup")}>Sign Up</button>, you agree to Kommonplace’s Services Agreement and Privacy Policy.</p>
                       
                        </Modal>

                        <Modal
                          isOpen={signupOpened}
                          onRequestClose={closeModal("signup")}
                        >
    
                          <div onClick={closeModal("signup")}>
                              <img className="closebtn" img src={Close} alt="" />
                          </div>

                          <h1>Join Kommonplaces</h1>
                          <p>Easily book a location for any offsite, event, or production.</p>

                          <form>
                              <input placeholder="Email Address" type="text" onChange="" />
                              <input placeholder="Password" type="password" onChange="" />
                              <input type="button" value="Sign Up" />    
                          </form>

                          <p className="formContent">By clicking  <button onClick={openModal("signup")}>Sign Up</button>, you agree to Kommonplace’s Services Agreement and Privacy Policy.</p>

                        </Modal>
                      </React.Fragment>
                    );
                  }}
                </ModalContext.Consumer>
              </div>
            </div>
          </div>
        </ModalProvider>
      </Router>
      );
    }
}

  export default Navigation;

  // https://console.developers.google.com/home/dashboard?project=named-flag-270801&supportedpurview=project
  // https://developers.facebook.com/apps/1113992595630733/alerts/inbox/