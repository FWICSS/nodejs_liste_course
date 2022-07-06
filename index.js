const express = require('express');
const app = express();
const Route = require('./routes/Controlle');
var cors = require('cors');
var port = 6000;

app.use(cors({origin:'*'}));
app.use('/',Route);

app.listen(port, () => console.log('Server started at '+ port));