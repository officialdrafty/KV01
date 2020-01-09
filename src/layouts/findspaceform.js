import React, { Component } from 'react';
import '../sass/main.scss';
//import { BrowserRouter as Router, Link } from 'react-router-dom';
//import Route from 'react-router-dom/Route';

class App extends Component {
    render() {
        return (
            <div className="FindSpaceForm">
                <h2>Find a Place To Get Together</h2>
                <form onSubmit="">
                    <div>
                        <label>Where</label>
                        <input placeholder="Anywhere" type="text" value="" onChange="" />
                    </div>

                    <div class="FlexContainer">
                        <div className="FormChild">
                            <label>Book-In</label>
                            <input placeholder="Anywhere" type="text" value="" onChange="" />
                        </div>

                        <div className="FormChild">
                            <label>Book-Out</label>
                            <input placeholder="Anywhere" type="text" value="" onChange="" />
                        </div>
                    </div>

                    <div>
                        <label>Attendees</label>
                        <input placeholder="Anywhere" type="text" value="" onChange="" />
                    </div>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default App;