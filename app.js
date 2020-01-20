// const http =require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product',(req, res, next) => {
	res.send('<form action="/product" method="POST"><input type="text" name= "title"><button type="submit">Add product</button></form>');
});
app.post('/product',(req, res, next) => {
	console.log(req.body);
	res.redirect('/');
});
app.use('/brandon',(req, res, next) => {
	console.log('IN another middleware');
	res.redirect('http://brandondabreo.com');
});
app.use('/',(req, res, next) => {
	console.log('IN the main folder');
	res.send("<h1>Hello from the other side</h1>");
	next();
});


/* const server = http.createServer(app);
server.listen(80); */
app.listen(80);