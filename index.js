/*
This module overwrites the 'parse' and 'stringify' methods for
the global JSON object, to handle parsing of large numbers.
This is due to the fact the Javascript uses floating numbers to
store all numbers. Therefore, past a certain point (Number.MAX_SAFE_INTEGER),
integers will be incorrect due to the floating point percision.
 */
var JSONbigInt = require( 'json-bigint' );

module.exports = overwrite();

/**
 * Overwrites the global JSON methods
 */
function overwrite () {
    JSON.parse = JSONbigInt.parse;
    JSON.stringify = JSONbigInt.stringify;
}
