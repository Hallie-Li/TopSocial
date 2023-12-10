const express = require('express');
const cors = require('cors');
const router = require('./routes/index');
const {handleErrors} =require('./middleware/errorMiddleware')
//create web server
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api',router)
//use error middleware at the end
//middleware的挂靠顺序很重要, 一个next()执行一个middleware
app.use(handleErrors)

const PORT = 80;
app.listen(PORT, function(){
    console.log('Server is running on http://localhost:80')
})