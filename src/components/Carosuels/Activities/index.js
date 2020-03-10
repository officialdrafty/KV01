import React, { Component } from "react"
import Carosuel1 from '../Activities/Carosuel1/carosuel';
import Carosuel2 from '../Activities/Carosuel2/carosuel';
import Carosuel3 from '../Activities/Carosuel3/carosuel';

export default class Home extends Component {

  render() {
    return (
      <div className="container-fluid bp-mb">  
            <Carosuel1 />
            <Carosuel2 />
            <Carosuel3 />
      </div> 
    );
  }
}

