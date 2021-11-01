var nF = /^[\d.\-]+$/;
let validateNumber_a = () => {
	let a = document.getElementById('x').value.split(" ");
	for (var i = 0; i < a.length; i++) {
		if (!nF.test(a[i])) {
			return false;
		}
	}
	return true;

}
let validateNumber_b = () => {
	let b = document.getElementById('y').value.split(" ");
	for (var i = 0; i < b.length; i++) {
		if (!nF.test(b[i])) {
			return false;
		}
	}
	return true;
}
let validateNumber_c = () => {
	let c = document.getElementById('z').value;
	if (!nF.test(c)) {
		return false;
	}
	return true;
}
const pass_value = (name) => {
	let result;
	switch (name) {

		case 'x':
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
		case 'y':
			result = validateNumber_b();
			if (result) {
				document.getElementById('error2').innerHTML = "Número valido";
				error2.style.color = "#068B3E";
			}
			else {
				document.getElementById('error2').innerHTML = "Número no valido";
				error2.style.color = "#FF0000";
			}
			break
		case 'z':
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
	}
}

