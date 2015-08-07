/*	*
	* Limpa o conteudo do stdout
	*/

function limpar() {
	var stdout = document.getElementById( 'stdout' );

	stdout.innerHTML = "<br />";
}

/*	*
	* Teste de uso de literais
	*/

function literais() {
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

/*	*
	* Calculo do fatorial
	*/

function fatorial( n ) {
	var stdout = document.getElementById( 'stdout' );
	var fatorial = 1;

	console.log( fatorial );
	for( var i = 1; i <= n; i++ ) {
		fatorial = i * fatorial;
		console.log( fatorial );
	}

	stdout.innerHTML = "fatorial: " + fatorial + "<br />";
}

/*	*
	* Calculo da potencia
	*/

function potencia( n, p ) {
	var stdout = document.getElementById( 'stdout' );
	var potencia = 1;

	console.log( potencia );
	for( var i = 1; i <= p; i++ ) {
		potencia = n * potencia;
		console.log( potencia );
	}

	stdout.innerHTML = "potencia: " + potencia + "<br />";
}

