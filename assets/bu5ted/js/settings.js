


var titleColor = document.getElementById('titleColor');
var headingColor = document.getElementById('headingColor');
var infoColor = document.getElementById('infoColor');
var clockColor = document.getElementById('clockColor');

var titleLabel = document.getElementById('titleLabel');
var headingLabel = document.getElementById('headingLabel');
var infoLabel = document.getElementById('infoLabel');
var clockLabel = document.getElementById('clockLabel');


titleColor.addEventListener('change', function(e) {
  titleLabel.style.color = titleColor.value;
	localStorage.setItem("titleColor",titleColor.value);
}, false);

headingColor.addEventListener('change', function(e) {
  headingLabel.style.color = headingColor.value;
	localStorage.setItem("headingColor",headingColor.value);
}, false);

infoColor.addEventListener('change', function(e) {
  infoLabel.style.color = infoColor.value;
	localStorage.setItem("infoColor",infoColor.value);
}, false);

clockColor.addEventListener('change', function(e) {
  clockLabel.style.color = clockColor.value;
	localStorage.setItem("clockColor",clockColor.value);
}, false);

var setupTimer = setInterval(setupSettings, 500);
function setupSettings(){
	clearTimeout(setupTimer);
	loadColors();
}

function loadColors(){
    headingLabel.style.color = localStorage.getItem("headingColor");
	headingColor.value = localStorage.getItem("headingColor");
	clockLabel.style.color = localStorage.getItem("clockColor");
	clockColor.value = localStorage.getItem("clockColor");
    infoLabel.style.color = localStorage.getItem("infoColor");
	infoColor.value = localStorage.getItem("infoColor");
	titleLabel.style.color = localStorage.getItem("titleColor");
	titleColor.value = localStorage.getItem("titleColor");
}

function setBackground(sourceImg){
	document.getElementById('selectedImage').src=sourceImg;
	var STR = sourceImg.substr(sourceImg.lastIndexOf("/"));
	var S = STR.substr(1,STR.length-5);
	localStorage.setItem("background",S);
}
function settingsAccept(){
	if (confirm("Accept and Apply Selected Settings?")){
		window.location.href="index.html";
	}
}