const express = require('express');
const app = express();
app.use('/', (req, res) => {
	res.send('Hello Dan');
});
app.listen(4000, () => {
	console.log('My server is running');
});
