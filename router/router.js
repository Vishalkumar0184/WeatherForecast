const router = require('express').Router();
const webService = require('../webService/webService');

router.get('/getWeather', webService.getWeather)

module.exports = router;