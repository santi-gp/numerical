function root_fixed(param, fexpr) {
   let function_f = validateFunction();
   let number_b = validateNumber_b();
   let number_c = validateNumber_c();
   let number_n = validateNumber_n();
   if (!function_f || !number_b || !number_c || !number_n) {
      document.getElementById("demo").innerHTML = "Campos vacíos";
      demo.style.color = "#FF0000";
      demo.style.margin = "1em";
      return false;
   } else {
      var f = new Function(param, "with (Math) { v = " + fexpr + ";} return v;");
      var a = parseFloat(document.getElementById('x1').value);
      var tol = parseFloat(document.getElementById('tol').value);
      var iter = parseInt(document.getElementById('n').value);
      var x;
      var err = tol + 1;
      var text = "<table border=1>";
      text = text + "<tr><th colspan=2 align=center>" + fexpr + " = x </th></tr>";
      text = text + "<tr><td align=center> n </td><td align=center> x </td></tr>";
      text = text + "<tr><td align=center>" + 1 + "</td><td align=center>" + a.toFixed(10) + "</td></tr>";
      if (i == iter) {
         alert('Demasiadas iteraciones');
      }
      else {
         var i = 1;
         while (err > tol & i < iter) {
            x = f(a);
            err = Math.abs(x - a);
            a = x;
            i = i + 1;
            text = text + "<tr><td align=center>" + i + "</td><td align=center>" + x.toFixed(10) + "</td></tr>";
         }
      }
      text = text + "</table>";
      document.getElementById("demo").innerHTML = text;
      for (let i = 0; i <= 4; i++) {
         if (i != 1) {
            document.getElementById('error' + i).innerHTML = "";
         }
      }
      return true;
   }
}