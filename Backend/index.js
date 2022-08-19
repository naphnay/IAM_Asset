const cors = require ('cors');

const express = require('express');
const router=require('./routes/index');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/rca',router);
app.listen(8080,()=>console.log('server listing on 8080'));