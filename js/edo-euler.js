function edo_euler(par1, par2, fexpr) {
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
		var f = new Function(par1, par2, "with (Math) { t = " + fexpr + ";} return t;");
		var a = parseFloat(document.getElementById('x0').value);
		var b = parseFloat(document.getElementById('xn').value);
		var c = parseFloat(document.getElementById('y0').value);
		var iter = parseInt(document.getElementById('n').value)
		var h, iter;
		var x = new Array(iter);
		var y = new Array(iter);
		h = (b - a) / iter;
		var text = "<table border=1>";
		text = text + "<tr><th colspan=3 align=center> f(t,y) = " + fexpr + " </th></tr>";
		text = text + "<tr><td align=center>n </td><td align=center>x</td><td align=center>y</td></tr>";
		text = text + "<tr><td align=center>" + 0 + "</td><td align=center>" + a.toFixed(10) + "</td><td align=center>" + c.toFixed(10) + "</td></tr>";
		var i;
		x[0] = a;
		y[0] = c;
		for (i = 1; i <= iter; i++) {
			x[i] = x[i - 1] + h;
			y[i] = y[i - 1] + h * f(x[i - 1], y[i - 1]);
			text = text + "<tr><td align=center>" + i + "</td><td align=center>" + x[i].toFixed(10) + "</td><td align=center>" + y[i].toFixed(10) + "</td></tr>";
		}
		text = text + "</table>";
		document.getElementById("demo").innerHTML = text;
		for (let i = 0; i <= 4; i++) {
			document.getElementById('error' + i).innerHTML = "";
		}
		return true;
	}
}