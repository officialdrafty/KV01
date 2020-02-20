import React, { Component } from 'react';
// import '../sass/main.scss';
//import { BrowserRouter as Router, Link } from 'react-router-dom';
//import Route from 'react-router-dom/Route';

class App extends Component {
    render() {
        return (
            <div className="FormContent">
                <h2>Experience an innocated experience</h2>
                <p>Book thousands of innovation spaces directly from local event planner.</p>
                <form className="BookingForm" onSubmit="">
                    <div>
                        <input placeholder="What are you planning?" type="text" value="" onChange="" />
                    </div>

                    <div class="inline">
                        <div className="inputFullW">
                            <h4>Check-In</h4>
                            <input placeholder="12/23/2020" type="date" value="check-in" onChange="" />   
                        </div>

                        <div className="inputFullW">
                            <h4>Check-Out</h4>
                            <input placeholder="12/23/2020" type="date" value="check-out" onChange="" />
                        </div>
                    </div>

                    <div className="inline">
                        <div className="inputFullW">
                            <input placeholder="College Park, MD, USA" type="location" value="" onChange="" /> 
                        </div>

                        <div className="halfbtn">
                            <input type="button" value="Search" />
                        </div>
                    </div>

                </form>

                <div className="NBYGeolocat">
                    <h3>Nearby</h3>
                    <div className="Geolisting">
                        <li>Washington, DC, NoMa</li>
                        <li>Washington, DC, Thomas Circle</li>
                        <li>Chevy Chase, Chase Tower</li>
                    </div>

                    <p className="showLink">
                        Show all spaces
                    </p>

                </div>
            </div>
        );
    }
}

export default App;