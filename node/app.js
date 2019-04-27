const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

var indexRouter = require('./routes/index');
var notificationsRouter = require('./routes/notifications');

app.use(bodyParser.json());
// routes
app.use('/', indexRouter);
app.use('/api/notifications', notificationsRouter);

app.listen(port, () => console.log(`Skillific app listening on port ${port}!`));
