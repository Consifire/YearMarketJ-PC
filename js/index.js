//主页js

//cont_left 内容左边点击切换内容
jQuery(function($) {

	var $typelist = $("ul.typelist ");
	var $ullist = $("ul.ullist");

	//轮播图下面左边的小图
	//鼠标滑过改变下面的文字
	//1列表
	$typelist.children(".h1click").on("mouseenter", function() { //滑过第一个
		$ullist.eq(0).show(); //第一个下面的list就显示出来
		$(this).css("background", "none").css("border-bottom", "none").css("color", "#d85a44"); //改变这个List 和标题的样式，边框和颜色
		$(this).siblings("h3").css("background", "#e0dbd8").css("color", "#5c483d");
		$ullist.eq(1).hide(); //第二个list就隐藏
		$ullist.eq(2).hide(); //第三个list就隐藏
	});

	//2列表
	$typelist.children(".h2click").on("mouseenter", function() {
		$ullist.eq(0).hide();
		$ullist.eq(1).show();
		$(this).css("background", "none").css("border-bottom", "none").css("color", "#d85a44");
		$(this).siblings("h3").css("background", "#e0dbd8").css("color", "#5c483d");
		$ullist.eq(2).hide();
	});
	//3列表
	$typelist.children(".h3click").on("mouseenter", function() {
		$ullist.eq(0).hide();
		$ullist.eq(1).hide();
		$ullist.eq(2).show();
		$(this).css("background", "none").css("border-bottom", "none").css("color", "#d85a44");
		$(this).siblings("h3").css("background", "#e0dbd8").css("color", "#5c483d");
	});

	//右边点击切换轮播
	var $contlb_right_top = $(".contlb_right .contlb_right_top");
	var $rbtmlist1 = $(".contlb_right .rbtmlist1");

	$contlb_right_top.children("h3").eq(0).on("mouseenter", function() {
		$rbtmlist1.eq(0).fadeIn();
		$rbtmlist1.eq(0).siblings("ul").hide();
	});
	$contlb_right_top.children("h3").eq(1).on("mouseenter", function() {
		$rbtmlist1.eq(1).fadeIn();
		$rbtmlist1.eq(1).siblings("ul").hide();
	});
	$contlb_right_top.children("h3").eq(2).on("mouseenter", function() {
		$rbtmlist1.eq(2).fadeIn();
		$rbtmlist1.eq(2).siblings("ul").hide();
	});
	$contlb_right_top.children("h3").eq(3).on("mouseenter", function() {
		$rbtmlist1.eq(3).fadeIn();
		$rbtmlist1.eq(3).siblings("ul").hide();
	});
	$contlb_right_top.children("h3").eq(4).on("mouseenter", function() {
		$rbtmlist1.eq(4).fadeIn();
		$rbtmlist1.eq(4).siblings("ul").hide();
	});

	//2.猜你喜欢 鼠标进去改变边框颜色
	var $ulhobby = $(".conthobby_right ul");
	$ulhobby.on("mouseenter", function() {
		$(this).css("border-color", "#e54247");
		$(this).siblings().css("border-color", "#ebebe8");
	});

	//4.品牌汇
	//上
	var $ppha = $(".pph .pph1 li");
	$ppha.eq(0).width(445);
	$ppha.on("mouseenter", function() {
		$(this).stop().animate({
			width: 448
		}).siblings().stop().animate({
			width: 150
		});
	});

	//下
	var $ppha2 = $(".pph .pph2 li");
	//console.log($ppha2);
	$ppha2.on("mouseenter", function() {
		$(this).find("img").stop().animate({
			left: -102
		}, 500);
	}).on("mouseleave", function() {
		$(this).find("img").stop().animate({
			left: 0
		}, 500);
	});

	//5.进口葡萄酒
	//轮播图
	$(".imt_mid").lcarousel({
		type: "x",
		width: 760,
		height: 250,
		buttons: false,
		autoPlay: true, //是否自动轮播
		speed: 5000
	});

	//------性价比排行
	var $ulbtn2 = $(".content .cost .constright ul");
	$ulbtn2.eq(0).find("h3").hide();
	$ulbtn2.eq(0).find("li").show();

	$ulbtn2.eq(1).find("h3").hide();
	$ulbtn2.eq(1).find("li").show();

	$ulbtn2.eq(2).find("h3").hide();
	$ulbtn2.eq(2).find("li").show();

	$(".content .cost .constright ul:gt(2)").children("li").hide();

	$ulbtn2.mouseenter(function() { //鼠标进去
		$ulbtn2.eq(0).find("h3").hide(); //1 一直显示
		$ulbtn2.eq(0).find("li").show();

		$ulbtn2.eq(1).find("h3").hide(); //2 一直显示
		$ulbtn2.eq(1).find("li").show();

		$(this).children("li").show() //点击自己的li显示
			.end().siblings("ul:gt(1)").children("li").hide(); //其他下标大于1的ul 儿子隐藏
		$(this).children("h3").hide() //点击自己的h3隐藏
			.end().siblings("ul:gt(1)").children("h3").show(); //其他下标大于1的h3  标题显示
	});

	//-----洋酒右边
	var $ulbtn2 = $(".content .wine .wineright ul");
	$ulbtn2.eq(0).find("h3").hide();
	$ulbtn2.eq(0).find("li").show().end().siblings().children("li").hide();

	$ulbtn2.mouseenter(function() {
		$ulbtn2.eq(0).find("h3").show();
		$(this).children("li").show() //点击自己的li显示
			.end().siblings().children("li").hide(); //其他的li隐藏
		$(this).children("h3").hide() //点击自己的h3隐藏
			.end().siblings().children("h3").show(); //其他的h3显示
	});

	//------爆款精选右边
	var $ulbtn2 = $(".content .cost2 .constright ul");
	$ulbtn2.eq(0).find("h3").hide();
	$ulbtn2.eq(0).find("li").show();

	$ulbtn2.eq(1).find("h3").hide();
	$ulbtn2.eq(1).find("li").show();

	$ulbtn2.eq(2).find("h3").hide();
	$ulbtn2.eq(2).find("li").show();

	$(".content .cost2 .constright ul:gt(2)").children("li").hide();

	$ulbtn2.mouseenter(function() { //鼠标进去
		$ulbtn2.eq(0).find("h3").hide(); //1 一直显示
		$ulbtn2.eq(0).find("li").show();

		$ulbtn2.eq(1).find("h3").hide(); //2 一直显示
		$ulbtn2.eq(1).find("li").show();

		$(this).children("li").show() //点击自己的li显示
			.end().siblings("ul:gt(1)").children("li").hide(); //其他下标大于1的ul 儿子隐藏
		$(this).children("h3").hide() //点击自己的h3隐藏
			.end().siblings("ul:gt(1)").children("h3").show(); //其他下标大于1的h3  标题显示
	});

	//------性价比高的老酒
	var $ulbtn2 = $(".content .cost3 .constright ul");
	$ulbtn2.eq(0).find("h3").hide();
	$ulbtn2.eq(0).find("li").show();

	$ulbtn2.eq(1).find("h3").hide();
	$ulbtn2.eq(1).find("li").show();

	$ulbtn2.eq(2).find("h3").hide();
	$ulbtn2.eq(2).find("li").show();

	$(".content .cost3 .constright ul:gt(2)").children("li").hide();

	$ulbtn2.mouseenter(function() { //鼠标进去
		$ulbtn2.eq(0).find("h3").hide(); //1 一直显示
		$ulbtn2.eq(0).find("li").show();

		$ulbtn2.eq(1).find("h3").hide(); //2 一直显示
		$ulbtn2.eq(1).find("li").show();

		$(this).children("li").show() //点击自己的li显示
			.end().siblings("ul:gt(1)").children("li").hide(); //其他下标大于1的ul 儿子隐藏
		$(this).children("h3").hide() //点击自己的h3隐藏
			.end().siblings("ul:gt(1)").children("h3").show(); //其他下标大于1的h3  标题显示
	});

});