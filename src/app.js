const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
const router = require("./routes");
dotenv.config();

const app = express();

require("./dbs/init.mongodb");

app.use(morgan("dev")); //log when receiving a request
app.use(helmet()); // information protection
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(router);

module.exports = app;
