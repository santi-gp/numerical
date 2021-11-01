function curve_koch(cv, n, a, b) {
	if (n == 0) {
		cv.beginPath();
		cv.moveTo(a[0], a[1]);
		cv.lineTo(b[0], b[1]);
		cv.closePath();
		/*cv.fill();
		cv.fillStyle('green');*/
		cv.strokeStyle = "#342545";
		cv.lineWidth = 1.0;
		cv.stroke();
	} else {
		var c = new Array(a[0] + (b[0] - a[0]) / 3.0,
			a[1] + (b[1] - a[1]) / 3.0);
		var d = new Array(b[0] - (b[0] - a[0]) / 3.0,
			b[1] - (b[1] - a[1]) / 3.0);
		var e = new Array(c[0] + (d[0] - c[0]) * Math.cos(-Math.PI / 3.0) -
			(d[1] - c[1]) * Math.sin(-Math.PI / 3.0),
			c[1] + (d[0] - c[0]) * Math.sin(-Math.PI / 3.0) +
			(d[1] - c[1]) * Math.cos(-Math.PI / 3.0));
		curve_koch(cv, n - 1, a, c);
		curve_koch(cv, n - 1, c, e);
		curve_koch(cv, n - 1, e, d);
		curve_koch(cv, n - 1, d, b);
	}
}

function snowflake(cv, n, a, b) {
	if (n == 0) {
		cv.beginPath();
		cv.moveTo(a[0], a[1]);
		cv.lineTo(b[0], b[1]);
		cv.closePath();
		/*cv.fillStyle('green');*/
		/*cv.fill();*/
		cv.strokeStyle = "#342545";
		/*cv.lineWidth = 1.0;*/
		cv.lineWidth = 3.0;
		cv.stroke();
	} else {
		var c = new Array(a[0] + (b[0] - a[0]) / 3.0,
			a[1] + (b[1] - a[1]) / 3.0);
		var d = new Array(b[0] - (b[0] - a[0]) / 3.0,
			b[1] - (b[1] - a[1]) / 3.0);
		var e = new Array(c[0] + (d[0] - c[0]) * Math.cos(Math.PI / 3.0) -
			(d[1] - c[1]) * Math.sin(Math.PI / 3.0),
			c[1] + (d[0] - c[0]) * Math.sin(Math.PI / 3.0) +
			(d[1] - c[1]) * Math.cos(Math.PI / 3.0));
		snowflake(cv, n - 1, a, c);
		snowflake(cv, n - 1, c, e);
		snowflake(cv, n - 1, e, d);
		snowflake(cv, n - 1, d, b);
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
			case "Curva de Koch":
				var a = new Array(05, 125);
				var b = new Array(285, 125);
				curve_koch(cv, iteraciones, a, b);
				break;
			case "Copo de Koch":
				var x = new Array(46.0770, 200);
				var y = new Array(253.9230, 200);
				var z = new Array(150, 20);
				snowflake(cv, iteraciones, x, y);
				snowflake(cv, iteraciones, y, z);
				snowflake(cv, iteraciones, z, x);
				break;
		}
	}
}