const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: false,
});

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: true, // Allow null for OAuth users if we want, or map email to username
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true, // Nullable for OAuth users
  },
  googleId: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: true,
  },
});

const initDb = async () => {
  await sequelize.sync();
  console.log('Database synced');
};

module.exports = { sequelize, User, initDb };
