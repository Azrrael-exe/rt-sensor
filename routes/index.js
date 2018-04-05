var express = require('express');
var router = express.Router();
var arduino = require('../sensor');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Distance Sensor' });
});

router.get('/http', function(req, res, next){
  res.send({
    message: "Hello World!",
    time : Date.now()
  })
})

router.post('/http', function(req, res, next){
  if(req.body.pin){
    arduino.digitalWrite(req.body.pin, req.body.status)
    res.send(req.body)
  }
  else {
    res.send({
      error : "Invalid Requests"
    })
  }

})


module.exports = router;
