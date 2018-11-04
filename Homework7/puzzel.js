var first = 1;
window.onload = function(){
	createPuzzel(); 
	document.getElementById("restart").onclick = restart;
	var nodes = document.getElementsByClassName("small");
	for(var i = 0; i < nodes.length; i++){
		nodes[i].onclick = move;
	}
}
function createPuzzel(){
	document.getElementById("win").style.fontSize = "20px";
	document.getElementById("win").innerHTML = "您可以手动打乱或者点重新开始键让系统帮您打乱拼图来开始游戏";
	var temp = document.createDocumentFragment();
	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 4; j++){
			var top = i*88;
			var left = j*88;
			var v = i*4+j;
			var node = document.createElement("div");
			node.value = parseInt(v);
			node.id = parseInt(v);
			node.className = "small";
			if((i == 3)&&(j == 3)){
				node.style.backgroundImage = "none";
				node.style.border = "none";
			}
			else{
				node.style.backgroundPosition = "-"+parseInt(left)+"px -"+parseInt(top)+"px";
			}
			node.style.top = parseInt(top)+"px";
			node.style.left = parseInt(left)+"px";
			temp.appendChild(node);
		}
	}
	var temp2 = document.getElementById("position");
	temp2.appendChild(temp);
}
function restart(){
	document.getElementById("win").innerHTML = "";
	var temp = document.getElementById("position");
	for(var i = 0; i < 6; i++){
		var ran = (Math.random()*100)%16;
		var end = document.getElementById(parseInt(ran));
		temp.removeChild(end);
		temp.appendChild(end);
	}
	var nodes = document.getElementsByClassName("small")
	for(var i = 0; i < nodes.length; i++){
		nodes[i].style.top = parseInt(Math.floor(i/4)*88)+"px";
		nodes[i].style.left = parseInt(i%4*88)+"px";
	}
	if(!isValid())
		restart();
}
function corret(){
	var temp = document.getElementsByClassName("small");
	for(var i = 0; i < temp.length; i++){
		if(temp[i].value != i)
			return false;
	}
	return true;
}
function move(){
	var blank = document.getElementById("15");
	var swaptop,swapleft;
	var val;
	if(this.style.top == blank.style.top){
		if(Math.abs(parseInt(this.style.left)-parseInt(blank.style.left)) == 88){
			swapleft = parseInt(this.style.left);
			val = this.value;
			this.style.left = blank.style.left;
			this.value = blank.value;
			blank.style.left = swapleft+"px";
			blank.value = val;
		}
	}
	else if(this.style.left == blank.style.left){
		if(Math.abs(parseInt(this.style.top)-parseInt(blank.style.top)) == 88){
			swaptop = parseInt(this.style.top);
			val = this.value;
			this.style.top = blank.style.top;
			this.value = blank.value;
			blank.style.top = swaptop+"px";
			blank.value =val;
		}
	}
	if((corret() == true)&&(!first)){
		document.getElementById("win").style.fontSize = "40px";
		document.getElementById("win").innerHTML = "You win";
		first = 1;
		return;
	}
	if(first == 1){
		first = 0;
		document.getElementById("win").innerHTML = "";
	}
}
function isValid(){
	var temp = document.getElementsByClassName("small");
	var count = 0;
	for(var i = 0; i < 16; i++){
		for(var j = i+1; j < 16; j++){
			if(temp[i].id > temp[j].id)
				count++;
		}
	}
	if((count%2) == 0)
		return true;
	return false;
}