import React, { Component } from 'react';
import '../sass/main.scss';
import FindSpaceFormComponment from '../layouts/findspaceform'; // image is defined but never used...
import Hero from "../../src/images/1421x1126.png"; 


const HeroStyle = {
    width: "1421px",
    height: "1126px",
    backgroundImage: `url(${Hero})`
};
  
class App extends Component {
    render() {

        return (
            <div>
                <div className="FlexContainer">
                     <FindSpaceFormComponment />
                     <div className="ImgBg VidBg" style={ HeroStyle }> 
                     </div>
                </div> 
            </div>
        );
    }
}

export default App;
