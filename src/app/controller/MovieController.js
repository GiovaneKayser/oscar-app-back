const Movie = require("../models/Movie");

class MovieController {
  async store(req, res) {
    const data = await Movie.create(req.body);

    return res.json(data);
  }
  async index(req, res) {
    const data = await Movie.find({});

    return res.json(data);
  }
  async page(req, res) {
    const movies = await Movie.find({});
    return res.render("pages/Movies", { movies: movies });
  }
}

module.exports = new MovieController();
