import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Dropdown from "../components//pages/dropdowns/dropdowns";
import SignupModal from "../components/pages/SignupModal/signupmodal";
import hamburger from "../images/menu.svg";

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
              <div className="NavbarContainer">
                  <div className="mobilecontainer LeftNav">
                      <h2 className="BrandName LeftNav mobileboxmenu inline FarRight">Kommonplaces</h2>
                      <div className="hamburger inlinev" >
                          <img 
                            onClick={e => this.handleToggle(e)}
                            alt="menubtn" 
                            src={hamburger}
                          />
                      </div>
                  </div>


                  <ul className={`NavBar collapsed ${isExpanded ? "is-expanded" : ""}`}>
                        <Dropdown/>    
                        <li className="RightNav"><Link to="/">Host Your Space</Link></li>
                        <li className="RightNav"><Link to="/">About Us</Link></li>
                        <li className="RightNav"><Link to="/">Contact Us</Link></li>
                        <div className="btnflexright">
                            <button className="RightNav" onClick={ this.showSignup }>
                                Sign Up
                            </button>
                            <button className="RightNav" onClick={ this.showLogin }>
                                Login
                            </button>
                            <SignupModal />
                        </div>
                  </ul>
               </div>
         </Router>
      );
    }
}

  export default Navigation;