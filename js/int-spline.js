function int_spline() {
	var a=document.getElementById('cx').value;
	var b=document.getElementById('cy').value;
	var x=a.split(' ');
	var y=b.split(' ');
	n=x.length;
	var matrix=new Array(n);
   for (i=0;i<n;i++) {
   	matrix[i]=new Array(n);
   }
   calcule(matrix);
   print_all(matrix);
}
function print_all(M){
	element =" ";
	tab='<table border="1" style="border-collapse: collapse;">';
	tab+='<caption>Diferencias</caption>';
	for(i=0;i<n; i++){
		tab+='<tr>';
		for(j=0;j<n; j++){
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
	var x=a.split(' ');
	var y=b.split(' ');
	n=x.length;
	h=new Array(n-1);
	B=new Array(n);
	for (i=0;i<n-1;i++) {
		h[i]=x[i+1]-x[i];
	}
	for (i=0;i<n;i++) {
		for (j=0;j<n;j++) {
			A[i][j]=0;
		}
	}
	A[0][0]=1; A[n-1][n-1]=1;
	for (i=1;i<n-1;i++) {
		A[i][i]=2*(h[i]+h[i-1]);
      A[i][i-1]=h[i-1];
      A[i][i+1]=h[i];
      
	}
	return A;
}