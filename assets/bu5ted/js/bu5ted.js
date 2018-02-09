/*!
 * Author: Bu5ted Rubber (Steve)
 * Date: 2/4/2018 
 * index.html function list
*/

var setupTimer = setInterval(setupAll, 500);

function setupAll(){
	clearTimeout(setupTimer);
	if(localStorage.getItem("firstrun") === null || localStorage.getItem("firstrun").length ===0){
		setFirstLoad();
	}
	else if (localStorage.getItem("firstrun") == "false"){
		document.getElementById("filterSlide").disabled = true; 
		bgLoad();
		setTextColor();
	}
	else if (localStorage.getItem("firstrun") == "true"){
		document.getElementById("filterSlide").disabled = true;
		localStorage.setItem("firstrun", "false");
	}	
	
}

function setFirstLoad(){
	alert("Welcome...app creation will take a few seconds, please be patient!");
	bgFirstLoad(0);
	localStorage.setItem("background", "0");
	localStorage.setItem("firstrun", "true");
	setupAll();
}

function setTextColor(){
	document.getElementById("mainTitle").style.color = localStorage.getItem("titleColor");
	document.getElementById("clock").style.color = localStorage.getItem("clockColor");
	document.getElementById("lightheader").style.color = localStorage.getItem("headingColor");
	document.getElementById("feedheader").style.color = localStorage.getItem("headingColor");
	document.getElementById("tempheader").style.color = localStorage.getItem("headingColor");
	document.getElementById("filterheader").style.color = localStorage.getItem("headingColor");
	document.getElementById("auxheader").style.color = localStorage.getItem("headingColor");
	document.getElementById("whitebrightness").style.color = localStorage.getItem("headingColor");
	document.getElementById("colorBrightness").style.color = localStorage.getItem("headingColor");
	document.getElementById("lmodeheader").style.color = localStorage.getItem("headingColor");
	document.getElementById("effectheader").style.color = localStorage.getItem("headingColor");
	document.getElementById("amountheader").style.color = localStorage.getItem("headingColor");
	document.getElementById("fmodeheader").style.color = localStorage.getItem("headingColor");
	document.getElementById("snackheader").style.color = localStorage.getItem("headingColor");
	document.getElementById("last_feeding").style.color = localStorage.getItem("headingColor");
	document.getElementById("next_feeding").style.color = localStorage.getItem("headingColor");
	document.getElementById("setheader").style.color = localStorage.getItem("headingColor");
	document.getElementById("tmodeheader").style.color = localStorage.getItem("headingColor");
	document.getElementById("temp1").style.color = localStorage.getItem("headingColor");
	document.getElementById("temp2").style.color = localStorage.getItem("headingColor");
	document.getElementById("flowheader").style.color = localStorage.getItem("headingColor");
	document.getElementById("lifeheader").style.color = localStorage.getItem("headingColor");
	document.getElementById("optionheader").style.color = localStorage.getItem("headingColor");
	document.getElementById("auxbrightheader").style.color = localStorage.getItem("headingColor");
	document.getElementById("amodeheader").style.color = localStorage.getItem("headingColor");
	document.getElementById("temp1_label").style.color = localStorage.getItem("infoColor");
	document.getElementById("temp2_label").style.color = localStorage.getItem("infoColor");
	document.getElementById("last_feeding_label").style.color = localStorage.getItem("infoColor");
	document.getElementById("next_feeding_label").style.color = localStorage.getItem("infoColor");
}

function settingPage(){
	window.location.href="main_settings.html";
}

function lightPower()
{
	var img = document.getElementById("lightbtn");
	if(img.src.match(/power_on/)) img.src = "assets/images/buttons/power_off.png";
	else img.src = "assets/images/buttons/power_on.png";
	return false;
}
function lightAuto()
{
	var imgAuto = document.getElementById("light_auto");
	var imgMan = document.getElementById("light_manual");
	if (imgAuto.src.match(/auto_on/)) return;
	if(imgAuto.src.match(/auto_off/) && imgMan.src.match(/manual_on/)) imgAuto.src = "assets/images/buttons/auto_on.png", imgMan.src = "assets/images/buttons/manual_off.png";
	else imgAuto.src = "assets/images/buttons/auto_off.png", imgMan.src = "assets/images/buttons/manual_on.png";
	return false;
}
function lightManual()
{
	var imgAuto = document.getElementById("light_auto");
	var imgMan = document.getElementById("light_manual");
	if (imgMan.src.match(/manual_on/)) return;
	if(imgMan.src.match(/manual_off/) && imgAuto.src.match(/auto_on/)) imgAuto.src = "assets/images/buttons/auto_off.png", imgMan.src = "assets/images/buttons/manual_on.png";
	else imgAuto.src = "assets/images/buttons/auto_on.png", imgMan.src = "assets/images/buttons/manual_off.png";
	return false;
}
function lightMoonlight()
{
	var img = document.getElementById("light_moonlight");
	if(img.src.match(/moonlight_on/)) img.src = "assets/images/buttons/moonlight_off.png";
	else img.src = "assets/images/buttons/moonlight_on.png";
	return false;
}
function lightDaycycle()
{
	var img = document.getElementById("light_daycycle");
	if(img.src.match(/daycycle_on/)) img.src = "assets/images/buttons/daycycle_off.png";
	else img.src = "assets/images/buttons/daycycle_on.png";
	return false;
}

