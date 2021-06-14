/* eslint-disable no-undef */
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  MELI_URL: process.env.MELI_URL,
  MELI_COUNTRY: process.env.MELI_COUNTRY
};