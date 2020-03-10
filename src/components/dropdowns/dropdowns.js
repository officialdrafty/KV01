import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';


class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <Router>
            <div  className="Dropdown">
            <li className="RightNav" onClick={this.showDropdownMenu}><Link to="/">Activities</Link></li>

            { this.state.displayMenu ? (
                <ul className="Dropdown-Content">
                     <li className=""><Link to="/">Host Your Space</Link></li>
                     <li className=""><Link to="/">Host Your Space</Link></li>
                     <li className=""><Link to="/">Host Your Space</Link></li>
                     <li className=""><Link to="/">Host Your Space</Link></li>
                     <li className=""><Link to="/">Host Your Space</Link></li>
                     <li className=""><Link to="/">Host Your Space</Link></li>
                     <li className=""><Link to="/">Host Your Space</Link></li>
                </ul>
            ):
            (
                null
            )
            }

        </div>
       </Router>

    );
  }
}

export default Dropdown;