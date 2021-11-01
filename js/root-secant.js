function root_secant(param, fexpr) {
  var f = new Function(param, "with (Math) {t=" + fexpr + "} return t;");
  var a = parseFloat(document.getElementById('x0').value);
  var b = parseFloat(document.getElementById('x1').value);
  var tol = parseFloat(document.getElementById('tol').value);
  var y;
  var text = "<table border=1>";
  text = text + "<tr><th colspan=2 align=center>" + fexpr + " = 0 </th></tr>";
  text = text + "<tr><td align=center> n </td><td align=center> x </td></tr>";
  i = 2;
  var z = 100;
  while (z > tol) {
    y = b - f(b) * ((b - a) / (f(b) - f(a)));
    z = Math.abs(b - a);
    a = b;
    b = y;
    i = i + 1;
    text = text + "<tr><td align=center>" + i + "</td><td align=center>" + y.toFixed(10) + "</td></tr>";
  }
  /*      return b;*/
  text = text + "</table>";
  document.getElementById("demo").innerHTML = text;
}

