matrix = new Array([]);
function calculate() {
	n = parseInt(document.getElementById('iteration').value);
	counter = -1;
	var i, j;
	for (i = 0; i < n; i++) {
		for (j = 0; j < n; j++) {
			counter++;
			values = document.form1.elements[counter].value;
			matrix[i][j] = parseFloat(values);
		}
	}
	reduce(matrix, matrix);
	create(matrix);
}
function create(m) {
	element = " ";
	tab = '<table border="1" style="border-collapse: collapse;">';
	tab += '<caption>Triangular L</caption>';
	for (i = 0; i < n; i++) {
		tab += '<tr>';
		for (j = 0; j < n; j++) {
			element = (m[i][j]).toFixed(4);
			tab += '<td>' + element;
		}
	}
	tab += '</table>';
	document.getElementById("tab").innerHTML = tab;
}
function data_entry() {
	n = parseInt(document.getElementById('iteration').value);
	matrix = new Array(n);
	for (i = 0; i < n; i++) {
		matrix[i] = new Array(n);
		for (j = 0; j < n; j++) {
			matrix[i][j] = new Array(n);
		}
	}
	counter = -1;
	element = "";
	tab = '<form name="form1"><table>';
	for (i = 0; i < n; i++) {
		tab += '<tr>';
		for (j = 0; j < n; j++) {
			counter++;
			tab += '<td><input type="text" size="2" name=" T ' + counter + '" placeholder="0" onclick="this.select()">' + element;
			document.getElementById('matrix').innerHTML = tab;
		}
	}
	tab += '</table>';
	document.getElementById('matrix').innerHTML = tab;
}
function reduce(L, A) {
	for (k = 0; k < n - 1; k++) {
		for (i = k + 1; i < n; i++) {
			L[i][k] = A[i][k] / A[k][k];
			for (j = k + 1; j < n; j++) {
				A[i][j] = A[i][j] - L[i][k] * A[k][j];
			}
		}
	}
	for (i = 0; i < n - 1; i++) {
		for (j = i + 1; j < n; j++) {
			A[i][j] = 0;
		}
	}
	for (i = 0; i < n; i++) {
		L[i][i] = 1;
	}
	return L;
}




