var myHeading = document.querySelector('h1');
myHeading.textContent="Javascript World";

document.getElementById('name').style.color = "blue";

var hideMe = function(){
	document.getElementById('name').style.display="none";
}

var showMe = function(){
	document.getElementById('name').style.display="block";
}