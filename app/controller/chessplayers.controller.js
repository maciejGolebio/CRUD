const db = require("../model");
const chessPlayers = db.chessplayers;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const player = {
    name: req.body.name,
    elo: req.body.elo || 1200
  };

  chessPlayers.create(player)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "server err, sorry"
      });
    });
};

exports.findAll = (req, res) => {
    const name = req.query.name;
    let condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
  
    chessPlayers.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "server err, sorry"
        });
      });
};

exports.findOne = (req, res) => {
  
};

exports.update = (req, res) => {
  
};


exports.delete = (req, res) => {
  
};

exports.deleteAll = (req, res) => {
  
};
