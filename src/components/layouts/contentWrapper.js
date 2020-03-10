import React, { Component } from 'react';
import Placeholder from '../images/1421x1126.png';


class aboutHome extends Component {
    render() {
        return (
            <div className="content">
                <div className="column-container">
                    <div className="flex-basis-50 img-col">
                        <img src={Placeholder} alt="" />
                    </div>
                    
                    <div className="flex-basis-50 leftcolumn flex middle">
                        <div class="innertube">
                            <h2>Find an space to book in your region</h2>
                            <p>A more personalized renting experience for professioal project manager, business owners and individuals.</p>
                            <input type="button" value="Find a space"/>
                        </div>
                    </div>
                </div>

                <div className="column-container">
                    <div className="flex-basis-50 leftcolumn flex middle">
                        <div class="innertube">
                            <h2>Earn money from renting your space</h2>
                            <p>A more personalized renting experience for professioal project manager, business owners and individuals.</p>
                            <input type="button" value="Money Money"/>
                        </div>
                    </div>

                    <div className="flex-basis-50 img-col">
                        <img src={Placeholder} alt="" />
                    </div>
                </div>

                <div className="btn btnWidth">
                    <input type="button" value="Scroll To The Top"/>
                </div>
            </div>
        );
    }
}

export default aboutHome;
