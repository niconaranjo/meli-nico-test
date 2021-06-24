/* eslint-disable import/prefer-default-export */
export const priceFormat = (currency, amount) => (
  new Intl.NumberFormat(currency, {
    style: 'currency',
    currency,
  }).format(amount)
);
