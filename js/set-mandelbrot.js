var palette = new Array(
"#11bb00", "#11bb33", "#11bb66", "#11bb99", "#11bbcc",
"#45ff00", "#45ff33", "#45ff66", "#45ff99", "#45ffcc",
"#cc0000", "#cc0033", "#cc0066", "#cc0099", "#cc00cc");
var colors=palette.length;
var res_x=360; 
var res_y=240;
var max_iter=60;
var threshold=1000;
function compute_point(point,cx,cy,max_iter,threshold) {
	var a=point.x*point.x; var b=point.y*point.y;
	var K=0;
	while ((K<max_iter) && (a+b)<threshold){
		var X = a - b + cx;
		point.y=2*point.x*point.y + cy;
		point.x=X;
		a=point.x*point.x;
		b=point.y*point.y;
		K++;
	}
	return K;
}
function set_mandelbrot() {
	var canvas = document.getElementById('mandelbrot');
	canvas.style.display="block";
	var ctx = canvas.getContext('2d');
	var realx_min=-2.25;
	var realx_max=1;
	var imagy_min=-1.5;
	var imagy_max=1.5;
	var x_prop = (realx_max - realx_min) / (res_x -1);
   var y_prop = (imagy_max - imagy_min) / (res_y -1);
   for (var i=0;i<res_y;i++) {
   	var cy=imagy_min + i*y_prop;
   	for (var j=0;j<res_x;j++) {
   		var cx=realx_min + j*x_prop;
   		var point={x:0.0, y:0.0};
   		var K =compute_point(point,cx,cy,max_iter,threshold);
   		if (K==max_iter) {
   			ctx.fillStyle="#000000";
   		}
   		else {
   			ctx.fillStyle=palette[K % colors];
   		}
   		ctx.fillRect(j,i,1,1);
   	}
   }
}


