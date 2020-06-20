const request = require('request')

const geoCode = (adress, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(adress)}.json?access_token=pk.eyJ1Ijoid2VudGltIiwiYSI6ImNrYm4zdzJ0bTFtYngydW5jMDUwa3NqZjYifQ.p0BDHl-fmQ7xH_C6-uv4Wg&limit=1`
  request({
    url,
    json: true
  }, (err, res) => {    
    if (err) {
      callback('Unable to conenct to mapbox server', undefined)      
      return
    }
    if (res.body.message || res.body.features.length === 0) {
      callback('Unable to find location. Try another search', undefined)      
      return
    }    
    const { place_name, center: [longitude, latitude] } = res.body.features[0]
    callback(undefined, { place_name, longitude, latitude })
  })
}

module.exports = geoCode