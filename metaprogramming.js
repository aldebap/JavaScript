"use strict";

//	metaprogramming.js - parse a string with a JavaScript program and print only the comments
function runMetaJS( _jsProgram ) {

    var     executionOutput = "";
    var     turtleX = 100;
    var     turtleY = 100;
    var     turtleAngle = 0;
    var     turtlePenColour = "stroke:rgb(0,0,127);stroke-width:1";
    const   turnAngle = 105;
    const   lineWidth = 100;
    const   iterations = 40;

    executionOutput += "<svg height=\"300\" width=\"300\" xmlns=\"http://www.w3.org/2000/svg\">\n";

    for( var i = 0; i < iterations; i++ ) {

        //  FORWARD the turtle to it's new position'
        var newTurtleX = turtleX + lineWidth * Math.cos( turtleAngle );
        var newTurtleY = turtleY + lineWidth * Math.sin( turtleAngle );

        executionOutput += `    <line x1="${turtleX}" y1="${turtleY}" x2="${newTurtleX}" y2="${newTurtleY}" style="${turtlePenColour}" />\n`;

        //  set the turtle to it's new position
        turtleX = newTurtleX;
        turtleY = newTurtleY;
        turtleAngle += ( Math.PI * turnAngle ) /180;
    }

    executionOutput += "</svg>\n";

    return executionOutput;
}

const   program1 = "RECT DO\n\tFOR i = 1 TO 4\n\t\tFORWARD 100\n\t\tLEFT 90\n\nRECT";

console.info( `[meta JS] \n<!DOCTYPE html>\n<html>\n<body>\n${runMetaJS( program1 )}</body>\n</html>\n` );
