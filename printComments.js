"use strict";

//	printComments.js - parse a string with a JavaScript program and print only the comments
function printComments( _jsProgram ) {
	let	insideAsteriskComment = false;
	let	afterDoubleSlashComment = false;
	let	comment;
	let	insideString = false;
	let	stringValue;
	let	previousChar = null;

	if( typeof _jsProgram != "string" ) {
		console.error( "[Error] JavaScript program must be a string" );
		return -1;
	}

	for( let i = 0; i < _jsProgram.length; i++ ) {

		//	print comments inside /* */
		if( true == insideAsteriskComment ) {

			if( '*' == previousChar && '/' == _jsProgram[ i ] ) {
				console.info( `[C-style comment] ${comment}` );
				insideAsteriskComment = false;
			} else {
				if( '*' == previousChar ) {
					comment += "*";
				}
				if( '*' != _jsProgram[ i ] ) {
					comment += _jsProgram[ i ];
				}
				previousChar = _jsProgram[ i ];
			}

			continue;
		}

		//	print comments after //
		if( true == afterDoubleSlashComment ) {

			if( "\n" == _jsProgram[ i ] ) {
				console.info( `[C++-style comment] ${comment}` );
				afterDoubleSlashComment = false;
			} else {
				comment += _jsProgram[ i ];
			}

			continue;
		}

		//	content between double quotes - a string
		if( true == insideString ) {

			if( '\\' == previousChar ) {
				switch( _jsProgram[ i ] ) {
				case '\\':
				case '"':
					stringValue += _jsProgram[ i ];
					break;

				case 'n':
					stringValue += '\n';
					break;

				case 't':
					stringValue += '\t';
					break;
				}
				previousChar = null;
			} else {
				if( '"' == _jsProgram[ i ] ) {
					console.info( `[string] ${stringValue}` );
					insideString = false;
				} else {
					if( '\\' != _jsProgram[ i ] ) {
						stringValue += _jsProgram[ i ];
					}
					previousChar = _jsProgram[ i ];
				}
			}

			continue;
		}

		//	C-like comment delimited found
		if( '/' == previousChar && '*' == _jsProgram[ i ] ) {
			insideAsteriskComment = true;
			comment = "";
			previousChar = null;

			continue;
		}

		//	C++-like comment delimited found
		if( '/' == previousChar && '/' == _jsProgram[ i ] ) {
			afterDoubleSlashComment = true;
			comment = "";
			previousChar = null;

			continue;
		}

		//	double-quotes delimited string found
		if( '"' == _jsProgram[ i ] ) {
			insideString = true;
			stringValue = "";
			previousChar = null;
		}

		previousChar = _jsProgram[ i ];
	}
}

const	program1 = "\"use strict\";\n\n/* printComments.js - parse a string with a JavaScript program and print only the comments\n*/\nfunction printComments( _jsProgram ) {\n\tconsole.info( \"I'm being \\\"parsed\\\" and I'm prepared for /* comments */ inside strings !\n\" );\n}\n";
const	program2 = "\"use strict\";\n\n//	printComments.js - parse a string with a JavaScript program and print only the comments\nfunction printComments( _jsProgram ) {\n\tconsole.info( \"I'm being \\\"parsed\\\" and I'm prepared for // comments inside strings !\n\" );\n}\n";

printComments( program1 );
printComments( program2 );
