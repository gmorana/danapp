const express = require('express');
const router = express.Router();
module.exports = () => {
	router.get('/', (req, res) => {
		res.send('Hello Home');
	});
	router.get('/create-account', (req, res) => {
		res.send('Creating Account');
	});
	return router;
};
