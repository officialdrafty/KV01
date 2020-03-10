import React from 'react';
import RegisterBox from '../Forms/Register'
import LoginBox from '../Forms/Login'
import Navigation from '../layouts/navigation'


// This is the page for form to live on
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false
    };
  }

  /*
   * 1. add these two methods here to modify the state of `App`
   */

  showLoginBox() {
    console.log('1 Form');
    this.setState({ isRegisterOpen: true });
  }

  showRegisterBox() {
    console.log('2 Form');
    this.setState({ isLoginOpen: false, isRegisterOpen: true })
  }

  render() {
      return (
        <div>
          <div className="root-container">

            {
              /* 2. render the `Navigation` component in `App` */
              /* 3. pass your methods in as function props to `Navigation` */
            }

            <Navigation 
              isLoginOpen={this.state.isLoginOpen}
              isRegisterOpen={this.state.isRegisterOpen}
              showLoginBox={this.showLoginBox.bind(this)} 
              showRegisterBox={this.showRegisterBox.bind(this)}
            />

            {this.state.isLoginOpen && <LoginBox/>}
            {this.state.isRegisterOpen && <RegisterBox/>}

          </div>
        </div>
      )
  }
}

export default App;
  
  
