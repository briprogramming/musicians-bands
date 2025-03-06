const { DataTypes } = require('sequelize');
const {Sequelize, db} = require('../db');

// TODO - define the Song model
const Song = db.define('Song',
    {
    title: {
        type: DataTypes.STRING
    },
    year: {
        type: DataTypes.INTEGER
    },
    length: {
        type: DataTypes.INTEGER
    }
    });

module.exports = {
    Song
};