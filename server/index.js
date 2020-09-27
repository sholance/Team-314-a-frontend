require('dotenv').config();
const express = require('express');
const handle = require('./handlers');
const cors = require('cors');
const bodyParser  = require('body-parser');

const app = express();
const port = process.env.PORT;

const db = require('./models');
app.use(cors());
app.use(bodyParser.json());

app.get('./', (req, res) => res.json({hello: 'world'}));

app.use(handle.notFound);

app.use(handle.errors);

app.listen(port, console.log(`Server listening at port ${port}`));