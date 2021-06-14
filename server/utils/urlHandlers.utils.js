const { MELI_URL, MELI_COUNTRY } = require('../config/config');

const MELI_URL_HANDLER = {
  SEARCH: `${MELI_URL}sites/${MELI_COUNTRY}/search?q=`,
  ITEM: `${MELI_URL}items/`,
  CURRENCY: `${MELI_URL}currencies/`
}

exports.MELI_URL_HANDLER = MELI_URL_HANDLER;