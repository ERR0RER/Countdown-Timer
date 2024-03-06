function startTimer(button){
var data = parseInt(document.getElementById('time').value);
if(isNaN(data)) {
	data = 60;
}
button.disabled = true;

var days = document.getElementById('day');
var hours = document.getElementById('hour');
var minutes = document.getElementById('minute');
var seconds = document.getElementById('second');

var time = data;

function updateTimer(){
	var day = Math.floor(time / (60 * 60 * 24));
	var hour = Math.floor((time % (60*60*24)) / (60*60));
	var minute = Math.floor((time % (60 * 60)) / 60);
	var second = Math.floor(time % 60);

	days.textContent = ('0' + (day || 0)).slice(-2);
	hours.textContent = ('0' + hour).slice(-2);
	minutes.textContent = ('0' + minute).slice(-2);
	seconds.textContent = ('0' + second).slice(-2);

	if(time <= 0){
		button.disabled = false;
		clearInterval(timerInterval);
	}else 
		time--;
	
}
updateTimer();

var timerInterval = setInterval(updateTimer, 1000);
}
