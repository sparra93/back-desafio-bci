const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./app/routes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
routes(app);

app.listen(process.env.PORT || 9990, () => {
    console.log('Started on port ', process.env.PORT || 9990);
});

module.exports = app;
