/*!
 * Author: Bu5ted Rubber (Steve)
 * Date: 2/4/2018 
 * index.html function list
*/
var setupTimer = setInterval(setupAll, 500);
function setupAll(){
	document.getElementById("filterSlide").disabled = true; 
	clearTimeout(setupTimer);
}

function lightPower()
{
	var img = document.getElementById("lightbtn");
	if(img.src.match(/power_on/)) img.src = "assets/images/buttons/power_off.png";
	else img.src = "assets/images/buttons/power_on.png";
	return false;
}
function light_auto()
{
	var imgAuto = document.getElementById("light_auto");
	var imgMan = document.getElementById("light_manual");
	if (imgAuto.src.match(/auto_on/)) return;
	if(imgAuto.src.match(/auto_off/) && imgMan.src.match(/manual_on/)) imgAuto.src = "assets/images/buttons/auto_on.png", imgMan.src = "assets/images/buttons/manual_off.png";
	else imgAuto.src = "assets/images/buttons/auto_off.png", imgMan.src = "assets/images/buttons/manual_on.png";
	return false;
}
function light_manual()
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
function feed_auto()
{
	var imgAuto = document.getElementById("feed_auto");
	var imgMan = document.getElementById("feed_manual");
	if (imgAuto.src.match(/auto_on/)) return;
	if(imgAuto.src.match(/auto_off/) && imgMan.src.match(/manual_on/)) imgAuto.src = "assets/images/buttons/auto_on.png", imgMan.src = "assets/images/buttons/manual_off.png";
	else imgAuto.src = "assets/images/buttons/auto_off.png", imgMan.src = "assets/images/buttons/manual_on.png";
	return false;
}
function feed_manual()
{
	var imgAuto = document.getElementById("feed_auto");
	var imgMan = document.getElementById("feed_manual");
	if (imgMan.src.match(/manual_on/)) return;
	if(imgMan.src.match(/manual_off/) && imgAuto.src.match(/auto_on/)) imgAuto.src = "assets/images/buttons/auto_off.png", imgMan.src = "assets/images/buttons/manual_on.png";
	else imgAuto.src = "assets/images/buttons/auto_on.png", imgMan.src = "assets/images/buttons/manual_off.png";
	return false;
}
function feed_snack(){
	var img = document.getElementById("feed_snack");
	if(img.src.match(/snack_on/)) return;
	if (img.src.match(/snack_off/)) img.src = "assets/images/buttons/snack_on.png";
	btnTime = setTimeout(snackRelease, 1000);
	return false;
	
}
function feed_quickfeed()
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
function temp_auto()
{
	var imgAuto = document.getElementById("temp_auto");
	var imgMan = document.getElementById("temp_manual");
	if (imgAuto.src.match(/auto_on/)) return;
	if(imgAuto.src.match(/auto_off/) && imgMan.src.match(/manual_on/)) imgAuto.src = "assets/images/buttons/auto_on.png", imgMan.src = "assets/images/buttons/manual_off.png";
	else imgAuto.src = "assets/images/buttons/auto_off.png", imgMan.src = "assets/images/buttons/manual_on.png";
	return false;
}
function temp_manual()
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
function filter_auto()
{
	var imgAuto = document.getElementById("filter_auto");
	var imgMan = document.getElementById("filter_manual");
	if (imgAuto.src.match(/auto_on/)) return;
	if(imgAuto.src.match(/auto_off/) && imgMan.src.match(/manual_on/)) imgAuto.src = "assets/images/buttons/auto_on.png", imgMan.src = "assets/images/buttons/manual_off.png";
	else imgAuto.src = "assets/images/buttons/auto_off.png", imgMan.src = "assets/images/buttons/manual_on.png";
	return false;
}
function filter_manual()
{
	var imgAuto = document.getElementById("filter_auto");
	var imgMan = document.getElementById("filter_manual");
	if (imgMan.src.match(/manual_on/)) return;
	if(imgMan.src.match(/manual_off/) && imgAuto.src.match(/auto_on/)) imgAuto.src = "assets/images/buttons/auto_off.png", imgMan.src = "assets/images/buttons/manual_on.png";
	else imgAuto.src = "assets/images/btn_rnd_on.png", imgMan.src = "assets/images/btn_rnd_off.png";
	return false;
}

function auxPower()
{
	var img = document.getElementById("auxbtn");
	if(img.src.match(/power_on/)) img.src = "assets/images/buttons/power_off.png";
	else img.src = "assets/images/buttons/power_on.png";
	return false;
}
function aux_auto()
{
	var imgAuto = document.getElementById("aux_auto");
	var imgMan = document.getElementById("aux_manual");
	if (imgAuto.src.match(/auto_on/)) return;
	if(imgAuto.src.match(/auto_off/) && imgMan.src.match(/manual_on/)) imgAuto.src = "assets/images/buttons/auto_on.png", imgMan.src = "assets/images/buttons/manual_off.png";
	else imgAuto.src = "assets/images/buttons/auto_off.png", imgMan.src = "assets/images/buttons/manual_on.png";
	return false;
}
function aux_manual()
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

var countBG = 0;

function bgChange(){
	countBG++;
	if (countBG >=30) countBG = 0;
	var sendBG = "bg"+countBG
	for(i = 0; i < 30; i++) {
	var rem = "bg"+i;
			document.getElementsByClassName("tabs3")[0].classList.remove(rem);
		}
		document.getElementsByClassName("tabs3")[0].classList.add(sendBG);
		document.getElementsByClassName("tabs3")[0].classList.add(mbr-parallax-background)
		
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
<!-- var msgTime = setTimeout(welcomeMsg, 2500); -->
function welcomeMsg(){
alert("Click title bar at top of page to change backgrounds...30 to choose from!");
alert("Click clock text to change color...18 to choose from!");
clearTimeout(msgTime);
}

<!-- var testwidth = setInterval(getWidth,2000); -->

function getWidth(){
var divWidth = document.getElementsByClassName("slidecontainer")[0].clientWidth;
alert(divWidth);
clearTimeout(testwidth);
}

function getTempValue(val){
	document.getElementById("set_temp_label").innerHTML = val;
}
    