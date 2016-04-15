var ms='00';
var s='00';
var m='00';
var h='00';
var counter=0;
var counterSplit=0;
var timer;

var start = document.querySelector('.start');
var split = document.querySelector('.split');
var reset = document.querySelector('.reset');
var boxSplit = document.querySelector('div.box-split');
var timerShow=document.querySelector('p.timer');

timerShow.innerHTML=  h +':'+ m +':'+ s +':'+ ms;

function timeGo() {  

	ms++;

	if (ms < 10){ 
		ms = '0' + ms;
	};
	if (ms > 99) {
		ms = '00';
		s++;

		if (s < 10){ 
			s = '0' + s; 
		};
		if (s > 59 ) {
			s = '00';
			m++;

			if (m < 10) {
				m = '0' + m;
			};
			if (m > 59) {
				m = '00';
				h++;

				if (h < 10) {
					h = '0' + h;
				};
				if (h > 23) {
					h = '00';
					m = '00';
					s = '00';
					ms = '00';
				};
			};
		};
	};  
	timerShow.innerHTML = h + ':' + m + ':' + s + ':' + ms;
	timer = setTimeout( timeGo , 10);
};

function startStopButton() {
	counter++;
console.log(counter);
	if (counter % 2 !== 0) {
		start.innerHTML = 'Stop';  
		timeGo();
	} else if (counter % 2 == 0) {
		start.innerHTML = 'Start';
		clearTimeout(timer); 
	}
};

function splitButton() {
	counterSplit++;

	splitShow= document.createElement('p');
	splitShow.classList.add('split-paragraph');
	splitShow.innerHTML = counterSplit + '.' + ' ' + 'Split ' + h+":"+m+":"+s + '.' + ms;

	boxSplit.appendChild(splitShow);
};

function resetButton() {

	clearTimeout(timer);

	ms = '00';
	s = '00';
	m = '00';
	h = '00';

	timerShow.innerHTML=  h +':'+ m +':'+ s +':'+ ms;
	boxSplit.innerHTML= " ";

	counterSplit = 0;
	counter = 0;
};

start.addEventListener('click', startStopButton);
split.addEventListener('click', splitButton);
reset.addEventListener('click', resetButton);