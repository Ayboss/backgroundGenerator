
color1 = document.querySelectorAll("input")[0];
color2 = document.querySelectorAll('input')[1];
body = document.querySelector("body");

function gradient(){
	body.style.background = "linear-gradient(to right, "+ color1.value+ ", "+color2.value+")";
	document.querySelector("h3").textContent = body.style.background; 
}
color1.addEventListener("input", gradient);
color2.addEventListener("input",gradient);