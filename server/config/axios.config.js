const axios = require('axios');

axios.interceptors.response.use(
  response => response,
  error => {
    throw error;
  }
);

module.exports = { axios };