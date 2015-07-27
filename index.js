/**
 * @module index
 * @description Entry point for deep-trim-node module.
 * @version 1.0.0
 * @author Anatoliy Gatt [anatoliy.gatt@aol.com]
 * @copyright Copyright (c) 2015 Anatoliy Gatt
 * @license MIT
 */

"use strict";

/**
 * @public
 * @description Expose function to recursively trim object properties of type {String}.
 * @returns {Function} - Function to recursively trim object properties of type {String}.
 */

module.exports = require("./lib/deep-trim");