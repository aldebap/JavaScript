//	Raiz Digital
//		para um n > 0 somar todos os digitos do numero, de maneira recorrente, até que se tenha um único digito
//	Execmplos:
//		100 --> 1
//		101 --> 2
//		123 --> 6
//		127 --> 1

"use strict";

//	raizDigital.js - use brute force to evaluate the Digital Root of a integer number
function digitalRoot( _number ) {

	if( typeof _number != "number" ) {
		console.error( "[Error] number must be a numeric value" );
		return -1;
	}

	//	single digit numbers dont't require any computation
	if( _number <= 9 ) {
		return _number;
	}

	//	summarize the digits from the number
	let	num = `${_number}`;
	let	root = 0;

	for( let i = 0; i < num.length; i++ ) {
		root += Number( num[ i ] );
	}

	//	let's do it again
	return digitalRoot( root );
}

console.info( digitalRoot( 100 ) );
console.info( digitalRoot( 101 ) );
console.info( digitalRoot( 123 ) );
console.info( digitalRoot( 127 ) );
console.info( digitalRoot( 1853 ) );
