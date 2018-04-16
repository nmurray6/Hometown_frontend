const express = require("express");
const path = require("path");
const app = express();
const parser = require("body-parser");
const session = require("express-session");
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


app.post('/api/signin', (req, res) => {
	knex('users').where({name: req.body.name}).select('*')
	.then( (data) => {
		if(data[0].password.trim() === req.body.password){
			req.session.user = "tacos";
			res.send("Logging in");
		} else{
			res.send("Failed to log in");
		}
	}).catch((err) => {
		res.send(err);
	});
})

app.post('/api/register', (req, res) => {
	knex('users').insert(req.body)
	.then((data) => {
		res.send("added user");
	}).catch((err) => {
		res.send(err["detail"]);
	})
})


app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(3000, ()=> {
	console.log("Listening on port 3000");
})