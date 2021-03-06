/*function cantor(cv, n, a, b) {
	if (n == 0) {
		cv.beginPath();
		cv.moveTo(a[0], a[1]);
		cv.lineTo(b[0], b[1]);
		cv.closePath();
		/*cv.fillStyle('green');*/
/*cv.fill();*/
/*	cv.strokeStyle = "#342545";
	cv.lineWidth = 2.0;
	cv.stroke();
} else {
	var u = new Array(a[0], a[1] + 25);
	var v = new Array(b[0], b[1] + 25);
	var c = new Array(u[0] + (v[0] - u[0]) / 3.0,
		u[1] + (v[1] - u[1]) / 3.0);
	var d = new Array(v[0] - (v[0] - u[0]) / 3.0,
		v[1] - (v[1] - u[1]) / 3.0);
	cantor(cv, n - 1, u, c);
	cantor(cv, n - 1, d, v);
}
}*/
function cantor(cv, x1, y1, long, n) {
	var iter = parseInt(document.getElementById("nivel").value);
	if (n == 0) {
		cv.beginPath();
		cv.moveTo(0, 10);
		cv.lineTo(300, 10);
		cv.lineWidth = 4.0;
		cv.stroke();
	}
	else {
		var long = long / 3.0;
		var x2 = x1 + 1.0 * long;
		var x3 = x1 + 2.0 * long;
		var x4 = x1 + 3.0 * long;

		cv.moveTo(x1, iter * 20 - (n - 1) * 20);
		cv.lineTo(x2, iter * 20 - (n - 1) * 20);
		cv.moveTo(x3, iter * 20 - (n - 1) * 20);
		cv.lineTo(x4, iter * 20 - (n - 1) * 20);
		cv.stroke();
		cantor(cv, x1, iter * 20 - (n - 1) * 20, long, n - 1);
		cantor(cv, x3, iter * 20 - (n - 1) * 20, long, n - 1);
	}
}

function triangleCantor(cv, n, a, b, c) {
	if (n == 0) {
		cv.beginPath();
		cv.moveTo(a[0], a[1]);
		cv.lineTo(b[0], b[1]);
		cv.lineTo(c[0], c[1]);
		cv.closePath();
		cv.fillStyle = "#342545";
		cv.fill();
		/*cv.strokeStyle = "green";
		cv.lineWidth = 1.0;
		cv.stroke();*/
	} else {
		var d = new Array(a[0] + (b[0] - a[0]) / 3, a[1] + (b[1] - a[1]) / 3);
		var e = new Array(b[0] - (b[0] - a[0]) / 3, b[1] - (b[1] - a[1]) / 3);
		var f = new Array(b[0] + (c[0] - b[0]) / 3, b[1] + (c[1] - b[1]) / 3);
		var g = new Array(c[0] - (c[0] - b[0]) / 3, c[1] - (c[1] - b[1]) / 3);
		var h = new Array(c[0] + (a[0] - c[0]) / 3, c[1] + (a[1] - c[1]) / 3);
		var i = new Array(a[0] - (a[0] - c[0]) / 3, a[1] - (a[1] - c[1]) / 3);
		triangleCantor(cv, n - 1, a, d, i);
		triangleCantor(cv, n - 1, e, b, f);
		triangleCantor(cv, n - 1, h, g, c);
	}
}

function squareCantor(cv, n, a, b, c, d) {
	if (n == 0) {
		cv.beginPath();
		cv.moveTo(a[0], a[1]);
		cv.lineTo(b[0], b[1]);
		cv.lineTo(c[0], c[1]);
		cv.lineTo(d[0], d[1]);
		cv.closePath();
		cv.fillStyle = "#342545";
		cv.fill();
	} else {
		var e = new Array(a[0] + (b[0] - a[0]) / 3, a[1] + (b[1] - a[1]) / 3);
		var f = new Array(b[0] - (b[0] - a[0]) / 3, b[1] - (b[1] - a[1]) / 3);
		var g = new Array(b[0] + (c[0] - b[0]) / 3, b[1] + (c[1] - b[1]) / 3);
		var h = new Array(c[0] - (c[0] - b[0]) / 3, c[1] - (c[1] - b[1]) / 3);
		var i = new Array(c[0] + (d[0] - c[0]) / 3, c[1] + (d[1] - c[1]) / 3);
		var j = new Array(d[0] - (d[0] - c[0]) / 3, d[1] - (d[1] - c[1]) / 3);
		var k = new Array(d[0] + (a[0] - d[0]) / 3, d[1] + (a[1] - d[1]) / 3);
		var l = new Array(a[0] - (a[0] - d[0]) / 3, a[1] - (a[1] - d[1]) / 3);
		var r = new Array(e[0], l[1]);
		var s = new Array(f[0], l[1]);
		var t = new Array(e[0], k[1]);
		var u = new Array(f[0], k[1]);
		squareCantor(cv, n - 1, a, e, r, l);
		squareCantor(cv, n - 1, f, b, g, s);
		squareCantor(cv, n - 1, u, h, c, i);
		squareCantor(cv, n - 1, k, t, j, d);
	}
}

function draw() {
	document.getElementById("canvas").style.display = "block";
	var canvas = document.getElementById('canvas'); //access canvas element
	if (canvas.getContext) {
		var cv = canvas.getContext('2d'); //get the context of the canvas for start drawing

		cv.clearRect(0, 0, canvas.width, canvas.height);
		//get value of type and nIteration
		var fractal = document.getElementById("tipo").value;
		var iteraciones = parseInt(document.getElementById("nivel").value);

		switch (fractal) {
			case "Conjunto de Cantor":
				/*var x = new Array(05, 50);
				var y = new Array(285, 50);
				cantor(cv, iteraciones, x, y);*/
				cantor(cv, 0, 0, 300, iteraciones);
				break;
			case "Tri??ngulo de Cantor":
				var a = new Array(05, 285);
				var b = new Array(285, 285);
				var c = new Array(145, 10);
				triangleCantor(cv, iteraciones, a, b, c);
				break;
			case "Cuadrado de Cantor":
				var a = new Array(05, 290);
				var b = new Array(285, 290);
				var c = new Array(285, 10);
				var d = new Array(05, 10);
				squareCantor(cv, iteraciones, a, b, c, d);
				break;
		}
	}
}