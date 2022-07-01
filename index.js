const express = require('express');
const app = express();
const Route = require('./routes/Controlle');


app.use('/',Route);

app.listen(5080, () => console.log('Server started '));