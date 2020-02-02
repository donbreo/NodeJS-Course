// const http =require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const rootd = require ('./routes/rootd.js');
// const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
const apRoutes = require('./routes/add-product.js');

app.use(bodyParser.urlencoded({extended: false}));

// app.use(adminRoutes);
app.use(shopRoutes);
app.use(apRoutes);



app.use((req, res, next) => {
	res.status(404).sendFile(path.join(rootd,'views', '404.html'));
	next();
});

app.use('/',(req, res, next) => {
	res.sendFile(path.join(rootd, 'views', 'shop.html'));
});

/* const server = http.createServer(app);
server.listen(80); */
app.listen(80);