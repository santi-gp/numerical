function sierpinski(cv, n, a, b, c) {
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

		var a1 = new Array((a[0] + b[0]) / 2, (a[1] + b[1]) / 2);
		var b1 = new Array((b[0] + c[0]) / 2, (b[1] + c[1]) / 2);
		var c1 = new Array((c[0] + a[0]) / 2, (c[1] + a[1]) / 2);
		sierpinski(cv, n - 1, a, a1, c1);
		sierpinski(cv, n - 1, a1, b, b1);
		sierpinski(cv, n - 1, c1, b1, c);
	}

}

function alfombra(cv, n, x, y, a) {
	if (n == 0) {
		cv.beginPath();
		cv.rect(x, y, a, a);
		cv.fillStyle = '#342545';
		cv.fill();
		/*cv.lineWidth = 1.0;
		cv.strokeStyle = 'black';
		cv.stroke();*/
	} else {
		var a = a / 3.0;
		alfombra(cv, n - 1, x, y, a);
		alfombra(cv, n - 1, x, y + a, a);
		alfombra(cv, n - 1, x, y + 2 * a, a);
		alfombra(cv, n - 1, x + a, y, a);
		/*draw(cxt,x+a,y+a,a);*/
		alfombra(cv, n - 1, x + a, y + 2 * a, a);
		alfombra(cv, n - 1, x + 2 * a, y, a);
		alfombra(cv, n - 1, x + 2 * a, y + a, a);
		alfombra(cv, n - 1, x + 2 * a, y + 2 * a, a);
	}
}

function draw() {
	var canvas = document.getElementById('canvas'); //access canvas element
	canvas.style.display="block";
	if (canvas.getContext) {
		var cv = canvas.getContext('2d'); //get the context of the canvas for start drawing

		cv.clearRect(0, 0, canvas.width, canvas.height);
		//get value of type and nIteration
		var fractal = document.getElementById("tipo").value;
		var iteraciones = parseInt(document.getElementById("nivel").value);

		switch (fractal) {
			case "Triángulo de Sierpinski":
				var a = new Array(05, 285);
				var b = new Array(285, 285);
				var c = new Array(145, 10);
				sierpinski(cv, iteraciones, a, b, c);
				break;
			case "Alfombra de Sierpinski":
				var x = 05;
				var y = 05;
				var a = 285;
				alfombra(cv, iteraciones, x, y, a);
				break;
		}
	}
}