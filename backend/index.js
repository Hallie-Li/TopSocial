const express = require('express');
const cors = require('cors');
const router = require('./routes/index');
//create web server
const app = express();

app.use(cors());

app.use('/api',router)

const PORT = 80;
app.listen(PORT, function(){
    console.log('Server is running on http://localhost:80')
})