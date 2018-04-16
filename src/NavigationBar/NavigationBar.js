import React, { Component } from 'react';
import './NavigationBar.css';



const loggedIn = false;

const login = (routeChange, login) => { return(
   <div className="LoginDiv">
    <div>
     <form className="Login">
       <input type="text" name="uname" placeholder="User Name"/>
       <input type="password" name="pw" maxLength="100" placeholder="Password"/>
    </form>
    </div>
    <div className="LoginButtons">
      <a onClick={() => routeChange("/register")}>Register</a>
      <a onClick={() => {login(true)}}>Login</a>
    </div>
  </div>
);}

const userInfo = (logout) => { return(
    <div>
      <a onClick={() => {logout()}}>Logout</a>
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
      this.state = { loggedIn: this.props.auth.isAuthenticated() }

      this.login = this.login.bind(this);
      this.logout = this.logout.bind(this);
    }

    login(status){
      this.setState({loggedIn: status});
    }

    logout(){
      this.setState({loggedIn: false});
    }

  render() {
    return (
      <div className="NavBar">
        {NavigationButtons()}
        {this.state.loggedIn ? userInfo(this.logout) : login(this.props.routeChange, this.login)}
      </div>
    );
  }
}

export default NavigationBar;