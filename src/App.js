import React, { Component } from 'react';
import './App.css';
import NavigationBar from './NavigationBar/NavigationBar'
import Register from './Register/Register';
import User from './User/User'
import CharacterList from './CharacterList/CharacterList'
import CharacterEquipmentWindow from './CharacterEquipmentWindow/CharacterEquipmentWindow'


class App extends Component {
  constructor(){
    super();
    this.user = new User();
    this.state = {
      route: window.location.pathname,
    }

    this.routeChange = this.routeChange.bind(this);
  }

  routeChange (route) {
    this.setState({route: route});
  }

  render() {
    return (
      <div>
        <NavigationBar routeChange={this.routeChange} user={this.user}/>
        {this.state.route === "/register" ? <Register routeChange={this.routeChange} user={this.user}/> : null}
        {this.state.route === "/CharacterList" ? <CharacterList user={this.user} /> : null}
        <CharacterEquipmentWindow user={this.user} />
      </div>
    );
  }
}

export default App;
