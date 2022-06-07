var btnCopiar = document.querySelector('#copiar');
const matrizChaves = [
	["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]];

	function criptografar() {
		document.querySelector('#container2').style.backgroundImage = "none";
		btnCopiar.style.visibility = "visible";

		let textoDigitado = document.querySelector('#texto').value;
		textoDigitado = textoDigitado.toLowerCase();
			for(let i = 0; i < matrizChaves.length; i++){
				if (textoDigitado.includes(matrizChaves[i][0])) {
					textoDigitado = textoDigitado.replaceAll(matrizChaves[i][0], matrizChaves[i][1]);
				}
			}

		document.querySelector('#resultado').innerHTML = textoDigitado;

		btnCopiar.innerText = 'copiar';
		texto.value = "";
		texto.focus();
	}

	function descriptografar() {
		document.querySelector('#container2').style.backgroundImage = "none";
		btnCopiar.style.visibility = "visible";

		let textoDigitado = document.querySelector('#texto').value;
		textoDigitado = textoDigitado.toLowerCase();
			for(let i = 0; i < matrizChaves.length; i++){
				if(textoDigitado.includes(matrizChaves[i][1])) {
					textoDigitado = textoDigitado.replaceAll(matrizChaves[i][1], matrizChaves[i][0]);
				}
			}

		document.querySelector('#resultado').innerHTML = textoDigitado;

		btnCopiar.innerText = 'copiar';
		texto.value = "";
		texto.focus();
	}

	function copiar() {
		navigator.clipboard.writeText(resultado.innerHTML);
		btnCopiar.innerText = 'texto copiado';
		texto.focus();
		
	}