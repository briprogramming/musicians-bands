const { DataTypes } = require('sequelize');
const {Sequelize, db} = require('../db');

// TODO - define the Musician model
const Musician = db.define('Musician',
    {
    name: {
        type: DataTypes.STRING
    },
    instrument: {
        type: DataTypes.STRING
    }
    });

module.exports = {
    Musician
};