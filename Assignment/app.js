const express = require('express');

const app = express();

// app.use((req,res,next)=>{               //this is a middleware
// 	console.log('First Middleware');
// 	next();
// });

// app.use((req,res,next)=>{               //this is another middleware
// 	console.log('Second Middleware');
// res.send('<p>Assignment solved</p>')
// });
app.use('/users',(req,res,next)=>{
	console.log('/users middleware');
	res.send('<p>The middleware tha handles just /users</p>')
});

app.use('/',(req,res,next)=>{               //this is another middleware
	console.log('/middleware');
	res.send('<p>The middleware tha handles just / </p>')
});



app.listen(80);