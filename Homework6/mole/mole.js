var gamePlaying = 0;
var gameStop = 1;
var time = 0;
var score = 0;
window.onload = function(){
	createMoles();
	document.getElementById("btn").onclick = BtnClicked;
}
function createMoles(){
	var temp = document.createDocumentFragment();
	for(var i = 0; i < 6; i++){
		for(var j = 0; j < 10; j++){
			var node = document.createElement("button");
			node.value = "0";
			node.type = "radio";
			node.className = "holes";
			temp.appendChild(node);
		}
	}
	var temp2 = document.getElementById("molesposition")
	temp2.appendChild(temp);
}
function BtnClicked(){
	//重新开始游戏
	if(gamePlaying == 0){
		gameStop = 0;
		gamePlaying = 1;
		reset();
		document.getElementById("game").value = "Game Playing";
	}
	//未结束游戏，游戏暂停
	else if(gameStop == 0){
		gameStop = 1;
		document.getElementById("game").value = "Temporary Stop";
	}
	//未结束游戏，游戏继续
	else{
		gameStop = 0;
		set();
		document.getElementById("game").value = "Game Playing";
	}
}
function hit(){
	if(gameStop){
		return;
	}
	if(this.value == 1){
		score++;
		this.value = 0;
		this.style.border = "2px green solid";
		document.getElementById("S").value =score;
	}
}
function reset(){
	time = 30;
	score = 0;
	document.getElementById("T").value = time;
	document.getElementById("S").value = score;
	setTime();
}
function set(){
	setTime();
}
function setTime(){
	if(gameStop){
		return;
	}
	if(time == 0){
		document.getElementById("game").value = "Game Over";
		gameStop = 1;
		gamePlaying = 0;
		return;
	}
	var holes = document.getElementsByClassName("holes");
	for(var i = 0; i < holes.length; i++){
		if(!gameStop)
			holes[i].onclick = hit;
	}
	time--;
	document.getElementById("T").value = time;
	
	for(var i = 0; i < holes.length; i++){
		if(holes[i].value == 1){
			score--;
			document.getElementById("S").value = score;
		}
	}
	appear();
	setTimeout(setTime,1000);
}
function appear(){
	if(!gamePlaying)
		return;
	var num = parseInt(Math.random()*1000%60);
	var holes = document.getElementsByClassName("holes");
	for(var i = 0; i < holes.length; i++){
		holes[i].style.border = "2px solid #BDC0BA";
		holes[i].style.backgroundColor = "white";
		holes[i].value = 0;
	}
	holes[num].style.border = "2px solid #64363C";
	holes[num].style.backgroundColor = "#BDC0BA"
	holes[num].value = 1;
}