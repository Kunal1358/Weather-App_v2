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

async function getCoordinates(address) {

  var config = {
    method: 'get',
    url: `https://api.mapbox.com/geocoding/v5/mapbox.places/ ${address} .json?access_token=${process.env.MAPBOX_ACCESSTOKEN}`,
    headers: {}
  };

  await sendData(config)

  // if (!responceData) {
  //   console.log('===================== Please Try again after some Time ==================')
  // }

  return responceData.data
}

module.exports = {
  getCoordinates
}
