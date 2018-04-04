import React, { Component } from 'react';
import './login.css'

class Login extends Component {
	render() {
		return(
			<div className="loginScreen">
				<form>
					User Name: <input type="text" name="uname"/><br/>
					Password: <input type="secret" name="pw"/><br/>
					<input type="submit" value="Submit"/>
					<input type="submit" value="Register"/>
				</form>
			</div>
		);
	}
}

export default Login;