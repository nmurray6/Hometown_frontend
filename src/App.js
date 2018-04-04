import React, { Component } from 'react';
import './App.css';
import NavigationBar from './NavigationBar/NavigationBar'
import Register from './Register/Register';


class App extends Component {
  constructor(){
  super();
    this.state = {
      route: window.location.pathname
    }
  }

  routeChange = (route) => {
    this.setState({route: route});
  }

  render() {
    return (
      <div>
        <NavigationBar routeChange={this.routeChange}/>
        {this.state.route === "/register" ? <Register routeChange={this.routeChange}/> : null}
      </div>
    );
  }


}

export default App;
