const express = require("express");
const db = require("./src/database/config");
const mongoose = require("mongoose");
const cors = require("cors");
const expressLayouts = require("express-ejs-layouts");
var bodyParser = require("body-parser");
class App {
  constructor() {
    this.express = express();

    this.database();
    this.middlewares();
    this.routes();

    this.express.set("view engine", "ejs");
    this.express.use(expressLayouts);

    this.express.listen(process.env.PORT || 3000, () =>
      console.log(`http://localhost:3000`)
    );
  }

  database() {
    mongoose.connect(db.uri, { useNewUrlParser: true });
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(express.urlencoded({extended: true,}));
    this.express.use(cors());
  }

  routes() {
    this.express.use(require("./src/routes"));
  }
}
module.exports = new App().express;
