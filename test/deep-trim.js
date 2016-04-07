var assert = require('assert');
var trim = require('../lib/deep-trim');

describe('deep-trim', function () {
    describe('init', function () {
        it('should trim all strings within object', function () {
            var person = {
                name: '   John   ',
                surname: 'Johnson   '
            };

            person = trim(person);

            var expectedPerson = {
                name: 'John',
                surname: 'Johnson'
            };

            assert.deepEqual(person, expectedPerson, 'object strings should be trimmed');
        });

        it('should trim all strings within object and its nested objects', function () {
            var person = {
                name: '   John   ',
                surname: 'Johnson   ',
                address: {
                    street: '1st Street',
                    city: 'Los Angeles',
                    country: ' USA   '
                }
            };

            person = trim(person);

            var expectedPerson = {
                name: 'John',
                surname: 'Johnson',
                address: {
                    street: '1st Street',
                    city: 'Los Angeles',
                    country: 'USA'
                }
            };

            assert.deepEqual(person, expectedPerson, 'object and its nested objects strings should be trimmed');
        });

        it('should trim all strings within object and its nested objects, ignoring all non-string property values', function () {
            var person = {
                name: '   John   ',
                surname: 'Johnson   ',
                age: 26,
                address: {
                    street: '1st Street',
                    city: 'Los Angeles',
                    country: ' USA   '
                }
            };

            person = trim(person);

            var expectedPerson = {
                name: 'John',
                surname: 'Johnson',
                age: 26,
                address: {
                    street: '1st Street',
                    city: 'Los Angeles',
                    country: 'USA'
                }
            };

            assert.deepEqual(person, expectedPerson, 'object and its nested objects strings should be trimmed, ignoring all non-string property values');
        });

        it('should trim all strings within object and its nested objects, including nested arrays', function () {
            var person = {
                name: '   John   ',
                surname: 'Johnson   ',
                age: 26,
                address: {
                    street: '1st Street',
                    city: 'Los Angeles',
                    country: ' USA   '
                },
                vehicles: [
                    '   BMW',
                    'Ferrari    ',
                    'Lamborghini'
                ]
            };

            person = trim(person);

            var expectedPerson = {
                name: 'John',
                surname: 'Johnson',
                age: 26,
                address: {
                    street: '1st Street',
                    city: 'Los Angeles',
                    country: 'USA'
                },
                vehicles: [
                    'BMW',
                    'Ferrari',
                    'Lamborghini'
                ]
            };

            assert.deepEqual(person, expectedPerson, 'object and its nested objects strings, including nested arrays strings, should be trimmed');
        });
    });
});
