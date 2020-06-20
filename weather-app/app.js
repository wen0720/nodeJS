const geoCode = require('./utils/geoCode')
const forcast = require('./utils/forcast')

const adress = process.argv[2]
if (!adress) {
  console.log('Please provide adress')
  return
}

// callBack 的 pattern，裡面帶 error 與 data 為參數
geoCode(adress, (error, data) => {  
  if (error) {
    console.log(error)
    return
  }
  const { place_name, longitude, latitude } = data
  forcast(longitude, latitude, (error, data) => {
    if (error) {
      console.log(error)
      return
    }
    const { temperature, feelslike, weather_descriptions } = data
    console.log(place_name)
    console.log(`${weather_descriptions}. It is current ${temperature} degress out. It feels like ${feelslike} degress out.`)
  })
})