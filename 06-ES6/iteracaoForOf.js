"use strict";

//	iteracoForOf.js - array iteration with for exercises
function iteracoForOf( _numArray ) {

	var sum = 0;

	for( var number of _numArray ) {
		if( "number" == typeof number ) {
			sum += number;
		}
	}
	return sum;
}

console.info( `[ES6] iteraco for of: ${iteracoForOf( [ 62, 35, 10, 29, 71 ] )}` );
