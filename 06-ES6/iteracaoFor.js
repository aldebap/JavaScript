"use strict";

//  iteracoFor.js - array iteration with for exercises
function iteracoFor( _numArray ) {

    var sum = 0;

    for( var i = 0; i <= _numArray.length; i++ ) {
        if( "number" == typeof _numArray[ i ] ) {
            sum += _numArray[ i ];
        }
    }
    return sum;
}

console.info( `[ES6] iteraco for: ${iteracoFor( [ 62, 35, 10, 29, 71 ] )}` );
