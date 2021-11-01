//var fF = /[a-z]+[\/\-\*\+]+^[\d.]+$/;
var fF = /^[a-z()\/\-\*\+\d.]+$/;
let validateFunction = () => {
	let f = document.getElementById('f').value;
	if (!fF.test(f)) {
		return false;
	}
	return true;
}
let validateDerivate = () => {
	let g = document.getElementById('g').value;
	if (!fF.test(g)) {
		return false;
	}
	return true;
}
var nF = /^[\d.\-]+$/;
let validateNumber_a = () => {
	let a = document.getElementById('x0').value;
	if (!nF.test(a)) {
		return false;
	}
	return true;
}
let validateNumber_b = () => {
	let b = document.getElementById('x1').value;
	if (!nF.test(b)) {
		return false;
	}
	return true;
}
let validateNumber_c = () => {
	let c = document.getElementById('tol').value;
	if (!nF.test(c)) {
		return false;
	}
	return true;
}
var nN = /^\d{1,2}$/;
let validateNumber_n = () => {
	let n = document.getElementById('n').value;
	if (!nN.test(n)) {
		return false;
	}
	return true;
}
const pass_value = (name) => {
	let result;
	switch (name) {
		case 'f':
			result = validateFunction();
			if (result) {
				document.getElementById('error0').innerHTML = "Función valida";
				error0.style.color = "#068B3E";
			}
			else {
				document.getElementById('error0').innerHTML = "Función no valida";
				error0.style.color = "#FF0000";
			}
			break
		case 'g':
			result = validateDerivate();
			if (result) {
				document.getElementById('error1').innerHTML = "Función valida";
				error1.style.color = "#068B3E";
			}
			else {
				document.getElementById('error1').innerHTML = "Función no valida";
				error1.style.color = "#FF0000";
			}
			break
		case 'x0':
			result = validateNumber_a();
			if (result) {
				document.getElementById('error1').innerHTML = "Número valido";
				error1.style.color = "#068B3E";
			}
			else {
				document.getElementById('error1').innerHTML = "Número no valido";
				error1.style.color = "#FF0000";
			}
			break
		case 'x1':
			result = validateNumber_b();
			if (result) {
				document.getElementById('error2').innerHTML = "Número valido";
				error2.style.color = "#068B3E";
			}
			else {
				document.getElementById('error2').innerHTML = "Número no valido o menor que x0";
				error2.style.color = "#FF0000";
			}
			break
		case 'tol':
			result = validateNumber_c();
			if (result) {
				document.getElementById('error3').innerHTML = "Número valido";
				error3.style.color = "#068B3E";
			}
			else {
				document.getElementById('error3').innerHTML = "Número no valido";
				error3.style.color = "#FF0000";
			}
			break
		case 'n':
			result = validateNumber_n();
			if (result) {
				document.getElementById('error4').innerHTML = "Número valido";
				error4.style.color = "#068B3E";
			}
			else {
				document.getElementById('error4').innerHTML = "Número no es un entero positivo";
				error4.style.color = "#FF0000";
			}
			break
	}
}
