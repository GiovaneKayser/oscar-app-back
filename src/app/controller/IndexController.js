class IndexController {
  async index(req, res) {
    return res.send("Bem vindo api Oscar");
  }
}

module.exports = new IndexController();
