"use strict";

var n = 1;

function change1 ()
{	if ( n == 1){
		document.getElementById("bd").style.backgroundImage="url(dark.jpg)";
		document.getElementById("dlmode").src="sun.jpg";
		document.getElementById("text1").style.color="white";
		document.getElementById("text2").style.color="white";
		document.getElementById("navbar").style.borderBottom = "1px solid white";
		document.getElementById("navbar").style.backgroundImage="url(dark.jpg)";
		n = 0;}
	else{
		document.getElementById("bd").style.backgroundImage="url(light.jpg)";
		document.getElementById("dlmode").src="moon.jpg";
		document.getElementById("text1").style.color="black";
		document.getElementById("text2").style.color="black";
		document.getElementById("navbar").style.borderBottom = "1px solid black";
		document.getElementById("navbar").style.backgroundImage="url(light.jpg)";
		n = 1;}
}
