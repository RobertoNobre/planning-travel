const express = require('express');
const routes = express.Router();

const TravelController = require("./controllers/TravelController");
const UserController = require("./controllers/UserController");

routes.get('/travels', TravelController.index);
routes.get('/travels/:id', TravelController.show);
routes.post('/travels', TravelController.store);
routes.put('/travels/:id', TravelController.update);
routes.delete('/travels/:id', TravelController.destroy);
routes.post('/auth/signup', UserController.signup);

module.exports = routes;