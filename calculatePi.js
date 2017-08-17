"use strict";

//	exponentiation function (the operator ** is giving me syntax error)
function power( _base, _exponent ) {

	let	result = 1;

	for( let i = 1; i <= _exponent; i++ ) {
		result *= _base;
	}

	return result;
}

//	calculatePi.js - an app to calculate the Pi value
let		pi = 0;
const	precision = 8;
//	TODO: fix it to use the exponentiation ** operator
//const	difference = 1 / ( 10 ** ( precision + 1 ) );
const	difference = 1 / power( 10, precision + 1 );
let		i;

console.info( `difference = ${difference}` );

for( i = 1;; i++ ) {

	let previousPi = pi;

	if( 1 == i % 2 ) {
		pi += 1 / ( 2 * i - 1 );
	} else {
		pi -= 1 / ( 2 * i - 1 );
	}

	//	TODO: this test should be easier if I knew a function to get the Abs() of a number
	if( pi > previousPi ) {
		if( 4 * ( pi - previousPi ) < difference ) {
			break;
		}
	} else {
		if( 4 * ( previousPi - pi ) < difference ) {
			break;
		}
	}
}

console.info( `i = ${i}` );

console.info( `Pi = ${ 4 * pi}` );
