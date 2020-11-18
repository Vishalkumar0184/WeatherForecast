const request = require('request')

const getWeather = (req, res) => {
    let url = '';
    if (req.query.q) {
        url = `http://api.openweathermap.org/data/2.5/weather?q=${req.query.q}&appid=${process.env.ACCESS_KEY}`;
    } else if (req.query.id) {
        url = `http://api.openweathermap.org/data/2.5/weather?id=${req.query.id}&appid=${process.env.ACCESS_KEY}`;
    } else if (req.query.zip) {
        url = `http://api.openweathermap.org/data/2.5/weather?zip=${req.query.zip}&appid=${process.env.ACCESS_KEY}`;
    } else if (req.query.lat && req.query.lon) {
        url = `http://api.openweathermap.org/data/2.5/weather?lat=${req.query.lat}&lon=${req.query.lon}&appid=${process.env.ACCESS_KEY}`;
    }

    request(url, (error, response) => {
        if (error) {
            res.send({ responseCode: 500, responseMessage: "internal server error" })
        } else if (!response) {
            res.send({ responseCode: 404, responseMessage: "Result not found" })
        } else {
            const resData = JSON.parse(response.body);
            if (resData.cod === 200) {
                const result = {
                    cityId: resData.id,
                    cityName: resData.name,
                    cordinate: {
                        latitude: resData.coord.lat,
                        longitude: resData.coord.lon
                    },
                    temprature: {
                        current: resData.main.temp,
                        minimum: resData.main.temp_min,
                        maximum: resData.main.temp_max,
                        pressure: resData.main.pressure,
                        humidity: resData.main.humidity
                    }
                };
                return res.send({ responseCode: resData.cod, responseMessage: "Weather Details", result })
            } else {
                return res.send({ responseCode: resData.cod, responseMessage: resData.message })
            }
        }
    });
}

module.exports = {
    getWeather: getWeather
}
