//Register Box 
import React from 'react';

class RegisterBox extends React.Component {

    // hideModal = () => {
    //     this.setState({ show: false });
    // }
  
      render() {
          return (
                <div className="blkOverlay">
                    <div className="formContent modal-main">
                        <h3>Join Kommonplace's</h3>
                        <p>Easily book a location for any offsite, event, or production.</p>
                        <form>                         
                            <input 
                                type="text" 
                                name="email" 
                                placeholder="Email Address" 
                            />

                            <input 
                                name="password" 
                                type="text" 
                                placeholder="Password" 
                            
                            />

                            <div className="passContent">
                                <div className="checkingPass">
                                    <input 
                                        className="inline" 
                                        type="checkbox" 
                                        name="check" 
                                        value="Remember Password"
                                    />
                                    <span 
                                        className="inline">
                                        Remember Password
                                    </span>
                                </div>
                                    <p 
                                        className="passFont">
                                        Forgot Password
                                    </p>
                            </div>
                                            
                            <input 
                                className="formmbtn" 
                                type="button" 
                                name="button" 
                                value="Login"
                            />

                            <div 
                                className="social-media-button">
                                <input 
                                    className="clearbtn" 
                                    type="button" 
                                    name="button" 
                                    value="Sign in with Facebook"
                                />

                                <div 
                                    className="divider"
                                />

                                <input 
                                    className="clearbtn" 
                                    type="button" 
                                    name="button" 
                                    value="Sign in with Facebook"
                                />

                            </div>

                            <p 
                                className="passFont">
                                Don't have an account? 
                                <span>Sign up</span>
                            </p>

                    </form>
                </div>
            </div>             
          )
      }
  }

// const Modal = ({ handleClose, show, children }) => {
//     const showHideClassName = show ? "modal display-block" : "modal display-none";

//     return (
//         <div className={ showHideClassName  }>
//             { children }
//             <button onClick={handleClose}>close</button>
//         </div>
//     );
// };
  export default RegisterBox;