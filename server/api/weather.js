var express = require('express')
var router = express.Router()
var request = require('request')
module.exports = router

const city = 'new york'
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=825a867c06e14bbae4fab2881c18ae28&units=imperial`

// api/weather
router.get('/', function(req, res) {
  request(url, function(error, response, body) {
    const weatherJson = JSON.parse(body)
    console.log('WEATHER', weatherJson)

    const weather = {
      city: city,
      temperature: Math.round(weatherJson.main.temp),
      description: weatherJson.weather[0].description,
      icon: weatherJson.weather[0].icon,
      clouds: weatherJson.clouds.all
    }

    if (!error && response.statusCode === 200) {
      const weatherData = {weather: weather}
      res.json(weatherData)
    } else {
      res.json(error)
    }
  })
})

// WEATHER = {
//   coord: { lon: -73.99, lat: 40.73 },
//   weather:
//    [ { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' } ],
//   base: 'stations',
//   main:
//    { temp: 43.25,
//      pressure: 1026,
//      humidity: 56,
//      temp_min: 41,
//      temp_max: 45 },
//   visibility: 16093,
//   wind: { speed: 6.31, deg: 140.003 },
//   clouds: { all: 1 },
//   dt: 1553127816,
//   sys:
//    { type: 1,
//      id: 4686,
//      message: 0.0088,
//      country: 'US',
//      sunrise: 1553079585,
//      sunset: 1553123232 },
//   id: 5128581,
//   name: 'New York',
//   cod: 200
// }
