import React, { Component } from 'react';
import '../sass/main.scss';
import { BrowserRouter as Router, Link } from 'react-router-dom';
//import Route from 'react-router-dom/Route';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="Footer--footer--3N4oY">
                    <div className="FlexContainer Footer--footer__container--TDrRj">
                        <div className="FlexChilds FooterLists">
                            <h2>Kommonplace's</h2>
                            <li><Link to="/">Link Title Here</Link></li>
                            <li><Link to="/">Link Title Here</Link></li>
                            <li><Link to="/">Link Title Here</Link></li>
                            <li><Link to="/">Link Title Here</Link></li>
                            <li><Link to="/">Link Title Here</Link></li>
                        </div>
                        <div className="FlexChilds FooterLists">
                            <h2>Discover</h2>
                            <li><Link to="/">Link Title Here</Link></li>
                            <li><Link to="/">Link Title Here</Link></li>
                            <li><Link to="/">Link Title Here</Link></li>
                            <li><Link to="/">Link Title Here</Link></li>
                            <li><Link to="/">Link Title Here</Link></li>
                            <li><Link to="/">Link Title Here</Link></li>
                        </div>
                        <div className="FlexChilds FooterLists">
                            <h2>Hosting</h2>
                            <li><Link to="/">Link Title Here</Link></li>
                            <li><Link to="/">Link Title Here</Link></li>
                            <li><Link to="/">Link Title Here</Link></li>
                            <li><Link to="/">Link Title Here</Link></li>
                            <li><Link to="/">Link Title Here</Link></li>
                            <li><Link to="/">Link Title Here</Link></li>
                            <li><Link to="/">Link Title Here</Link></li>
                        </div>
                        <div className="FlexChilds FooterLists">
                            <h2>Footer Headtitle</h2>
                            <li><Link to="/">Link Title Here</Link></li>
                            <li><Link to="/">Link Title Here</Link></li>
                            <li><Link to="/">Link Title Here</Link></li>
                            <li><Link to="/">Link Title Here</Link></li>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;