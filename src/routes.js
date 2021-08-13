const express = require("express");

const routes = express.Router();
const MovieController = require("./app/controller/MovieController");

routes.get("/Movie", MovieController.index);

routes.post("/Movie", MovieController.store);

module.exports = routes;
