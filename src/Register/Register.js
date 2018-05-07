import React, { Component } from 'react';
import './Register.css';


class Register extends Component {
  constructor(props){
    super(props);

    this.props.user.regObj = this;

    this.state = {
      usernameError: false,
      emailError: false
    }
  }

  render() {
    return (
      <div className="container">
        <div className="registerBox">
          <p>Registration</p>
          <form>
            Username: <input className={(this.state.usernameError) ? "registerError" : ""} type="text" name="username" onChange={(e) => this.name = e.target.value}/>
            <br />
            <div className="errorDiv">
              {(this.state.usernameError) ? <p>*username already used</p> : null}
            </div>
            Password: <input type="password" name="password" onChange={(e) => this.pw = e.target.value}/>
            <br />
            <div className="errorDiv">
            </div>
            Email: <input className={(this.state.emailError) ? "registerError" : ""} type="text" name="email" onChange={(e) => this.email = e.target.value}/>
            <div className="errorDiv">
              {(this.state.emailError) ? <p>*email already used</p> : null}
            </div>
          </form>
          <div className="registerBoxButtons">
            <a onClick={() => {
              this.props.user.register(this);
            }}>Register</a>
            <a onClick={() => this.props.routeChange("/home")}>Cancel</a>
          </div>
        </div>
      </div>
    );
  }

  success(){
    this.setState({
      usernameError: false,
      emailError: false
    })
    this.props.routeChange("/home");

  }

  failedToRegister(reason){
    if(reason === "username exists"){
      this.setState({
        usernameError: true,
        emailError: false
      });
    }
    else if(reason === "email already used"){
      this.setState({
        usernameError: false,
        emailError: true});
    }
  }
}

export default Register;