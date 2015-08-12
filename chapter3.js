/* *
	 * Teste de recurso sinistro 1
	 */

function funcaoUm() {
	var console = document.getElementById( 'console' );
	var valor = 25;

	console.innerHTML = console.innerHTML + "valor: " + valor + "<br />";

	function funcaoSinistra() {
		var valor = 13;

		console.innerHTML = console.innerHTML + "valor: " + valor + "<br />";

		function funcaoEmbutida() {

			console.innerHTML = console.innerHTML + "valor: " + valor + "<br />";
		}

		return funcaoEmbutida;
	}

	var funcao = funcaoSinistra();

	funcao();
}
