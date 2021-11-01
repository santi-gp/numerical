function edo_runge3(par1, par2, fexpr) {
	var f = new Function(par1, par2, "with (Math) { t = " + fexpr + ";} return t;");
	var a = parseFloat(document.getElementById('x0').value);
	var b = parseFloat(document.getElementById('xn').value);
	var c = parseFloat(document.getElementById('y0').value);
	var iter = parseFloat(document.getElementById('n').value);
	var h, y, x, k1, k2, k3;
	h = (b - a) / iter;
	var text = "<table border=1>";
	text = text + "<tr><th colspan=3  align=center> f(t,y)=" + fexpr + "</th></tr>";
	text = text + "<tr><td align=center>n </td><td align=center>t</td><td align=center>y</td></tr>";
	text = text + "<tr><td align=center>" + 0 + "</td><td align=center>" + a.toFixed(10) + "</td><td align=center>" + c.toFixed(10) + "</td></tr>";
	var i;
	for (i = 1; i <= iter; i++) {
		x = a + h;
		k1 = f(a, c);
		k2 = f(a + h / 2, c + k1 * h / 2);
		k3 = f(a + h, c - k1 * h + 2 * k2 * h);
		a = x;
		y = c + (k1 + 4 * k2 + k3) * (h / 6);
		c = y;
		text = text + "<tr><td align=center>" + i + "</td><td align=center>" + x.toFixed(10) + "</td><td align=center>" + y.toFixed(10) + "</td></tr>";
	}
	text = text + "</table>";
	document.getElementById("demo").innerHTML = text;
}

function edo_runge4(par1, par2, fexpr) {
	var f = new Function(par1, par2, "with (Math) { t = " + fexpr + ";} return t;");
	var a = parseFloat(document.getElementById('x0').value);
	var b = parseFloat(document.getElementById('xn').value);
	var c = parseFloat(document.getElementById('y0').value);
	var iter = parseFloat(document.getElementById('n').value);
	var h, y, x, k1, k2, k3, k4;
	h = (b - a) / iter;
	var text = "<table border=1>";
	text = text + "<tr><th colspan=3 align=center> f(t,y)=" + fexpr + "</th></tr>";
	text = text + "<tr><td align=center>n </td><td align=center>t</td><td align=center>y</td></tr>";
	text = text + "<tr><td align=center>" + 0 + "</td><td align=center>" + a.toFixed(10) + "</td><td align=center>" + c.toFixed(10) + "</td></tr>";
	var i;
	for (i = 1; i <= iter; i++) {
		x = a + h;
		k1 = h * f(a, c);
		k2 = h * f(a + h / 2, c + k1 / 2);
		k3 = h * f(a + h / 2, c + k2 / 2);
		k4 = h * f(a + h, c + k3);
		a = x;
		y = c + (k1 + 2 * k2 + 2 * k3 + k4) / 6;
		c = y;
		text = text + "<tr><td align=center>" + i + "</td><td align=center>" + x.toFixed(10) + "</td><td align=center>" + y.toFixed(10) + "</td></tr>";
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
			case 'Orden 3':
				edo_runge3(par1, par2, fexpr);
		}
		switch (method) {
			case 'Orden 4':
				edo_runge4(par1, par2, fexpr);
		}
		for (let i = 0; i <= 4; i++) {
			document.getElementById('error' + i).innerHTML = "";
		}
		return true;
	}
}