"use strict";

//  LOGO instruction set
const   FORWARD = 1;
const   BACKWARD = 2;
const   LEFT = 3;
const   RIGHT = 4;
const   FOR = 5;

//	logoVM.js - JavaScript VM to run Logo programs
var globalSymbol;
var executionOutput;
var turtleX;
var turtleY;
var turtleAngle;
var turtlePenColour = "stroke:rgb(0,0,127);stroke-width:1";

function runLogo( _jsProgram ) {

    globalSymbol = {};
    executionOutput = "";
    turtleX = 300;
    turtleY = 300;
    turtleAngle = 0;

    executionOutput += "<svg height=\"600\" width=\"600\" xmlns=\"http://www.w3.org/2000/svg\">\n";
    runLogoScope( _jsProgram );
    executionOutput += "</svg>\n";

    return executionOutput;
}

function runLogoScope( _jsProgramScope ) {

    for( var step of _jsProgramScope ) {
        if( FORWARD == step.instruction ) {

            var newTurtleX = turtleX + step.parameter1 * Math.cos( turtleAngle );
            var newTurtleY = turtleY + step.parameter1 * Math.sin( turtleAngle );

            executionOutput += `    <line x1="${turtleX}" y1="${turtleY}" x2="${newTurtleX}" y2="${newTurtleY}" style="${turtlePenColour}" />\n`;

            //  set the turtle to it's new position
            turtleX = newTurtleX;
            turtleY = newTurtleY;
            continue;
        }

        if( LEFT == step.instruction ) {

            turtleAngle += ( Math.PI * step.parameter1 ) /180;
            continue;
        }

        if( RIGHT == step.instruction ) {

            turtleAngle -= ( Math.PI * step.parameter1 ) /180;
            continue;
        }

        if( FOR == step.instruction ) {

            var variableName = step.parameter1;
            var start = step.parameter2;
            var end = step.parameter3;

            for( globalSymbol[ variableName ] = start; globalSymbol[ variableName ] <= end; globalSymbol[ variableName ]++ ) {
                runLogoScope( step.scope );
            }
            continue;
        }
    }
}

const   program1 = [
    { instruction: FORWARD, parameter1: 100 }, { instruction: LEFT, parameter1: 90 },
    { instruction: FORWARD, parameter1: 100 }, { instruction: LEFT, parameter1: 90 },
    { instruction: FORWARD, parameter1: 100 }, { instruction: LEFT, parameter1: 90 },
    { instruction: FORWARD, parameter1: 100 }, { instruction: LEFT, parameter1: 90 },
];

const   program2 = [
    { instruction: FOR, parameter1: "i", parameter2: 1, parameter3: 4, scope: [
        { instruction: FORWARD, parameter1: 100 },
        { instruction: LEFT, parameter1: 90 },
    ] },
];

const   program3 = [
    { instruction: FOR, parameter1: "i", parameter2: 1, parameter3: 360, scope: [
        { instruction: FORWARD, parameter1: 5 },
        { instruction: LEFT, parameter1: 1 },
    ] },
];

console.info( `[LOGO VM] \n<!DOCTYPE html>\n<html>\n<body>\n${runLogo( program1 )}</body>\n</html>\n` );
console.info( `[LOGO VM] \n<!DOCTYPE html>\n<html>\n<body>\n${runLogo( program2 )}</body>\n</html>\n` );
console.info( `[LOGO VM] \n<!DOCTYPE html>\n<html>\n<body>\n${runLogo( program3 )}</body>\n</html>\n` );
