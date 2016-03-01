/**
 * @module deep-trim
 * @description Provides function to deep trim object properties of type {String}.
 * @version 1.1.2
 * @author Anatoliy Gatt [anatoliy.gatt@aol.com]
 * @copyright Copyright (c) 2015-2016 Anatoliy Gatt
 * @license MIT
 */

'use strict';

/**
 * @public
 * @function deepTrim
 * @description Deep trim object properties of type {String}.
 * @param {Object} object - Object with untrimmed properties of type {String}.
 * @returns {Object} - Object with trimmed properties of type {String}.
 */

function deepTrim(object) {
    if (object) {
        for (var property in object) {
            if (object.hasOwnProperty(property)) {
                if ((typeof object[property] === 'object') || (object[property] instanceof Object)) {
                    deepTrim(object[property]);
                } else if ((typeof object[property] === 'string') || (object[property] instanceof String)) {
                    object[property] = object[property].trim();
                }
            }
        }
    }
    return object;
}

/**
 * @public
 * @description Expose function to trim object properties of type {String}.
 * @param {Object} object - Object with untrimmed properties of type {String}.
 * @returns {Object} - Object with trimmed properties of type {String}.
 */

module.exports = function (object) {
    return deepTrim(object);
};