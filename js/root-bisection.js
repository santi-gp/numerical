function root_bisection(param, fexpr) {
	let function_f = validateFunction();
    let number_a = validateNumber_a();
	let number_b = validateNumber_b();
	let number_c = validateNumber_c();
	if (!function_f || !number_a || !number_b || !number_c) {
		document.getElementById("demo").innerHTML = "Campos vacíos";
		demo.style.color = "#FF0000";
		demo.style.margin = "1em";
		return false;
	}
	else {
		var f = new Function(param, "with (Math) {t=" + fexpr + "} return t;");
		var a = parseFloat(document.getElementById('x0').value);
		var b = parseFloat(document.getElementById('x1').value);
		var tol = parseFloat(document.getElementById('tol').value);
		var y;
		var text = "<table border=1>";
		text = text + "<tr><th colspan=2 align=center>" + fexpr + " = 0 </th></tr>";
		text = text + "<tr><td align=center> n </td><td align=center> x </td></tr>";
		if (f(a) * f(b) > 0.0) {
			alert("No hay solución en este intervalo");
		}
		else {
			var i = 0;
			while (Math.abs(b - a) > tol) {
				y = (b + a) / 2.0;
				if (f(y) * f(b) > 0.0) {
					b = y;
				}
				else {
					a = y;
				}
				i = i + 1;
				text = text + "<tr><td align=center>" + i + "</td><td align=center>" + y.toFixed(10) + "</td></tr>";
			}
		}
		text = text + "</table>";
		document.getElementById("demo").innerHTML = text;
		for (let i = 0; i <= 3; i++) {
			document.getElementById('error' + i).innerHTML = "";
		}
		return true;
	}
}