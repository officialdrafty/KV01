// ModalProvider.js
import React from "react";
import ModalContext from "../Forms/ModalContext";

class ModalProvider extends React.Component {
  state = {
    loginOpened: false,
    signupOpened: false
  };

  openModal = modalType => () => {
    if (modalType === "login") {
      this.setState({
        loginOpened: true,
        signupOpened: false
      });
    } else if (modalType === "signup") {
      this.setState({
        loginOpened: false,
        signupOpened: true
      });
    }
  };

  closeModal = modalType => () => {
    if (modalType === "login") {
      this.setState({
        loginOpened: false
      });
    } else if (modalType === "signup") {
      this.setState({
        signupOpened: false
      });
    }
  };

  render(props) {
    return (
      <ModalContext.Provider
        value={{
          openModal: this.openModal,
          closeModal: this.closeModal,
          signupOpened: this.state.signupOpened,
          loginOpened: this.state.loginOpened,
        }}
      >
        {this.props.children} {/* This is display the navbar to have the Modal Window to be intersecting with navigation and modal window */}
      </ModalContext.Provider>
    );
  }
}

export default ModalProvider;