//Login Box 
import React from 'react';

class LoginBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    
      render() {
          return (
            <div>
                <div className="formContent modal-main">
                    <h2>Welcome Back <span>Brandon!</span></h2>
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
                            alue="Login"
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

  export default LoginBox;

