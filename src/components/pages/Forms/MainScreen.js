import React from 'react';
import RegisterBox from '../Forms/Register'
import LoginBox from '../Forms/Login'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false
    };
  }

    render() {
        return (
          <div>
            <div className="root-container">
                {this.state.isLoginOpen && <LoginBox/>}
                {this.state.isRegisterOpen && <RegisterBox/>}
            </div>
          </div>
        )
    }
}

export default App;


  
  
