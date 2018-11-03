window.onload = function(){
	createPuzzel(); 
	document.getElementById("restart").onclick = restart;
	var nodes = document.getElementsByClassName("small");
	for(var i = 0; i < nodes.length; i++){
		nodes[i].onclick = move;
	}
}
function createPuzzel(){
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
	if(this.style.top == blank.style.top){
		//alert("top");
		if(Math.abs(parseInt(this.style.left)-parseInt(blank.style.left)) == 88){
			swapleft = parseInt(this.style.left);
			this.style.left = blank.style.left;
			blank.style.left = swapleft+"px";
		}
	}
	else if(this.style.left == blank.style.left){
		if(Math.abs(parseInt(this.style.top)-parseInt(blank.style.top)) == 88){
			swaptop = parseInt(this.style.top);
			this.style.top = blank.style.top;
			blank.style.top = swaptop+"px";
		}
	}
	if(corret == true){
		alert("you win");
	}
}