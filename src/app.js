const compression = require("compression");
const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");

const app = express();

require("./dbs/init.mongodb");

app.use(morgan("dev")); //log when receiving a request
app.use(helmet()); // information protection
// app.use(compression())

app.get("/", (req, res) => {
  const strCompress = "Hello Express ";
  return res.status(200).json({
    message: "Hello NodeJS",
    metaData: strCompress.repeat(100000),
  });
});

module.exports = app;
