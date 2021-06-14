const CustomRequestError =
  require('../utils/errorHandler.utils').CustomRequestError;
const { getMeliData } = require('../models/request.model');
const {
  buildItemPrice,
  buildItemMeliData,
  buildItemDescription,
} = require('../models/controllers.model');
const { MELI_URL_HANDLER } = require('../utils/urlHandlers.utils');

// controller
const searchItems = async (req, res, next) => {
  const url = `${MELI_URL_HANDLER.ITEM}${req.params.id}`;
  const meliData = await getMeliData(url)
    .then((responseData) => {
      if (responseData instanceof CustomRequestError) throw responseData;
      return buildItemMeliData(responseData.data);
    })
    .then((meliDataBuilt) => {
      return buildItemPrice(meliDataBuilt.item).then((data) => {
        meliDataBuilt.item = data;

        return meliDataBuilt;
      });
    })
    .then((builtData) => {
      return buildItemDescription(builtData.item)
      .then((data)=> {
        builtData.item = data;

        return builtData;
      });
    })
    .catch((error) => {
      console.log(error);
      if (error instanceof CustomRequestError) {
        return error.errorObject;
      } else {
        return new CustomRequestError('Request Not Found', 400).errorObject;
      }
    });

  res.status(200).json(meliData);
};

exports.handleItemRequest = (req, res, next) => {
  if (req.params.id) {
    searchItems(req, res, next);
  } else {
    res.status(404);
  }
};
