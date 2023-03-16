document.write("7. Factorial of a number using for loop");

document.write("<br>");
document.write("<br>");

var n=(prompt("Enter a factorial number"));
var a=1;
for (i=n; i>=1; i--) {
	a =a*i;
}
document.write(a);

document.write("<br>");
document.write("<br>");
document.write("<br>");


let numbers=[1,2,3,4,5,6,7,8,9,10];
	for (i=0; i<numbers.length; i++) {
		if (numbers[i] %2== 0) {
			document.write("even-");
		}
		else {
			document.write("odd-");
		}
		document.write(numbers[i], "<br>");
	}