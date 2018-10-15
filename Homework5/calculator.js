window.onload = function(){
	var expression = "";
	document.getElementById("1").onclick = function(){
		expression += "1";
		document.getElementById("result").value = expression;
	}
	document.getElementById("2").onclick = function(){
		expression += "2";
		document.getElementById("result").value = expression;
	}
	document.getElementById("3").onclick = function(){
		expression += "3";
		document.getElementById("result").value = expression;
	}
	document.getElementById("4").onclick = function(){
		expression += "4";
		document.getElementById("result").value = expression;
	}
	document.getElementById("5").onclick = function(){
		expression += "5";
		document.getElementById("result").value = expression;
	}
	document.getElementById("6").onclick = function(){
		expression += "6";
		document.getElementById("result").value = expression;
	}
	document.getElementById("7").onclick = function(){
		expression += "7";
		document.getElementById("result").value = expression;
	}
	document.getElementById("8").onclick = function(){
		expression += "8";
		document.getElementById("result").value = expression;
	}
	document.getElementById("9").onclick = function(){
		expression += "9";
		document.getElementById("result").value = expression;
	}
	document.getElementById("0").onclick = function(){
		expression += "0";
		document.getElementById("result").value = expression;
	}
	document.getElementById("add").onclick = function(){
		expression += "+";
		document.getElementById("result").value = expression;
	}
	document.getElementById("sub").onclick = function(){
		expression += "-";
		document.getElementById("result").value = expression;
	}
	document.getElementById("mul").onclick = function(){
		expression += "*";
		document.getElementById("result").value = expression;
	}
	document.getElementById("exc").onclick = function(){
		expression += "/";
		document.getElementById("result").value = expression;
	}
	document.getElementById("left").onclick = function(){
		expression += "(";
		document.getElementById("result").value = expression;
	}
	document.getElementById("right").onclick = function(){
		expression += ")";
		document.getElementById("result").value = expression;
	}
	document.getElementById("point").onclick = function(){
		expression += ".";
		document.getElementById("result").value = expression;
	}
	document.getElementById("del").onclick = function(){
		expression = expression.substr(0,expression.length-1);
		document.getElementById("result").value = expression;
	}
	document.getElementById("clr").onclick = function(){
		expression = "";
		document.getElementById("result").value = expression;
	}
	document.getElementById("eql").onclick = function(){
		var v;
		try{
			v = eval(expression);
			v.toFixed(2);
			document.getElementById("result").value = v;
		}
		catch(EvalError){
			document.getElementById("result").value = "Invalid expression!";
		}
	}
}