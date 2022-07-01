const express = require('express');
const app = express();
const Route = require('./routes/Controlle');


app.use('/',Route);

app.listen(6000, () => console.log('Server started '));