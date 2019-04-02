var fs = require('fs'),
    querystring = require('querystring'),
    http = require('http');

//查重
var name_err=0,id_err=0,phone_err=0,email_err=0;
//后端检测格式错误
var name_form=0,id_form=0,phone_form=0,email_form=0;

/*用user储存所有已注册用户*/
var user = new Array();
user.push({username:'zhuangwz',id:'16340319',
			phone:'15919878888',email:'zwz12414@123.com'});

http.createServer(function(req, res){
	req.setEncoding('utf-8');
	var formData = "";
	req.on('data',function(data){
		formData += data;
	});
	req.on('end',function(){
		var obj = querystring.parse(formData);

		//检测是否有表单传输数据
		if(obj.username != undefined){
			//后端检测格式错误
			var na = /^([A-z][A-z0-9_]{5,17})$/;
			if(!na.test(obj.name)){
				name_form = 1;
				sign(res);
				return;
			}
			var ph =  /^([1-9][0-9]{10})$/;
			if(!ph.test(obj.phone)){
				phone_form = 1;
				sign(res);
				return;
			}
			var idd = /^([0-9]{8})$/;
			if(!idd.test(obj.id)){
				id_form = 1;
				sign(res);
				return;
			}
			var ema = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
			if(!ema.test(obj.email)){
				email_form = 1;
				sign(res);
				return;
			}
			var temp = 1;
			//查重
			for(var i = 0;i<user.length;i++){
				if(user[i].username == obj.username){
					name_err=1;
					sign(res);
					temp = 0;
					break;
				}
				if(user[i].phone == obj.phone){
					phone_err=1;
					sign(res);
					temp = 0;
					break;
				}
				if(user[i].id == obj.id){
					id_err=1;
					sign(res);
					temp = 0;
					break;
				}
				if(user[i].email == obj.email){
					email_err=1;
					sign(res);
					temp = 0;
					break;
				}
			}
			//注册成功
			if(temp){
				user.push(obj);
				information(res,obj);
			}
		}

		//检测地址
		else{
			var url = req.url;
			switch(url){
				case "/":
					sign(res);
					break;
				case "/log.css":
					res.writeHead(200,{"Content-Type":"text/css"});
					var ht = fs.readFileSync("./../public/log.css");
					res.write(ht.toString());
					res.end();
					break;
				case "/favicon.ico":
					break;
				case "/infor.css":
					res.writeHead(200,{"Content-Type":"text/css"});
					var ht = fs.readFileSync("./../public/infor.css");
					res.write(ht.toString());
					res.end();
					break;
				case "/err.js":
					break;
				default:
					var name = url.substring(11);
					var mid = 1;
					for(var i=0;i<user.length;i++){
						if(user[i].username == name){
							information(res,user[i]);
							mid = 0;
							break;
						}
					}
					if(mid)
						sign(res);
					break;
			}
		}
});

}).listen(8000);

function information(res,us){
	res.writeHead(200,{"Content-Type":"text/html"});
	res.write("<!DOCTYPE \"html\">");
	res.write("<html>");
	res.write("<head>");
	res.write("<meta charset=\"utf-8\">");
	res.write("<title>information</title>");
	res.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"infor.css\">");
	res.write("</head>");
	res.write("<body>");
	res.write("<div>");
	res.write("<p>用户详情</p>");
	res.write("<p>用户名："+us.username+"</p>");
	res.write("<p>学号  ："+us.id+"</p>");
	res.write("<p>电话  ："+us.phone+"</p>");
	res.write("<p>邮箱  ："+us.email+"</p>");
	res.write("</div>");
	res.write("</body>");
	res.write("</html>");
	res.end();
}

function sign(res){
	res.writeHead(200,{"Content-Type":"text/html"});
	if(name_err == 1){
		res.write("<p>此用户名已注册</p>");
		name_err=0;
	}
	if(id_err == 1){
		res.write("<p>此学号已注册</p>");
		id_err=0;
	}
	if(phone_err == 1){
		res.write("<p>此手机号已注册</p>");
		phone_err=0;
	}
	if(email_err == 1){
		res.write("<p>此邮箱已注册</p>");
		email_err=0;
	}
	if(name_form == 1){
		res.write("<p>用户名格式有误</p>");
		name_form=0;
	}
	if(id_form == 1){
		res.write("<p>学号格式有误</p>");
		id_form=0;
	}
	if(phone_form == 1){
		res.write("<p>手机号格式有误</p>");
		phone_form=0;
	}
	if(email_form == 1){
		res.write("<p>邮箱格式有误</p>");
		email_form=0;
	}
	var ht = fs.readFileSync("./../public/log.html");
	res.write(ht.toString());
	res.end();
}