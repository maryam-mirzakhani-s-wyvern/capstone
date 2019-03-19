// var express = require('express')
// var router = express.Router()
// var request = require('request')
// module.exports = router

// const url =
//   'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=825a867c06e14bbae4fab2881c18ae28&units=imperial'

// // api/weather
// router.get('/', function(req, res) {
//   request(url, function(error, response, body) {
//     const weatherJson = JSON.parse(body)
//     console.log('WEATHER', weatherJson)

//     const weather = {
//       city: 'Korea',
//       temperature: Math.round(weatherJson.main.temp),
//       description: weatherJson.weather[0].description,
//       icon: weatherJson.weather[0].icon
//     }

//     if (!error && response.statusCode === 200) {
//       const weatherData = {weather: weather}
//       res.json(weatherData)
//     } else {
//       res.json(error)
//     }
//   })
// })
