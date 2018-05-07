import React, { Component } from 'react';
import './NavigationBar.css';


class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.props.user.navBar = this;

     this.state = { 
        loggedIn: this.props.user.loggedIn,
        loginFailed: false
      }

     this.login = this.login.bind(this);
     this.logout = this.logout.bind(this);
     this.setUserInfo = this.setUserInfo.bind(this);
     this.loginDiv = this.loginDiv.bind(this);
     this.userInfoDiv = this.userInfoDiv.bind(this);
     this.NavigationButtons = this.NavigationButtons.bind(this);
   }

   login(name, pw){
     this.props.user.login(name, pw, this);
   }

   setUserInfo(){
     this.setState({loggedIn: true});
   }

   logout(){
     this.props.user.logout();
     this.inputName = "";
     this.inputPW = "";
     this.setState({
      loggedIn: false,
      loginFailed: false
    });
  }

  render() {
    return (
      <div className="NavBar">
        {this.NavigationButtons()}
        {this.state.loggedIn ? this.userInfoDiv() : this.loginDiv()}
      </div>
    );
  }

  loginDiv(){
    return(
       <div className="LoginDiv">
        <div>
         <form className="Login">
           <input type="text" name="uname" placeholder="User Name" onChange={(e) => this.inputName = e.target.value} />
           <input type="password" name="pw" maxLength="100" placeholder="Password" onChange={(e) => this.inputPW = e.target.value}/>
        </form>
        </div>
        <div className="LoginButtons">
          <a onClick={() => this.props.routeChange("/register")}>Register</a>
          <a onClick={() => {this.login(this.inputName, this.inputPW)}}>Login</a>
          {this.state.loginFailed ? <p>*failed to log in</p> : null}
        </div>
      </div>
    );
  }

  userInfoDiv(name, logout){
    return(
      <div className="NavBarUserInfo">
        <p>{this.props.user.name}</p>
        <a onClick={() => {this.logout()}}>Logout</a>
      </div>
    );
  }

  NavigationButtons(){
    return(
      <div className="NavBarButtons">
        <a>Home</a>
        <a>About</a>
        <a>Something</a>
      </div>
    );
  }
}

export default NavigationBar;