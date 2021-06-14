const CustomRequestError =
  require('../utils/errorHandler.utils').CustomRequestError;
const { axios } = require('../config/axios.config');

const HEADERS = {
  'content-type': 'text/plain;charset=UTF-8',
};

// Request Handlers Subscriber
exports.getMeliData = async (url) => {
  try {
    const response = await axios
      .get(url, { headers: HEADERS })
      .then((response) => {
        if (response.status !== 200) throw new Error();
        return response;
      });
    return response;
  } catch (error) {
    console.log(error);
    return new CustomRequestError(
      error.response.data.message,
      error.response.data.status
    );
  }
};
