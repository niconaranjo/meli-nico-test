const CustomRequestError =
  require('../utils/errorHandler.utils').CustomRequestError;
const { getMeliData } = require('../models/request.model');
const {
  buildPrices,
  buildSearchProduct,
  buildAutorName,
  buildCategories,
} = require('../models/controllers.model');

const { MELI_URL_HANDLER } = require('../utils/urlHandlers.utils');

const buildProducts = (results) => {
  if (results.length === 0) return [];

  return results.slice(0, 4).map((item) => buildSearchProduct(item));
};

const buildMeliData = (response) => {
  return {
    autor: buildAutorName(),
    categories: buildCategories(response.filters),
    items: buildProducts(response.results),
  };
};

// Entry points
const searchItems = async (req, res, next) => {
  const url = `${MELI_URL_HANDLER.SEARCH}${req.query.q}`;
  const meliData = await getMeliData(url)
    .then((responseData) => {
      if (responseData instanceof CustomRequestError) throw responseData;
      return buildMeliData(responseData.data);
    })
    .then((meliDataBuilt) => {
      return buildPrices(meliDataBuilt.items).then((data) => {
        meliDataBuilt.items = data;

        return meliDataBuilt;
      });
    })
    .catch((error) => {
      if (error instanceof CustomRequestError) {
        return error.errorObject;
      } else {
        return new CustomRequestError('Request Not Found', 400).errorObject;
      }
    });

  res.status(200).json(meliData);
};

exports.handleSearchRequest = (req, res, next) => {
  if (req.query.q) {
    searchItems(req, res, next);
  } else {
    res.status(404);
  }
};
