const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Funciona!');
})

app.listen('8080', ()=>{
	console.log('started app on port 8080');})
