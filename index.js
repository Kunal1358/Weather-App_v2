require("dotenv").config();
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger/Weather-App_v2.yaml');

const Response = require("./common/responses");
const logger = require("morgan");
app.use(cors());
app.use(logger("dev"));
app.use(Response());

const v1Routes = require("./v1/routes");
app.use("/api/v1", v1Routes);


/*
API-DOCS
*/
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors())
app.use((req, res, next) => {
  res.append('Access-Control-Expose-Headers', 'x-total, x-total-pages');
  next();
});


// 404, Not Found
app.use((req, res, next) => res.error(404, "NOT_FOUND"));


// Error handling
app.use((error, req, res, next) => {
  console.error("========>\n", error);
  return res.error(208, error.message || error);
  next();
});


app.listen(port, async (err) => {
  if (err) {
    console.log(err)
  }
  console.log('Server is up and running on port: ' + port);
})