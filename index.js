const express = require('express');
const app = express();
const routes = require('./routes');
app.use('/', routes());
app.listen(4000, () => {
	console.log('My server is running');
});
