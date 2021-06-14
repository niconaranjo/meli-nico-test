const CustomRequestError =
  require('../utils/errorHandler.utils').CustomRequestError;
const { MELI_URL_HANDLER } = require('../utils/urlHandlers.utils');
const { getMeliData } = require('../models/request.model');
const { buildAutorName } = require('./autor.model');

//Subscriber
const getCurrencyData = async (currency) => {
  return getMeliData(`${MELI_URL_HANDLER.CURRENCY}${currency}`)
    .then((data) => {
      if (data.status !== 200) throw new Error();

      return {
        currency: data.data.id,
        decimals: data.data.decimal_places,
        amount: 0,
        symbol: data.data.symbol,
      };
    })
    .catch(() => {
      return new CustomRequestError('No Currencies matching currency Id', 401);
    });
};

const getItemDescription = async (itemId) => {
  return getMeliData(`${MELI_URL_HANDLER.ITEM}${itemId}/description`)
  .then((descriptionData) => {
    return {
      text: descriptionData.data.text,
      'plain_text': descriptionData.data.plain_text
    }
  })
}

const buildItemDescription = async (item) => {
  const itemData = Object.assign({}, item);

  const description = await getItemDescription(itemData.id);

  if (description instanceof CustomRequestError) {
    return description.errorObject;
  }

  if(description.text === '') {
    itemData.description = description.plain_text;
  } else if(description.plain_text === '') {
    itemData.description = description.text;
  }

  return itemData;

}

const buildItemPrice = async (item) => {
  const itemData = Object.assign({}, item);

  itemData.price = await getCurrencyData(itemData.price_id);

  if (itemData.price instanceof CustomRequestError) {
    return itemData.price.errorObject;
  }

  itemData.price.amount = item.amount;

  delete itemData['price_id'];
  delete itemData['amount'];

  return itemData;
};

//Subscriber
const buildPrices = async (items) => {
  return Promise.all(items.map(buildItemPrice));
};

// Data handlers
const buildCategories = (filters) => {
  if (typeof filters === 'undefined' ||
    filters.length == 0) return [];

  return filters
    .filter((filter) => filter.name === 'Categorías')
    .map((filter) => filter['values']).flat()
    .map((filter) => filter['path_from_root']).flat()
    .reduce((acc, elem) => {
      acc.push(elem.name);
      return acc;
    }, []);
};

const buildSearchProduct = (product) => {
  return {
    id: product.id.toString(),
    title: product.title.toString(),
    'price_id': product.currency_id,
    amount: product.price,
    picture: product.thumbnail.toString(),
    condition: product.condition.toString(),
    'free_shipping': product.shipping ? product.shipping.free_shipping : false,
  }
}

const buildItemProduct = (product) => {
  return {
    id: product.id.toString(),
    title: product.title.toString(),
    'price_id': product.currency_id,
    amount: product.price,
    picture: product.pictures,
    condition: product.condition.toString(),
    'free_shipping': product.shipping ? product.shipping.free_shipping : false,
    'available_quantity': product.available_quantity,
    'sold_quantity': product.sold_quantity,
    'description': '',
  }
}

const buildItemMeliData = (response) => {
  return {
    autor: buildAutorName(),
    item: buildItemProduct(response),
  };
};

module.exports = { getCurrencyData,
  buildItemDescription,
  buildItemPrice,
  buildItemMeliData,
  buildPrices,
  buildAutorName,
  buildCategories,
  buildSearchProduct };
