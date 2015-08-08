/*	*
	* Analisador Lexico de LOGO
	*/

function analisadorLexicoLOGO() {
	var stdout = document.getElementById( 'stdout' );
	var	indefinido;
	var inteiro_positivo = 125;
	var inteiro_negativo = -15;
	var ponto_flutuante = 3.141592653589;
	var	exponencial = 1.6e-19;
	var expressao = 2 * ponto_flutuante * ( inteiro_positivo ^ 2 );
	var string = "<i>Well well well, so I could die easy</i>";
	var tipo = typeof( ponto_flutuante );
	var	comparacao = ( inteiro_positivo > inteiro_negativo );

	stdout.innerHTML = "indefinido: " + indefinido + "<br />"
			+ "inteiro (positivo): " + inteiro_positivo + "<br />"
			+ "inteiro (negativo): " + inteiro_negativo + "<br />"
			+ "ponto flutuante: " + ponto_flutuante + "<br />"
			+ "ponto flutuante (exponencial): " + exponencial + "<br />"
			+ "expressao: " + expressao + "<br />"
			+ "string: " + string + "<br />"
			+ "tipo: " + tipo + "<br />"
			+ "comparacao: " + comparacao + "<br />";
}

