/*"use strict";

var n = 1;

function change1 ()
{	if ( n == 1){
		let a = document.querySelector('link[href="style.css"]');
		a.href = "night.css";
		document.getElementById("dlmode").src="sun.jpg";
		n = 0;}
	else{
		let a = document.querySelector('link[href="night.css"]');
		a.href = "style.css";
		document.getElementById("dlmode").src="moon.jpg";
		n = 1;}
}*/

"use strict";

var n = 1;

function change1 ()
{	if ( n == 1){
		document.getElementById("bd").style.backgroundImage="url(dark2.jpg)";
		document.getElementById("dlmode").src="sun.jpg";
		document.getElementById("text1").style.color="white";
		document.getElementById("text2").style.color="white";
		document.getElementById("navbar").style.borderBottom = "1px solid white";
		document.getElementById("navbar").style.backgroundImage="url(dark2.jpg)";
		n = 0;}
	else{
		document.getElementById("bd").style.backgroundImage="url(light2.jpg)";
		document.getElementById("dlmode").src="moon.jpg";
		document.getElementById("text1").style.color="black";
		document.getElementById("text2").style.color="black";
		document.getElementById("navbar").style.borderBottom = "1px solid black";
		document.getElementById("navbar").style.backgroundImage="url(light2.jpg)";
		n = 1;}
}