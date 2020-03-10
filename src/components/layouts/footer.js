import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <footer className="Footer--Content">
                    <div className="footer-container row">
                        <div className="FlexChilds FooterLists">
                            <h2>Activities</h2>
                            <li><Link to="/">Meetings</Link></li>
                            <li><Link to="/">Film Shoots</Link></li>
                            <li><Link to="/">Birthday Parties</Link></li>
                            <li><Link to="/">Photo Shoots</Link></li>
                            <li><Link to="/">Workshops</Link></li>
                            <li><Link to="/">Baby Showers</Link></li>
                            <li><Link to="/">Dinners</Link></li>
                            <li><Link to="/">Weddings</Link></li>
                            <li><Link to="/">Trainings</Link></li>
                            <li><Link to="/">Launch Parties</Link></li>
                            <li><Link to="/">Networking Events</Link></li>
                            <li><Link to="/">Performances</Link></li>
                        </div>
                        <div className="FlexChilds FooterLists">
                            <h2>Location</h2>
                            <li><Link to="/">Washington DC</Link></li>
                            <li><Link to="/">Maryland</Link></li>
                            <li><Link to="/">Virginra</Link></li>
                        </div>
                        <div className="FlexChilds FooterLists">
                            <h2>Learn</h2>
                            <li><Link to="/">List your Space</Link></li>
                            <li><Link to="/">Community</Link></li>
                            <li><Link to="/">Services</Link></li>
                            <li><Link to="/">Android App<span className="tab">Coming Soon</span> </Link></li>
                            <li><Link to="/">IOS App<span className="tab">Coming Soon</span> </Link></li>
                            <li><Link to="/">Support</Link></li>
                        </div>
                        <div className="FlexChilds FooterLists">
                            <h2>Kommonplace's</h2>
                            <li><Link to="/">About</Link></li>
                            <li><Link to="/">Press</Link></li>
                            <li><Link to="/">Terms</Link></li>
                            <li><Link to="/">Career</Link></li>
                            <li><Link to="/">Blog</Link></li>
                            <li><Link to="/">Resources</Link></li>
                        </div>
                        <div className="FlexChilds FooterLists NewsFullWidth inline">
                            <h2>Stay up to date with our newsletter</h2>
                            <form>
                                <input type="email" placeholder="Email Address" value="Find a space"/>
                                <input type="button" value="Find a space"/>
                            </form>
                        </div>
                    </div>
                </footer>
            </Router>
        );
    }
}

export default App;