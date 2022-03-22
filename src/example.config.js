// @ts-check
'use strict';

/*
 * Create `config.js` by running `cp example.bot.config.js bot.config.js`
 * in the project folder, then edit it.
 *
 * Config file in JSON format (`config.json`) is also supported.
 * For backwards compatibility, and because why not, it needs no extra code.
 */


/**
 * @type {Config}
 */

const config = {
    /**
     * @type {!( number | string | (number|string)[] )}
     * ID (number) or username (string) of master,
     * the person who can change bot settings.
     */
    master: 123456789,

    /**
     * @type {!string}
     * Telegram Bot token obtained from https://t.me/BotFather.
     */
    token: '',

    /**
     * Database for collection personal info,
     * appointments, services and notice query.
     *
     * @type {object}
     * @property {string} type - Change your database type.
     * @property {string} host - Change connections server.
     * @property {number} port - Change connections  port .
     * @property {string} user - Change username for connections.
     * @property {string} password - Change password.
     */
    db: {
        type: 'mongodb',
        host: '127.0.0.1',
        port: 3000,
        user: 'root',
        password: 'password',
    },

    /**
     * @type {string[]}
     * List of plugin names to be loaded.
     * See Readme in plugins directory for more details.
     */
    plugins: [],
};

module.exports = Object.freeze(config);