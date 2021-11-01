const int_neville = () => {
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
		let a = document.getElementById('x').value.split(" ");
		var n = a.length;
		var matrix = new Array(n);
		for (i = 0; i < n; i++) {
			matrix[i] = new Array(n);
		}
		calcule(matrix);
		print_all(matrix);
		document.getElementById("demo").innerHTML = " ";
		demo.style.margin = "0";
		for (let i = 1; i <= 3; i++) {
			document.getElementById('error' + i).innerHTML = "";
		}
	}
}
const print_all = (M) => {
	element = " ";
	tab = '<table border="1" style="border-collapse: collapse;">';
	tab += '<caption>Neville</caption>';
	for (i = 0; i < n; i++) {
		tab += '<tr>';
		for (j = 0; j < n; j++) {
			element = parseFloat(M[i][j]).toFixed(4);
			tab += '<td>' + element;
		}
	}
	tab += '</table>';
	document.getElementById("tab").innerHTML = tab;
}
const calcule = (A) => {
	var a = document.getElementById('x').value;
	var b = document.getElementById('y').value;
	var z = document.getElementById('z').value;
	var x = a.split(' ');
	var y = b.split(' ');
	n = x.length;
	for (i = 0; i < n; i++) {
		A[i][0] = y[i];
	}
	for (i = 0; i < n - 1; i++) {
		for (j = 1; j < n; j++) {
			if (j > i) {
				A[i][j] = 0;
			}
		}
	}
	for (i = 1; i < n; i++) {
		for (j = 1; j < i + 1; j++) {
			A[i][j] = (A[i][j - 1] * (z - x[i - j]) - A[i - 1][j - 1] * (z - x[i])) / (x[i] - x[i - j]);
		}
	}
	return A;
}