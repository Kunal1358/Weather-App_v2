const Services = require('../../services')


async function getAddressCoordinates(req, res, next) {
  try {
    if (!req.query.address) {
      throw new Error('Please Arovide Address')
    }
    let result = await Services.coordinates.getCoordinates(req.query.address)
    if (result && result.features.length == 0) {
      throw new Error('No Data Found')
    }
    res.success(result, "Fetched Successfully")
  } catch (error) {
    next(error);
  }
}

async function getForeCast(req, res, next) {

  try {

    if (!req.query.lat || !req.query.long) {
      throw new Error('Plese provide lat long')
    }
    let result = await Services.foreCast.getForeCast(req.query.lat, req.query.long)

    if (!result) {
      throw new Error('No Result Found')
    }

    res.success(result.data, "Fetched Successfully")

  } catch (error) {
    next(error);
  }
}

async function getAddressForeCast(req, res, next) {

  try {

    if (!req.query.address) {
      throw new Error('Please Provide Address')
    }

    let latLongResult = await Services.coordinates.getCoordinates(req.query.address)
    if (latLongResult && latLongResult.features.length == 0) {
      throw new Error('No Data Found')
    }

    let long = latLongResult.features[0].geometry.coordinates[0] || 0
    let lat = latLongResult.features[0].geometry.coordinates[1] || 0
    let result = await Services.foreCast.getForeCast(lat, long)

    if (!result) {
      throw new Error('No Result Found')
    }
    res.success(result.data, "Fetched Successfully")

  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAddressCoordinates,
  getForeCast,
  getAddressForeCast
}