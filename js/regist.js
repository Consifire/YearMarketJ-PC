//注册验证
onload = function() {

		var oinput = document.getElementsByTagName("input");
		var info = document.getElementById("aletInfo");

		//1.手机号码
		d1 = 0;
		oinput[0].onblur = function() {
			var tel = this.value;
			var isTrue = /^1\d{10}/g.test(tel);
			if(isTrue) {
				info.innerHTML = "";
				d1 = 1;
			} else {
				info.innerHTML = " 请输入首位为1的11位纯数字手机号！";
				d1 = 0;
			}
		};

		//2.输入验证码
		d2 = 0;
		oinput[1].onblur = function() {
			var num = this.value;

			if(num == oinput[2].value) {
				info.innerHTML = "";
				d2 = 1;
			} else {
				info.innerHTML = " 请输入正确的4位验证码！";
				d2 = 0;
			}
		};

		//3.获取验证码   四个字母的随机数字或字母
		oinput[2].onclick = function() {

			var str = "";
			for(var i = 0; i < 4; i++) { //产生四个随机数
				var isNum = parseInt(Math.random() * 10); //0-9的随机数
				if(isNum <= 3) { //0，1，2，3
					str += parseInt(Math.random() * 10); //数字
				} else if(isNum <= 6) { //4，5，6
					str += String.fromCharCode(parseInt(Math.random() * 26) + 65); //从A开始的26位字母
				} else if(isNum <= 9) { //7，8，9
					str += String.fromCharCode(parseInt(Math.random() * 26) + 97); //a开始的26为字母
				}
			}
			this.value = str; //点击按钮，赋值
		};

		//4. 获取短信验证 4个数字
		oinput[4].onclick = function() {

			var arr = new Array();
			for(var i = 0; i < 4; i++) {
				arr[i] = parseInt(Math.random() * 10);
			}

			var s = arr.join("");
			oinput[3].value = s; //点击获取手机验证就直接输入在前一个输入框
		};

		//5.短信验证码输入框  只能是4位纯数字
		d3 = 0;
		oinput[3].onblur = function() {
			var num = this.value;
			var isTrue = /\d{4}/g.test(num);
			if(isTrue) {
				info.innerHTML = "";
				d3 = 1;
			} else {
				info.innerHTML = " 请输入正确的4位短信验证码！";
				d3 = 0;
			}
		};

		//6.密码输入框
		d4 = 0;
		oinput[5].onblur = function() {
			var num = this.value;
			var isTrue = /([0-9]|[a-z]|[A-Z]){6,16}/g.test(num);
			if(isTrue) {
				info.innerHTML = "";
				d4 = 1;
			} else {
				info.innerHTML = " 请输入正确的6-16位字母或数字密码！";
				d4 = 0;
			}
		};

		//6.确认密码输入框
		d5 = 0;
		oinput[6].onblur = function() {
			var num = this.value;

			if(num == oinput[5].value) {
				info.innerHTML = "";
				d5 = 1;
			} else {
				info.innerHTML = " 确认密码与密码不符！";
				d5 = 0;
			}
		};

		//7.确认注册   所有信息都注册完全才能注册成功
		oinput[8].onclick = function() {

			if(oinput[7].checked && d1 == 1 && d2 == 1 && d3 == 1 && d4 == 1 & d5 == 1) {

				alert("注册成功");
				open("index.html"); //注册成功就可以转到主页面

			} else {
				if(oinput[7].checked && d1 == 0 && d2 == 1 && d3 == 1 && d4 == 1 & d5 == 1) {
					info.innerHTML = " 请填写正确的手机号";
				} else if(oinput[7].checked && d1 == 1 && d2 == 0 && d3 == 1 && d4 == 1 & d5 == 1) {
					info.innerHTML = " 请填写正确的验证码";
				} else if(oinput[7].checked && d1 == 1 && d2 == 1 && d3 == 0 && d4 == 1 & d5 == 1) {
					info.innerHTML = " 请填写正确的短信验证码";
				} else if(oinput[7].checked && d1 == 1 && d2 == 1 && d3 == 1 && d4 == 0 & d5 == 1) {
					info.innerHTML = " 请填写正确的密码";
				} else if(oinput[7].checked && d1 == 1 && d2 == 1 && d3 == 1 && d4 == 1 & d5 == 0) {
					info.innerHTML = " 请填写正确的确认密码";
				} else {
					info.innerHTML = " 请填写完整的信息！";
				} //下面还可以继续判断很多的条件
			}

			//8.使用cookie保存注册信息（手机号和密码 )
			var tel = oinput[0].value; //账号
			var num = oinput[5].value; //密码

			var d = new Date;
			d.setDate(d.getDate() + 10); //十天免登陆
			var username = setCookie("username", tel, d);
			var password = setCookie("password", num, d);

		}

	} //1