function heun(par1, par2, fexpr) {
	var f = new Function(par1, par2, "with (Math) { t = " + fexpr + ";} return t;");
	var a = parseFloat(document.getElementById('x0').value);
	var b = parseFloat(document.getElementById('xn').value);
	var c = parseFloat(document.getElementById('y0').value);
	var iter = parseInt(document.getElementById('n').value);
	var h, k1, k2;
	h = (b - a) / iter;
	var text = "<table border=1>";
	text = text + "<tr><th colspan=3 align=center> f(t,y)=" + fexpr + "</th></tr>";
	text = text + "<tr><td align=center>n </td><td align=center>t</td><td align=center>y</td></tr>";
	text = text + "<tr><td align=center>" + 0 + "</td><td align=center>" + a.toFixed(10) + "</td><td align=center>" + c.toFixed(10) + "</td></tr>";
	var i;
	var x = new Array(iter);
	var y = new Array(iter);
	x[0] = a;
	y[0] = c;
	for (i = 1; i <= iter; i++) {
		x[i] = x[i - 1] + h;
		k1 = f(x[i - 1], y[i - 1]);
		k2 = f(x[i], y[i - 1] + h * k1);
		y[i] = y[i - 1] + (h / 2) * (k1 + k2);
		text = text + "<tr><td align=center>" + i + "</td><td align=center>" + x[i].toFixed(10) + "</td><td align=center>" + y[i].toFixed(10) + "</td></tr>";
	}
	text = text + "</table>";
	document.getElementById("demo").innerHTML = text;
}

function edo_pm(par1, par2, fexpr) {
	var f = new Function(par1, par2, "with (Math) { t = " + fexpr + ";} return t;");
	var a = parseFloat(document.getElementById('x0').value);
	var b = parseFloat(document.getElementById('xn').value);
	var c = parseFloat(document.getElementById('y0').value);
	var iter = parseInt(document.getElementById('n').value);
	var h, k;
	h = (b - a) / iter;
	var text = "<table border=1>";
	text = text + "<tr><th colspan=3 align=center> f(t,y)=" + fexpr + "</th></tr>";
	text = text + "<tr><td align=center>n </td><td align=center>t</td><td align=center>y</td></tr>";
	text = text + "<tr><td align=center>" + 0 + "</td><td align=center>" + a.toFixed(10) + "</td><td align=center>" + c.toFixed(10) + "</td></tr>";
	var i;
	var x = new Array(iter);
	var y = new Array(iter);
	x[0] = a;
	y[0] = c;
	for (i = 1; i <= iter; i++) {
		x[i] = x[i - 1] + h;
		k = (h / 2) * f(x[i - 1], y[i - 1]);
		y[i] = y[i - 1] + h * f(x[i - 1] + h / 2, y[i - 1] + k);
		text = text + "<tr><td align=center>" + i + "</td><td align=center>" + x[i].toFixed(10) + "</td><td align=center>" + y[i].toFixed(10) + "</td></tr>";
	}
	text = text + "</table>";
	document.getElementById("demo").innerHTML = text;
}

function ralston(par1, par2, fexpr) {
	var f = new Function(par1, par2, "with (Math) { t = " + fexpr + ";} return t;");
	var a = parseFloat(document.getElementById('x0').value);
	var b = parseFloat(document.getElementById('xn').value);
	var c = parseFloat(document.getElementById('y0').value);
	var iter = parseInt(document.getElementById('n').value);
	var h, k1, k2;
	h = (b - a) / iter;
	var text = "<table border=1>";
	text = text + "<tr><th colspan=3 align=center> f(t,y)=" + fexpr + "</th></tr>";
	text = text + "<tr><td align=center>n </td><td align=center>t</td><td align=center>y</td></tr>";
	text = text + "<tr><td align=center>" + 0 + "</td><td align=center>" + a.toFixed(10) + "</td><td align=center>" + c.toFixed(10) + "</td></tr>";
	var i;
	var x = new Array(iter);
	var y = new Array(iter);
	x[0] = a;
	y[0] = c;
	for (i = 1; i <= iter; i++) {
		x[i] = x[i - 1] + h;
		k1 = f(x[i - 1], y[i - 1]);
		k2 = f(x[i - 1] + (3 / 4) * h, y[i - 1] + (3 / 4) * k1 * h);
		y[i] = y[i - 1] + (k1 / 3 + 2 * k2 / 3) * h;
		text = text + "<tr><td align=center>" + i + "</td><td align=center>" + x[i].toFixed(10) + "</td><td align=center>" + y[i].toFixed(10) + "</td></tr>";
	}
	text = text + "</table>";
	document.getElementById("demo").innerHTML = text;
}

function calcule(par1, par2, fexpr) {
	var method = document.getElementById('tipo').value;
	let function_f = validateFunction();
	let number_a = validateNumber_a();
	let number_b = validateNumber_b();
	let number_c = validateNumber_c();
	let number_n = validateNumber_n();
	if (!function_f || !number_a || !number_b || !number_c || !number_n) {
		document.getElementById("demo").innerHTML = "Campos vacíos";
		demo.style.color = "#FF0000";
		demo.style.margin = "1em";
		return false;
	}
	else {
		switch (method) {
			case 'Heun':
				heun(par1, par2, fexpr);
				break;
		}
		switch (method) {
			case "Punto medio":
				edo_pm(par1, par2, fexpr);
				break;
		}
		switch (method) {
			case "Ralston":
				ralston(par1, par2, fexpr);
				break;
		}
		for (let i = 0; i <= 4; i++) {
			document.getElementById('error' + i).innerHTML = "";
		}
		return true;
	}
}