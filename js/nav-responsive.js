var contador = 1;

function menu() {
	if (contador == 1) {
		document.getElementById("main-nav").style.left = "0";
		contador = contador + 1;
	} else {
		document.getElementById("main-nav").style.left = "-100%";
		contador = 1;
	}
}
