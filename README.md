# deep-trim for Node.js

Recursively `String.trim()` object properties of type String.

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![License][license]][license-url]
[![Travis Build][travis-image]][travis-url]

## Installation

`npm install deep-trim-node`

## Usage Example

```javascript
var trim = require("deep-trim-node");

var person = {
    name: "   John   ",
    surname: "Johnson   ",
    age: 26,
    address: {
        street: "1st Street",
        city: "Los Angeles",
        country: " USA   "
    }
};

person = trim(person);

console.log(person);
```

***

```
{ 
    name: "John",
    surname: "Johnson",
    age: 26,
    address: { 
        street: "1st Street", 
        city: "Los Angeles", 
        country: "USA" 
    } 
}
```

## Tests

To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ npm install
$ npm test
```

## License

Distributed under the [MIT License](LICENSE).

[npm-image]: https://img.shields.io/npm/v/deep-trim-node.svg
[npm-url]: https://npmjs.org/package/deep-trim-node
[downloads-image]: https://img.shields.io/npm/dm/deep-trim-node.svg
[downloads-url]: https://npmjs.org/package/deep-trim-node
[license]: https://img.shields.io/npm/l/deep-trim-node.svg
[license-url]: https://github.com/AnatoliyGatt/deep-trim-node/blob/master/LICENSE
[travis-image]: https://img.shields.io/travis/AnatoliyGatt/deep-trim-node/master.svg
[travis-url]: https://travis-ci.org/AnatoliyGatt/deep-trim-node