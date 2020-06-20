const request = require('request')

const forcast = (longitude, latitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=f0eb00a8ed6801e6a854abcc8efa8828&query=${latitude},${longitude}&units=f`
  request({
    url,
    json: true
  }, (err, res) => {
    if (err) {
      callback('Unable to conenct to weather server', undefined)
      return 
    }
    if (res.body.error) {
      callback('Unable To find location', undefined)
      return
    }
    const { temperature, feelslike, weather_descriptions } = res.body.current
    callback(undefined, { temperature, feelslike, weather_descriptions })
  })
}

module.exports = forcast