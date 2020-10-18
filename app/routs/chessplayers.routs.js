module.exports = app => {
    const players = require("../controller/chessplayers.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", players.create);

    router.get("/",players.findAll)

    app.use('/v1/chessplayers', router);
}