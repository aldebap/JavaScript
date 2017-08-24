"use strict";

//	calculatePi.js - an app to calculate the Pi value
let		pi = 0;
const	precision = 8;
const	difference = 1 / Math.pow( 10, precision + 1 );
let		i;

console.info( `difference = ${difference}` );

for( i = 1;; i++ ) {

	let previousPi = pi;

	if( 1 == i % 2 ) {
		pi += 1 / ( 2 * i - 1 );
	} else {
		pi -= 1 / ( 2 * i - 1 );
	}

	if( 4 * Math.abs( pi - previousPi ) < difference ) {
		break;
	}
}

pi = ( 4 * pi ).toFixed( precision );

console.info( `i = ${i}` );

console.info( `Pi = ${pi}` );
