const express = require("express");

const routes = express.Router();
const MovieController = require("./app/controller/MovieController");
const IndexController = require("./app/controller/IndexController")

routes.get("/Movie", MovieController.index);

routes.post("/Movie", MovieController.store);

routes.get("/", IndexController.index);

module.exports = routes;
