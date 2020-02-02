const path = require('path');
const express = require('express');
const rootd = require ('../routes/rootd.js');

const router = express.Router();



router.get('/',(req, res, next) => {
	res.sendFile(path.join(rootd, 'views', 'shop.html'));
});

module.exports = router;