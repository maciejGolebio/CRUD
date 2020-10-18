module.exports = (sequelize, Sequelize) => {
  const player = sequelize.define("chessplayers", {
    name: {
      type: Sequelize.STRING
    },
    elo: {
      type: Sequelize.INTEGER
    }
  });

  return player;
};