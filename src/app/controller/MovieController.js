const Movie = require("../models/Movie");

class MovieController {
  async store(req, res) {
    console.log(req);
    const data = await Movie.create(req.body);

    return res.json(data);
  }
  async index(req, res) {
    const data = await Movie.find({});

    return res.json(data);
  }
}

module.exports = new MovieController();
