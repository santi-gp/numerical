function lagrange() {
	let number_a = validateNumber_a();
	let number_b = validateNumber_b();
	let number_c = validateNumber_c();
	let a = document.getElementById('x').value.split(" ");
	let b = document.getElementById('y').value.split(" ");
	if (!number_a || !number_b || !number_c) {
		document.getElementById("demo").innerHTML = "Campos vacíos";
		demo.style.color = "#FF0000";
		demo.style.margin = "1em";
		return false;
	}
	else if (a.length != b.length) {
		document.getElementById("demo").innerHTML = "<var>x</var> y <var>y</var> no tienen la misma dimensión";
		demo.style.color = "#FF0000";
		demo.style.margin = "1em";
		return false;
	}
	else {
		var cx = document.getElementById("x").value;
		var cy = document.getElementById("y").value;
		var z = document.getElementById("z").value;
		var x = cx.split(" ");
		var y = cy.split(" ");
		for (let i = 1; i <= 3; i++) {
			document.getElementById('error' + i).innerHTML = "";
		}
		//return true;
		document.getElementById("demo").innerHTML = "";
		demo.style.margin = "0";
		var resultado = calcular(x, y, z);
		return resultado;
	}
}
function calcular(x, y, z) {
	var suma = 0;
	var prod;
	for (var j = 0; j < x.length; j++) {
		prod = 1;
		for (var i = 0; i < x.length; i++) {
			if (i != j) {
				prod *= (z - x[i]) / (x[j] - x[i]);
			}
		}
		suma += prod * y[j];
	}
	return suma;
}