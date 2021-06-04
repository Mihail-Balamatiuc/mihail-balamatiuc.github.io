"use strict";

var n = 1;

function change1 ()
{	if ( n == 1){
		let a = document.querySelector('link[href="style.css"]');
		a.href = "night.css";
		document.getElementById("dlmode").src="sun.jpg";
		document.getElementById("logo").src="darklogo.jpg";
		n = 0;}
	else{
		let a = document.querySelector('link[href="night.css"]');
		a.href = "style.css";
		document.getElementById("dlmode").src="moon.jpg";
		document.getElementById("logo").src="logo.jpg";
		n = 1;}
}

var x = 0;

function circle ()
{
	if (x == 0){
		document.getElementById("clickmove").style.left="560px";
	    document.getElementById("clickmove").style.transform="rotate(360deg)";
	    document.getElementById("clickimg").src="l2.jpg";
	    x = 1;		
		}	

	else if(x == 1){
		document.getElementById("clickmove").style.transform="rotate(720deg)";
		document.getElementById("clickmove").style.left="1150px";
		document.getElementById("clickimg").src="l3.jpg";
	    x = 2;		
		}

	else if(x == 2){
		document.getElementById("clickmove").style.transform="rotate(360deg)";
		document.getElementById("clickmove").style.top="3500px";
		document.getElementById("clickimg").src="l4.jpg";
	    x = 3;		
		}

	else if(x == 3){
		document.getElementById("clickmove").style.transform="rotate(720deg)";
		document.getElementById("clickmove").style.left="560px";
		document.getElementById("clickimg").src="l5.jpg";
	    x = 4;		
		}

	else if(x == 4){
		document.getElementById("clickmove").style.transform="rotate(360deg)";
		document.getElementById("clickmove").style.left="10px";
		document.getElementById("clickimg").src="l6.jpg";
	    x = 5;		
		}

	else if(x == 5){
		document.getElementById("clickmove").style.transform="rotate(720deg)";
		document.getElementById("clickmove").style.top="3100px";
		document.getElementById("clickimg").src="l1.jpg";
	    x = 0;		
		}

}

function appear1()
{
	var x = document.getElementsByClassName("funny");

	for (var i = x.length - 1; i >= 0; i--) {
		x[i].style.opacity="100%";
	}
}

/*"use strict";

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
}*/