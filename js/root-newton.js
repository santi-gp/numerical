function root_newton(param, fexpr, gexpr) {
  let function_f = validateFunction();
  let function_g = validateDerivate();
  let number_a = validateNumber_a();
  let number_c = validateNumber_c();
  let number_n = validateNumber_n();
  if (!function_f || !number_a || !number_c || !function_g || !number_n) {
    document.getElementById("demo").innerHTML = "Campos vacíos";
    demo.style.color = "#FF0000";
    demo.style.margin = "1em";
    return false;
  }
  else {
    var f = new Function(param, "with (Math) {t=" + fexpr + "} return t;");
    var g = new Function(param, "with (Math) {s=" + gexpr + "} return s;");
    var a = parseFloat(document.getElementById('x0').value);
    var tol = parseFloat(document.getElementById('tol').value);
    var n = parseInt(document.getElementById('n').value);
    var y, h;
    var text = "<table border=1>";
    text = text + "<tr><th colspan=2 align=center>" + fexpr + " = 0 </th></tr>";
    text = text + "<tr><td align=center> n </td><td align=center> x </td></tr>";
    for (i = 2; i <= n; i++) {
      h = - f(a) / g(a);
      y = a + h;
      a = y;
      text = text + "<tr><td align=center>" + i + "</td><td align=center>" + y.toFixed(10) + "</td></tr>";
      if (Math.abs(h) < tol)
        break;
    }
    /*return y;*/
    text = text + "</table>";
    document.getElementById("demo").innerHTML = text;
    for (let i = 0; i <= 4; i++) {
      document.getElementById('error' + i).innerHTML = "";
    }
    return true;
  }

}