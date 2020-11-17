const router = require('express').Router();
const webService = require('../webService/webService');

router.get('https://weatherapiforecast.herokuapp.com', webService.getWeather)

module.exports = router;