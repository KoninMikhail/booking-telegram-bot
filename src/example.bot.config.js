// @ts-check
'use strict';

/*
 * Create `bot.config.js` by running `cp example.bot.config.js bot.config.js`
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
     * @type {string[]}
     * List of plugin names to be loaded.
     * See Readme in plugins directory for more details.
     */
    plugins: [],
};

module.exports = Object.freeze(config);