var btnTime;
var btnTime1;
function feederPower()
{
	var img = document.getElementById("feedbtn");
	if(img.src.match(/power_on/)) img.src = "assets/images/buttons/power_off.png";
	else img.src = "assets/images/buttons/power_on.png";
	return false;
}
function feedAuto()
{
	var imgAuto = document.getElementById("feed_auto");
	var imgMan = document.getElementById("feed_manual");
	if (imgAuto.src.match(/auto_on/)) return;
	if(imgAuto.src.match(/auto_off/) && imgMan.src.match(/manual_on/)) imgAuto.src = "assets/images/buttons/auto_on.png", imgMan.src = "assets/images/buttons/manual_off.png";
	else imgAuto.src = "assets/images/buttons/auto_off.png", imgMan.src = "assets/images/buttons/manual_on.png";
	return false;
}
function feedManual()
{
	var imgAuto = document.getElementById("feed_auto");
	var imgMan = document.getElementById("feed_manual");
	if (imgMan.src.match(/manual_on/)) return;
	if(imgMan.src.match(/manual_off/) && imgAuto.src.match(/auto_on/)) imgAuto.src = "assets/images/buttons/auto_off.png", imgMan.src = "assets/images/buttons/manual_on.png";
	else imgAuto.src = "assets/images/buttons/auto_on.png", imgMan.src = "assets/images/buttons/manual_off.png";
	return false;
}
function feedSnack(){
	var img = document.getElementById("feed_snack");
	if(img.src.match(/snack_on/)) return;
	if (img.src.match(/snack_off/)) img.src = "assets/images/buttons/snack_on.png";
	btnTime = setTimeout(snackRelease, 1000);
	return false;
	
}
function feedQuickfeed()
{
	document.getElementById("last_feeding_label").innerHTML = formatAMPM();
	document.getElementById("next_feeding_label").innerHTML = nextFeedTime();
	var img = document.getElementById("feed_quickfeed");
	if(img.src.match(/quickfeed_on/)) return;
	if (img.src.match(/quickfeed_off/)) img.src = "assets/images/buttons/quickfeed_on.png";
	btnTime1 = setTimeout(quickRelease, 1750);
	return false;
}
function quickRelease(){
	var quick = document.getElementById("feed_quickfeed");
	quick.src = "assets/images/buttons/quickfeed_off.png";
	clearTimeout(btnTime1);
}
function snackRelease(){
	var snack = document.getElementById("feed_snack");
	snack.src = "assets/images/buttons/snack_off.png";
	clearTimeout(btnTime);
}


function tempPower()
{
	var img = document.getElementById("tempbtn");
	if(img.src.match(/power_on/)) img.src = "assets/images/buttons/power_off.png";
	else img.src = "assets/images/buttons/power_on.png";
	return false;
}
function tempAuto()
{
	var imgAuto = document.getElementById("temp_auto");
	var imgMan = document.getElementById("temp_manual");
	if (imgAuto.src.match(/auto_on/)) return;
	if(imgAuto.src.match(/auto_off/) && imgMan.src.match(/manual_on/)) imgAuto.src = "assets/images/buttons/auto_on.png", imgMan.src = "assets/images/buttons/manual_off.png";
	else imgAuto.src = "assets/images/buttons/auto_off.png", imgMan.src = "assets/images/buttons/manual_on.png";
	return false;
}
function tempManual()
{
	var imgAuto = document.getElementById("temp_auto");
	var imgMan = document.getElementById("temp_manual");
	if (imgMan.src.match(/manual_on/)) return;
	if(imgMan.src.match(/manual_off/) && imgAuto.src.match(/auto_on/)) imgAuto.src = "assets/images/buttons/auto_off.png", imgMan.src = "assets/images/buttons/manual_on.png";
	else imgAuto.src = "assets/images/buttons/auto_on.png", imgMan.src = "assets/images/buttons/manual_off.png";
	return false;
}

