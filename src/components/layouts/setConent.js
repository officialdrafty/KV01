import React, { Component } from 'react';

class aboutHome extends Component {
    render() {
        return (
                <div className="SpecialEvents flex middle">
                    <div className="container-fluid">
                        <div className="front bp-mb col">
                            <h2>How it works?</h2>
                            <p>Find thousands of event planners hosting innovated spaces where you can meet, create, or party.</p>
                        </div>

                        <div className="front col">
                            <li>
                                <h1>1</h1>
                                <p>Lorem Ipsum is simply dummy text of the.</p>
                            </li>
                            <li>
                                <h1>2</h1>
                                <p>Lorem Ipsum is simply dummy text of the.</p>
                            </li>
                            <li>
                                <h1>3</h1>
                                <p>Lorem Ipsum is simply dummy text of the.</p>
                            </li>
                        </div>
                    </div>
                    <div className="skewed-background"></div>
                </div>
        );
    }
}

export default aboutHome;