"use strict";

const LINES = 24;
const COLUMNS = 32;
const FONTWIDTH = 10;

let posX = 0;
let posY = 0;

////////////////////////////////////////////////////////////////////////////////
//  screen.js - Nov-07-2017 by aldebap
//
//  BASIC interpreter screen
////////////////////////////////////////////////////////////////////////////////

//  dynamicly crete the screen grid
function screenInit() {

    let screenPanel = document.getElementById( "screen_panel" );

    for( let i = 0; i < LINES; i++ ) {

        let screenLine = document.createElement( "div" );

        screenLine.id = "screen";
        screenLine.setAttribute( "class", "screen_line" );

        for( let j = 0; j < COLUMNS; j++ ) {

            let screenChar = document.createElement( "div" );
            let charContent = document.createTextNode( `${j % 10}` );

            screenChar.id = `char_${i}_${j}`;
            screenChar.setAttribute( "class", "screen_char" );
            screenChar.appendChild( charContent );

            screenLine.appendChild( screenChar );
        }
        screenPanel.appendChild( screenLine );
    }
}

//  clear the content of the screen grid
function screenCls() {

    for( let i = 0; i < LINES; i++ ) {
        for( let j = 0; j < COLUMNS; j++ ) {

            let screenChar = document.getElementById( `char_${i}_${j}` );

            screenChar.childNodes[ 0 ].nodeValue = " ";
        }
    }

    posX = 0;
    posY = 0;
}

//  print the content of a string in the screen grid
function screenPrint( value ) {

    if( 'string' == typeof( value ) ) {

        for( let i = 0; i < value.length; i++ ) {

            let screenChar = document.getElementById( `char_${posX}_${posY}` );

            screenChar.childNodes[ 0 ].nodeValue = value.slice( i, i + 1 );
            if( COLUMNS <= ++posY ) {
                if( LINES <= ++posX ) {
                    screenScroll();
                }
                posY = 0;
            }
        }
    }
}

//  go to a new line in the screen grid
function screenNewLine() {

    if( LINES <= ++posX ) {
        screenScroll();
    }
    posY = 0;
}

//  scroll one line in the screen grid
function screenScroll() {

    for( let i = 0; i < LINES; i++ ) {
        for( let j = 0; j < COLUMNS; j++ ) {

            let screenChar = document.getElementById( `char_${i}_${j}` );

            if( i + 1 < LINES ) {
                screenChar.childNodes[ 0 ].nodeValue = document.getElementById( `char_${i + 1}_${j}` ).childNodes[ 0 ].nodeValue;
            } else {
                screenChar.childNodes[ 0 ].nodeValue = " ";
            }
        }
    }

    posX = LINES - 1;
    posY = 0;
}
