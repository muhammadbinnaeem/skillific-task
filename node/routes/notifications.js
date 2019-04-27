var express = require('express');
var router = express.Router();
const { Notifications } = require('../sequelize');

/* GET - fetch notifications listing. */
router.get('/', function(req, res, next) {
  Notifications.findAll().then(notifications => res.json(notifications));
});

/* POST - create notification. */
router.post('/', function(req, res, next) {
  if (!req.body.message) {
    return res.json({ error: 'Message field is required.' });
  }
  Notifications.create(req.body).then(notification => res.json(notification));
});

module.exports = router;
