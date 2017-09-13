"use strict";

//	ucFirst.js - turn only the first character to uppercase
function ucFirst( _string ) {

    if( "string" != typeof _string ) {
        return "";
    }

    return _string[ 0 ].toUpperCase() + _string.slice( 1 );
}

console.info( `[ucFisrt] ${ucFirst( 'joinville' )}` );
console.info( `[ucFisrt] ${ucFirst( 'santana de parnaiba' )}` );
