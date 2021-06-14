const {getCurrencyData} =  require('../controllers/search.controller');

test('Should return and object of currencies', () => {
  const currencies = 'USD';
  const currencyResult = {
    'currency': 'USD',
    'decimals': 2,
    'amount': 0,
    'symbol': 'U$S'
  }

  expect.assertions(1);

  return getCurrencyData(currencies)
    .then((data)=> expect(data).toEqual(currencyResult))
})