function filterPower()
{
	var img = document.getElementById("filterbtn");
	if(img.src.match(/power_on/)) img.src = "assets/images/buttons/power_off.png";
	else img.src = "assets/images/buttons/power_on.png";
	return false;
}
function filterReset()
{
	var img = document.getElementById("filter_reset");
	var fs = document.getElementById("filter_slider");
	if(img.src.match(/reset_on/)) return;
	if (img.src.match(/reset_off/)) img.src = "assets/images/buttons/reset_on.png";
	btnTime = setTimeout(filterRelease, 1000);
	if(confirm("Would you like to reset filter change time?")){
		document.getElementById("filterSlide").value = "0"; 
	}
	return false;
}
function filterCalibrate()
{
	var img = document.getElementById("filter_calibrate");
	if(img.src.match(/calibrate_on/)) return;
	if (img.src.match(/calibrate_off/)) img.src = "assets/images/buttons/calibrate_on.png";
	btnTime = setTimeout(filterRelease, 1000);
	if (confirm("Would you like to go to calibration settings?")){
		window.location.href="filter_calibration.html";
	}
	return false;
}
function filterRelease(){
	var reset = document.getElementById("filter_reset");
	var calibrate = document.getElementById("filter_calibrate");
	reset.src = "assets/images/buttons/reset_off.png";
	calibrate.src = "assets/images/buttons/calibrate_off.png";
	clearTimeout(btnTime);
}









function auxPower()
{
	var img = document.getElementById("auxbtn");
	if(img.src.match(/power_on/)){
		auxOn();
	}
	else if (img.src.match(/power_off/)){
		auxOff();
	}
}

function auxOn(){
	var img = document.getElementById("auxbtn");
	img.src = "assets/images/buttons/power_off.png";
	socket.emit('powerSet', { data: 'OFF' });
	console.log("CLICK2");
	return false;
}

function auxOff(){
	var img = document.getElementById("auxbtn");
	img.src = "assets/images/buttons/power_on.png";
	socket.emit('powerSet', { data: 'ON' });
	console.log("CLICK1");
	return false;
}


function auxAuto()
{
	var imgAuto = document.getElementById("aux_auto");
	var imgMan = document.getElementById("aux_manual");
	if (imgAuto.src.match(/auto_on/)) return;
	if(imgAuto.src.match(/auto_off/) && imgMan.src.match(/manual_on/)) imgAuto.src = "assets/images/buttons/auto_on.png", imgMan.src = "assets/images/buttons/manual_off.png";
	else imgAuto.src = "assets/images/buttons/auto_off.png", imgMan.src = "assets/images/buttons/manual_on.png";
	return false;
}
function auxManual()
{
	var imgAuto = document.getElementById("aux_auto");
	var imgMan = document.getElementById("aux_manual");
	if (imgMan.src.match(/manual_on/)) return;
	if(imgMan.src.match(/manual_off/) && imgAuto.src.match(/auto_on/)) imgAuto.src = "assets/images/buttons/auto_off.png", imgMan.src = "assets/images/buttons/manual_on.png";
	else imgAuto.src = "assets/images/buttons/auto_on.png", imgMan.src = "assets/images/buttons/manual_off.png";
	return false;
}

var myVar = setInterval(timedate, 1000);

function timedate(){
document.getElementById("clock").innerHTML = formatAMPM();
}

function formatAMPM() {
var d = new Date(),
    minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    ampm = d.getHours() >= 12 ? 'pm' : 'am',
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
	if (hours >= 13 && hours <=23){
	hours -= 12;
	}
	if (hours == 0){
	hours = 12;
	}
return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
}

function nextFeedTime() {
var d = new Date(),
    minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    ampm = d.getHours() >= 12 ? 'pm' : 'am',
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
	
	if (hours >= 13 && hours <=23){
		hours -= 12;
	}
	if (hours == 0){
		hours = 12;
	}
	if (ampm == "pm"){
		DAYS = days[d.getDay()+1];
		DAY = d.getDate()+1;
		ampm = "am"
		return DAYS+' '+months[d.getMonth()]+' '+DAY+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
	}
	else if (ampm == "am"){
		ampm = "pm";
		return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
	}
}

function bgFirstLoad(bgVar){
	var sendBG = "bg"+bgVar;
	for(i = 0; i < 30; i++) {
	var rem = "bg"+i;
			document.getElementsByClassName("tabs3")[0].classList.remove(rem);
		}
		document.getElementsByClassName("tabs3")[0].classList.add(sendBG);
		document.getElementsByClassName("tabs3")[0].classList.add("mbr-parallax-background");	
}

function bgLoad(){
	var bgnum = localStorage.getItem("background");
	var sendBG = "bg"+bgnum;
	for(i = 0; i < 30; i++) {
	var rem = "bg"+i;
			document.getElementsByClassName("tabs3")[0].classList.remove(rem);
		}
		document.getElementsByClassName("tabs3")[0].classList.add(sendBG);
		document.getElementsByClassName("tabs3")[0].classList.add("mbr-parallax-background");
		
}


var countClock = 0
function clockColor(){
		countClock++;
	if (countClock >=19) countClock = 0;
	var sendCLK = "clock"+countClock
	for(i = 0; i < 19; i++) {
	var rem = "clock"+i;
			document.getElementsByClassName("clock")[0].classList.remove(rem);
		}
		document.getElementsByClassName("clock")[0].classList.add(sendCLK);
}

function getTempValue(val){
	document.getElementById("set_temp_label").innerHTML = val;
}
	
	