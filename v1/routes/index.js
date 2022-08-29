const router = require("express").Router();
const WeatherRoutes = require("./weather");

router.use("/", WeatherRoutes);

module.exports = router;
