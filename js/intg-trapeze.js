function intg_trapeze(param, fexpr) {
  let function_f = validateFunction();
  let number_a = validateNumber_a();
  let number_b = validateNumber_b();
  let number_n = validateNumber_n();
  if (!function_f || !number_a || !number_b || !number_n) {
    document.getElementById("demo").innerHTML = "Campos vacíos";
    demo.style.color = "#FF0000";
    demo.style.margin = "1em";
    return false;
  }
  else {
    var f = new Function(param, "with (Math) { t = " + fexpr + ";} return t;");
    var a = parseFloat(document.getElementById('x0').value);
    var b = parseFloat(document.getElementById('x1').value);
    var n = parseInt(document.getElementById('n').value);
    var ya, yb, yc, h, c, I, sum;
    ya = f(a);
    yb = f(b);
    h = (b - a) / n;
    var i = 1;
    sum = 0;
    while (i <= n - 1) {
      c = a + i * h;
      yc = f(c);
      sum = sum + yc;
      i = i + 1;
    }
    for (let i = 0; i <= 3; i++) {
      document.getElementById('error' + i).innerHTML = "";
    }
    document.getElementById("demo").innerHTML = "";
    return I = (h / 2) * (ya + yb + 2 * sum);
  }
}