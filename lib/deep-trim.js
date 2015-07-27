/**
 * @module deep-trim
 * @description Provides function to recursively trim object properties of type {String}.
 * @version 1.0.4
 * @author Anatoliy Gatt [anatoliy.gatt@aol.com]
 * @copyright Copyright (c) 2015 Anatoliy Gatt
 * @license MIT
 */

/**
 * @public
 * @function deepTrim
 * @description Deep trim strings within object.
 * @param {Object} object - Object with possibly untrimmed properties of type {String}.
 * @returns {Object} - Object with trimmed properties of type {String}.
 */

function deepTrim(object) {
    if(object) {
        for(var property in object) {
            if(object.hasOwnProperty(property)) {
                if((typeof object[property] === "object") || (object[property] instanceof Object)) {
                    deepTrim(object[property]);
                } else if((typeof object[property] === "string") || (object[property] instanceof String)) {
                    object[property] = object[property].trim();
                }
            }
        }
    }
    return object;
}

/**
 * @public
 * @description Expose function for trimming object properties of type {String}.
 * @param {Object} object - Object whose strings should be trimmed.
 * @returns {Object} - Object with trimmed strings.
 */

module.exports = function(object) {
    return deepTrim(object);
};