setInterval(updateClock, 1000);
var char = document.querySelectorAll('.char');
for(var i = 0; i < char.length; i++) {
	char[i].firstChild.style.transform = 'rotate('+(-i*360/12)+'deg)';
	char[i].style.transform = 'rotate('+(i*(360/12))+'deg)';
}

function updateClock() {
	var d = new Date();
	var s = d.getSeconds();
	var m = d.getMinutes() + s/60;
	var h = d.getHours() + m/60 + s/3600;
	var hd = d.getHours();
	hd = hd > 12? hd - 12: hd;
	var md = d.getMinutes();
	md = md < 10? "0"+md: md;
	var sd = d.getSeconds();
	sd = sd < 10? "0"+sd: sd;
	document.querySelector('.hour').style.transform = 'rotate('+ h*(360/12) +'deg)';
	document.querySelector('.minute').style.transform = 'rotate('+ m*(360/60) +'deg)';
	document.querySelector('.second').style.transform = 'rotate('+ s*(360/60) +'deg)';
	document.querySelector('.clock-digital').innerHTML = `<span>${hd}</span>
														<span class="show">:</span>
														<span>${md}</span>
														<span class='show'>:</span>
														<span>${sd}</span>`;
}
setTimeout(function(){
	document.querySelector('.second').classList.add('notransition');
	document.querySelector('.minute').classList.add('notransition');
	document.querySelector('.hour').classList.add('notransition');
}, 2000);