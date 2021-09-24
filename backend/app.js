const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())

let corsOptions = {
	origin: 'http://localhost',
  	optionsSuccessStatus: 200 
}

app.get('/', (req, res) => {
	res.send({userName: 'Sherman', userLastName: 'Griffin'});
})

app.listen('8000', ()=>{
	console.log('started app on port 8000');})
