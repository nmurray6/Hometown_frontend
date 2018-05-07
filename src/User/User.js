const url = 'http://localhost:3001';

class User {
	constructor(){
		this.loggedIn = false;
		this.regObj = null;

		this.characterList = [
			{
				name:"Dave",
				image:'assets/characters/test.png'
			},
			{
				name:"Lore",
				image:'assets/characters/test.png'
			},
			{
				name:"Lore",
				image:'assets/characters/test.png'
			},
			{
				name:"Lore",
				image:'assets/characters/test.png'
			},
			{
				name:"Lore",
				image:'assets/characters/test.png'
			},
			{
				name:"Lore",
				image:'assets/characters/test.png'
			},
			{
				name:"Lore",
				image:'assets/characters/test.png'
			},
			{
				name:"Lore",
				image:'assets/characters/test.png'
			},
			{
				name:"Lore",
				image:'assets/characters/test.png'
			},
			{
				name:"Lore",
				image:'assets/characters/test.png'
			}
		]

		this.itemList = [
		{
			name:"sword",
			image:'assets/characters/test.png'
		},
		{
			name:"sword",
			image:'assets/characters/test.png'
		}]
	}

	login(name, pw){
		fetch(url + '/api/signin', {
			method: 'POST',
			headers:{
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: name,
				password: pw
			})
		}).then(response => response.json())
		.then(e => {
			if(e === "Logging in"){
				this.loggedIn = true;
				this.name = name;
				this.navBar.setUserInfo(name);
			}
			else{
				this.navBar.setState({loginFailed: true});
			}
		});

		
	}

	logout(){
		this.loggedIn = false;
		this.name = null;
	}

	isLoggedIn(){
		return this.loggedIn;
	}

	register(){
		fetch(url + '/api/register', {
			method: 'POST',
			headers:{
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: this.regObj.name,
				password: this.regObj.pw,
				email: this.regObj.email
			})
		}).then(response => response.json()
		).then(e => {
			if(e.status === "success"){
				this.login(this.regObj.name, this.regObj.pw);
				this.regObj.success();
			}
			else{
				this.regObj.failedToRegister(e.reason);
			}
		});
	}
}

export default User;