//登陆页面js

onload = function() {

		var oinput = document.getElementsByTagName("input");

		var user = getCookie("username"); //取注册信息账户名
		var pwd = getCookie("password"); //取注册信息密码

		// 点击注册按钮，触发事件
		oinput[3].onclick = function() {

				//在里面保存信息，使用的时候无法显示，并取到值，设到外面全局变量
				//var _user = oinput[0].value;
				//var _pwd = oinput[1].value;

				if(oinput[0].value == "" && oinput[1].value == "") { //如果账户和密码框输入为空
					alert("请输入账户名和密码"); //弹出提示信息
				} else { //2																						
					if(user === oinput[0].value && pwd === oinput[1].value) { //取到cookie账号密码符合就可以登陆页面
						alert("恭喜你，登陆成功！");
						open("index.html");
					} else { //如过取到的和前面注册的账号或密码不一致，有下面三种情况

						if(user !== oinput[0].value && pwd === oinput[1].value) { //1. 账号不一样，密码一样
							alert("账号不存在");
						} else if(user === oinput[0].value && pwd !== oinput[1].value) { //2. 账号不样，密码不一样
							alert("密码输入有误");
						} else { //3. 账号密码都不一样
							alert("账号和密码输入有误");
						}
					}
				} //2

				//勾选自动登录框，实现页面信息自动记录
				var ouser = oinput[0].value; //账户输入框信息
				var opwd = oinput[1].value; //密码输入框

				if(oinput[2].checked) { //如果勾选自动登陆按钮,就会记录账户和密码

					var d = new Date;
					d.setDate(d.getDate() + 10);
					var username = setCookie("ousername", ouser, d); //将刚刚输入的存到cookie中
					var password = setCookie("opassword", opwd, d);

				}

			} //2

		//账号密码自动填充
		//不能在刚刚勾选自动登录的事件里面书写，会失效，要放在外面
		var olduser = getCookie("ousername"); //取出刚输入的名字，作为老名字
		var oldpwd = getCookie("opassword"); //取出密码，作为老密码

		if(olduser) { //自动记录前面注册的信息，如果这个存在，记在输入框，实现自动登录
			oinput[0].value = olduser; //账户就是刚刚输入的账号
			oinput[1].value = oldpwd;
		}

	} //1