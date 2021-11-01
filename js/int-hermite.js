function int_hermite() {
	var a=document.getElementById('cx').value;
	var b=document.getElementById('cy').value;
	var c=document.getElementById('dy').value;
	var x=a.split(' ');
	var y=b.split(' ');
	var dy=c.split(' ');
	n=x.length;
	m=2*n;
	var matrix=new Array(m);
   for (i=0;i<m;i++) {
   	matrix[i]=new Array(m);
   }
   calcule(matrix);
   print_all(matrix);
}
function print_all(M){
	element =" ";
	tab='<table border="1" style="border-collapse: collapse;">';
	tab+='<caption>Hermite</caption>';
	for(i=0;i<m; i++){
		tab+='<tr>';
		for(j=0;j<m; j++){
			element = parseFloat(M[i][j]).toFixed(4);
			tab+='<td>'+element;
		}
    }
    tab+='</table>';    
    document.getElementById("tab").innerHTML = tab;
 }
function calcule(A) {
	var a=document.getElementById('cx').value;
	var b=document.getElementById('cy').value;
	var c=document.getElementById('dy').value;
	var x=a.split(' ');
	var y=b.split(' ');
	var dy=c.split(' ');
	n=x.length;
	m=2*n;
	var z=new Array(m);
	for (i=0;i<n;i++) {
		z[2*i]=x[i];
		z[2*i+1]=x[i];
		A[2*i][0]=y[i];
		A[2*i+1][0]=y[i];
		A[2*i+1][1]=dy[i];
		if (i!== 0) {
			A[2*i][1]=(A[2*i][0]-A[2*i-1][0])/(z[2*i]-z[2*i-1]);
		}
	}
	var zz=new Array(m);
	for (i=0;i<m;i++) {
		zz[i]=z[i];
	}
	for (k=2;k<m;k++) {
		for (j=2;j<k+1;j++) {
			A[k][j]=(A[k][j-1]-A[k-1][j-1])/(zz[k]-zz[k-j]);
		}
	}
	for (i=0;i<m-1;i++) {
		for (j=1;j<m;j++) {
			if (j>i) {
				A[i][j]=0;
			}
		}
	}
	return A;
}