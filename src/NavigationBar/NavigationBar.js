import React, { Component } from 'react';
import './NavigationBar.css';



const loggedIn = false;

const login = (routeChange) => { return(
   <div className="LoginDiv">
    <div>
     <form className="Login">
       <input type="text" name="uname" placeholder="User Name"/>
       <input type="password" name="pw" maxLength="100" placeholder="Password"/>
    </form>
    </div>
    <div className="LoginButtons">
      <a onClick={() => routeChange("/register")}>Register</a>
      <a>Login</a>
    </div>
  </div>
);}

const userInfo = () => { return(
    <div>
    </div>
  );}


  const NavigationButtons = () => { return(
    <div className="NavBarButtons">
      <a>Home</a>
      <a>About</a>
      <a>Something</a>
    </div>
  );}

  class NavigationBar extends Component {
    constructor(props) {
      super(props);
    }

  render() {
    return (
      <div className="NavBar">
        {NavigationButtons()}
        {(loggedIn) ? userInfo() : login(this.props.routeChange)}
      </div>
    );
  }
}

export default NavigationBar;