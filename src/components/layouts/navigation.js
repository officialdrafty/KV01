import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Dropdown from "../dropdowns/dropdowns"; 
import hamburger from "../images/menu.svg"


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
              <div className="NavbarContainer main">
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

                  <div className={`NavBar collapsed ${isExpanded ? "is-expanded" : ""}`}>
                      <div className="col-a">
                        <Dropdown/>    
                        <li className="RightNav"><Link to="/">Host Your Space</Link></li>
                        <li className="RightNav"><Link to="/">About Us</Link></li>
                        <li className="RightNav"><Link to="/">Contact Us</Link></li>
                      </div>

                      <div className="col-c">
                      { /* 4. call the prop functions in `Navigation` component */ }
                            <button
                                className={"controller " + (this.props.isLoginOpen ? "selected-controller" : "")}
                                onClick={this.props.showLoginBox}>
                                Login
                            </button>

                            <button
                                className={"controller " + (this.props.isRegisterOpen ? "selected-controller" : "")}
                                onClick={this.props.showRegisterBox}>
                                Sign up
                            </button>
                      </div>
                  </div>
               </div>
         </Router>
      );
    }
}

  export default Navigation;