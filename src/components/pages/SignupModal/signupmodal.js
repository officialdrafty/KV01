import React from 'react';

const Modal = ({ show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
      </section>
    </div>
  );
};



class App extends React.Component {
    state = { show: false }

    showSignup = () => {
        this.setState({ show: true });
        console.log('')
    } 

    showLogin = () => {
        this.setState({ show: true });
        console.log('Fuck this not show the login form')
    }

    hideModal = () => {
        this.setState({ show: false });
        console.log('Yeah its hide the login and signup form')
    }

    render() {
        return (
          <div>
            <Modal show={this.state.show} handleclose={this.hideModal} >
                <div className="blkOverlay">
                    {/* This is Login Form to log in to your profile */ }
                    <div className="formContent modal-main">
                        <button className="closebtn" onClick={this.hideModal}>Close </button>
                        <h2>Welcome Back <span>Brandon!</span></h2>
                        <form data-show={this.state.show.toString()}>                         
                            <input type="text" name="email" placeholder="Email Address" />
                            <input name="password" type="text" placeholder="Password" />
                            <div className="passContent">
                                <div className="checkingPass">
                                    <input className="inline" type="checkbox" name="check" value="Remember Password"/>
                                    <span className="inline">Remember Password</span>
                                </div>
                                <p className="passFont">Forgot Password</p>
                            </div>
                            
                            <input className="formmbtn" type="button" name="button" value="Login"/>
                            <div className="social-media-button">
                                <input className="clearbtn" type="button" name="button" value="Sign in with Facebook"/>
                                <div className="divider"/>
                                <input className="clearbtn" type="button" name="button" value="Sign in with Facebook"/>
                            </div>

                            <p className="passFont">Don't have an account? <span>Sign up</span></p>
                        </form>
                    </div>

                    {/* This is Sign up to create a account */}

                </div>
            </Modal>
          </div>
        )
    }
}

export default App;


  
  
