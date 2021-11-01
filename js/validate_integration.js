var fF = /^[a-z()\/\-\*\+\d.]+$/;
let validateFunction = () => {
  let f = document.getElementById('f').value;
  if (!fF.test(f)) {
    return false;
  }
  return true;
}
var nF = /^[\d.\-]+$/;
let validateNumber_a = () => {
  let a = document.getElementById('x0').value;
  if (!nF.test(a)) {
    return false;
  }
  return true;
}
let validateNumber_b = () => {
  let b = document.getElementById('x1').value;
  if (!nF.test(b)) {
    return false;
  }
  return true;
}
var nN = /^\d{1,2}$/;
let validateNumber_n = () => {
  let n = document.getElementById('n').value;
  if (!nN.test(n)) {
    return false;
  }
  return true;
}
const pass_value = (name) => {
  let result;
  switch (name) {
    case 'f':
      result = validateFunction();
      if (result) {
        document.getElementById('error0').innerHTML = "Función valida";
        error0.style.color = "#068B3E";
      }
      else {
        document.getElementById('error0').innerHTML = "Función no valida";
        error0.style.color = "#FF0000";
      }
      break
    case 'x0':
      result = validateNumber_a();
      if (result) {
        document.getElementById('error1').innerHTML = "Número valido";
        error1.style.color = "#068B3E";
      }
      else {
        document.getElementById('error1').innerHTML = "Número no valido";
        error1.style.color = "#FF0000";
      }
      break
    case 'x1':
      result = validateNumber_b();
      if (result) {
        document.getElementById('error2').innerHTML = "Número valido";
        error2.style.color = "#068B3E";
      }
      else {
        document.getElementById('error2').innerHTML = "Número no valido o menor que x0";
        error2.style.color = "#FF0000";
      }
      break
    case 'n':
      result = validateNumber_n();
      if (result) {
        document.getElementById('error3').innerHTML = "Número valido";
        error3.style.color = "#068B3E";
      }
      else {
        document.getElementById('error3').innerHTML = "Número no valido";
        error3.style.color = "#FF0000";
      }
      break
  }
}
/*const intg_trapeze = (param, fexpr) => {
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
}*/
