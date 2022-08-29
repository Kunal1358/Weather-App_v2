const router = require("express").Router();
const Controller = require("../controllers");

router.get("/getAddressCoordinates", Controller.weather.getAddressCoordinates);
router.get("/getForeCast", Controller.weather.getForeCast);
router.get("/getAddressForeCast", Controller.weather.getAddressForeCast);


module.exports = router;