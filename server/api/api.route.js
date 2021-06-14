const express = require('express');

const {handleSearchRequest} = require('../controllers/search.controller');
const {handleItemRequest} = require('../controllers/item.controller');

const apiRoute = express.Router();

apiRoute.get('/items', handleSearchRequest);

apiRoute.get('/items/:id', handleItemRequest);

module.exports = apiRoute;