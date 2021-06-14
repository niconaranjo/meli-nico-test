const {getCurrencyData} = require('../../controllers/search.controller');
const currencies = ['USD']//, 'COP', 'ARS', 'MXN'];

exports.getCurrencyTest = async () => {
    return await getCurrencyData(currencies[0]);
/*   currencies.map( (currency) => {
    return new Promise((resolve, reject) => {
      const req =
    })
  }) */
}