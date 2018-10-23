var gamestatus = 0;
var valid = 0;
window.onload = function(){
	document.getElementById("S").onmouseover = startGame;
	document.getElementById("E").onmouseover = endGame;
	document.getElementsByClassName("Epai").onmouseover = endGame;
	document.getElementById("invisible").onmouseover = setValid;
	var walls = document.getElementsByClassName("wall")
	for(var i = 0; i < walls.length;i++){
		walls[i].onmouseover = bump;
		//walls[i].style.backgroundColor = "red";
	}

}
function startGame(){
	//alert("start!");
	document.getElementById("show").value = "Game Start"
	gamestatus = 1;
	valid = 0;
}
function endGame(){
	if(gamestatus == 1){
		if(valid == 0)
			//alert("chearting!");
			document.getElementById("show").value = "Don't cheat!"
		else
			//alert("winning!");
			document.getElementById("show").value = "You Win"
	}
	gamestatus = 2;
}
function setValid(){
	valid = 1;
}
function bump(){
	if(gamestatus == 1){
		document.getElementById("show").value = "You Lose";
		this.style.backgroundColor = "red";
		setTimeout("back()",300);
  	}	//alert("fail");
  	valid = 0;
	gamestatus = 0;
}
function back(){
	var walls = document.getElementsByClassName("wall");
	for(var i = 0; i < walls.length; i++){
		walls[i].style.backgroundColor = "#E1A679";
	}
}