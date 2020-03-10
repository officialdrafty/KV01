import React, { Component } from 'react';
import BookingForm from './bookingform';
import Hero from '../images/1421x1126.png'; 


const HeroStyle = {
    width: "1421px",
    height: "78em;",
    backgroundImage: `url(${Hero})`
};
  
class App extends Component {
    render() {

        return (
            <div>
                <div className="hero">
                     <BookingForm />
                     <div className="ImgBg VidBg" style={ HeroStyle }> 
                     </div>
                </div> 
            </div>
        );
    }
}

export default App;
