
var h, m, s, ms;
ms=s=m=h='00';
var counter=0;
var counterSplit=0;
var timer;

var start = document.querySelector('.start');
var split = document.querySelector('.split');
var reset = document.querySelector('.reset');
var boxSplit = document.querySelector('div.box-split');
var timerShow=document.querySelector('p.timer');

timerShow.innerHTML=  h +':'+ m +':'+ s +':'+ ms;
function addZero(time){
	if(time < 10){
		time='0' + time;
	};
	return time;
};
function HGo() {
	h++;
	h=addZero(h);
	if(h > 23){
		ms=s=m=h='00';
	}
};
function MGo() {
	m++;
	m=addZero(m);
	if(m > 59){
		m='00';
		HGo();
	}
};
function SGo() {
	s++;
	s=addZero(s);
	if(s > 59){
		s='00';
		MGo();
	}
};
function MsGo() {
	ms++;
	ms=addZero(ms);	
	if(ms>99){
		ms='00';
		SGo();
	};
};

function timeGo() {  
	MsGo();
	timerShow.innerHTML = h + ':' + m + ':' + s + ':' + ms;
	timer = setTimeout( timeGo , 10);
};

function startStopButton() {
	counter++;
	
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

	ms=s=m=h='00';
	timerShow.innerHTML=  h +':'+ m +':'+ s +':'+ ms;
	boxSplit.innerHTML= " ";

	counterSplit=counter=0;
};

start.addEventListener('click', startStopButton);
split.addEventListener('click', splitButton);
reset.addEventListener('click', resetButton);