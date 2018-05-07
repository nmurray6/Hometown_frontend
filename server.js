const express = require("express");
const path = require("path");
const app = express();
const parser = require("body-parser");
const session = require("express-session");
const cors = require('cors');
const knex = require('knex')({
	client: 'pg',
	connection: {
		host: '127.0.0.1',
		user: 'postgres',
		password: 'library1',
		database: 'postgres'
	}
});

app.use(session({
	secret:'lW$5F69(3Nd_p5^x0fdw27y&45rjt7643#@(eJUY^R5j',
	cookie:{
		maxAge: 60000
	}
}));
app.use(parser.json());

app.use(express.static(path.join(__dirname, 'build')));

app.use(cors());


//TEST AREA




//END TEST



app.post('/api/signin', (req, res) => {
	if(req.body.name && req.body.password &&
		req.body.name != "" && req.body.password != ""){
		knex('users').where({name: req.body.name}).select('*')
		.then( (data) => {
			if(data.length == 0){
				res.json("Failed to log in");
			}
			else{
				if(data[0].password.trim() === req.body.password){
					req.session.user = req.body.name;
					res.json("Logging in");
				} else{
					res.json("Failed to log in");
				}
			}
		}).catch((err) => {
			res.json(err);
		});
	}
	else{
		res.json("no blank fields allowed");
	}
})

app.post('/api/register', (req, res) => {
	if(req.body.name && req.body.password && req.body.email &&
		req.body.name != "" && req.body.password != "" && req.body.email != ""){
		let unExists = true;
		let emailUsed = true;
		knex('users').where({name: req.body.name}).select('*')
		.then((data) => {
			if(data.length === 0){
				unExists = false;
			}
		}).then(() => {
			knex('users').where({email: req.body.email}).select('*')
			.then((data) => {
				if(data.length === 0){
					emailUsed = false;
				}
			})
			.then(() => {
				if(unExists){
					res.json({
						status: "failed",
						reason: "username exists"
					})
				}
				else if(emailUsed){
					res.json({
						status: "failed",
						reason: "email already used"
					})
				}
				else{
					knex('users').insert(req.body)
					.then((data) => {
						res.json({
							status: "success",
							reason: ""
						});
					}).catch((err) => {
						res.json(err["detail"]);
					})
					
				}
			})
		})
	}
	else{
		res.json("no blank fields allowed");
	}
})


app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(3001, ()=> {
	console.log("Listening on port 3001");
})