const ms = require('millisecond');
const { Telegraf } = require('telegraf');
const { config } = require('../utils/config');


const bot = new Telegraf(config.token, {
    handlerTimeout: ms('5s'),
});

module.exports = bot;