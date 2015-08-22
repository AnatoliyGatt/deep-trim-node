# deep-trim for Node.js

Recursively `String.trim()` object properties of type String.

[![NPM Package Version][npm-package-version-badge]][npm-package-url]
[![NPM Package License][npm-package-license-badge]][npm-package-license-url]
[![NPM Package Downloads][npm-package-downloads-badge]][npm-package-url]
[![Travis CI Build Status][travis-ci-build-status-badge]][travis-ci-build-status-page-url]

[![NPM Package Statistics][npm-package-statistics-badge]][npm-package-url]

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
    },
    vehicles: [
        "   BMW",
        "Ferrari    ",
        "Lamborghini"
    ]
};

person = trim(person);

console.log(person);
```

***

```javascript
{ 
    name: "John",
    surname: "Johnson",
    age: 26,
    address: { 
        street: "1st Street", 
        city: "Los Angeles", 
        country: "USA" 
    },
    vehicles: [
        "BMW",
        "Ferrari",
        "Lamborghini"
    ]
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

[npm-package-url]: https://npmjs.org/package/deep-trim-node

[npm-package-version-badge]: https://img.shields.io/npm/v/deep-trim-node.svg

[npm-package-license-badge]: https://img.shields.io/npm/l/deep-trim-node.svg
[npm-package-license-url]: http://opensource.org/licenses/MIT

[npm-package-downloads-badge]: https://img.shields.io/npm/dm/deep-trim-node.svg

[travis-ci-build-status-badge]: https://img.shields.io/travis/AnatoliyGatt/deep-trim-node.svg
[travis-ci-build-status-page-url]: https://travis-ci.org/AnatoliyGatt/deep-trim-node

[npm-package-statistics-badge]: https://nodei.co/npm/deep-trim-node.png?downloads=true&downloadRank=true&stars=true