import React, { Component } from 'react';
import './Register.css';


class Register extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="registerBox">
          <p>Registration</p>
          <form>
            Username: <input type="text" name="username" />
            <br />
            Password: <input type="password" name="password" />
            <br />
            Email: <input type="text" name="email" />
          </form>
          <div className="registerBoxButtons">
            <a>Register</a>
            <a onClick={() => this.props.routeChange("/home")}>Cancel</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;