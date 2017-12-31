var express = require('express');
var router = express.Router();
var socket = require('socket.io');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sendmessage', function (req, res, next) {
  console.log('msg is', req.query.msg);
  console.log(socket);

  socket.emit('news', { message: req.query.msg });
  //res.status(200).end();
});

module.exports = router;
