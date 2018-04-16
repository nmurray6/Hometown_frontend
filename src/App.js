import React, { Component } from 'react';
import './App.css';
import NavigationBar from './NavigationBar/NavigationBar'
import Register from './Register/Register';
import Authentication from './Authentication/Authentication'


class App extends Component {
  constructor(){
    super();
    this.authenticator = new Authentication();
    this.state = {
      route: window.location.pathname,
    }

    this.routeChange = this.routeChange.bind(this);
  }

  routeChange (route) {
    this.setState({route: route});
  }

  isLoggedin (){
    return this.authenticator.isAuthenticated();
  }
  getAuth(){
    return this.authenticator;
  }

  render() {
    return (
      <div>
        <NavigationBar routeChange={this.routeChange} auth={this.authenticator}/>
        {this.state.route === "/register" ? <Register routeChange={this.routeChange}/> : null}
      </div>
    );
  }
}

export default App;
