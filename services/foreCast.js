var axios = require('axios');

let responceData
async function sendData(config) {

  try {
    let response = await axios(config)
    responceData = response

  } catch (err) {
    console.log(err.message);
  }
}

async function getForeCast(lat, long) {

  var config = {
    method: 'get',
    url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.OPENWEATHERMAP_APIKEY}`,
    headers: {}
  };
  
  await sendData(config)
  return responceData

}

module.exports = {
  getForeCast
}









