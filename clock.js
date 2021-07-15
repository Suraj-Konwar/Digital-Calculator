// create function showtime and use method Date to get hour,min nd sec.//
function showTime() {
	let date = new Date();
	let hour =date.getHours();
	let min  =date.getMinutes();
	let sec  =date.getSeconds();
	period   ="AM";
    
	if (hour == 0) {
		hour = 12;
		period = "AM";
	}
	if (hour > 12){
		hour -= 12;
       period = "PM";
	}
	
    hour = hour < 10 ? "0" + hour : hour;
    min  = min  < 10 ? "0" + min  : min;
    sec  = sec  < 10 ? "0" + sec  : sec;

	let time = hour + ":" + min + ":" + sec + "" + period;

	document.getElementById("suraj-clock").innerHTML = time;

	setInterval(showTime, 1000);
}
showTime();