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
                    
                    <div className="flex-basis-50 leftcolumn">
                        <div class="innertube"><b>Left Column: <em>200px</em></b></div>
                    </div>
                </div>

                <div className="column-container">
                    <div className="flex-basis-50 leftcolumn">
                        <div class="innertube"><b>Left Column: <em>200px</em></b></div>
                    </div>

                    <div className="flex-basis-50 img-col">
                        <img src={Placeholder} alt="" />
                    </div>
                </div>
            </div>
        );
    }
}

export default aboutHome;
